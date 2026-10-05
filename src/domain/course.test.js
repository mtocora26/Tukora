import assert from 'node:assert/strict'
import test from 'node:test'
import { validateCourse } from './course.js'

function minimalCourse(exercises, extra = {}) {
  return {
    id: 'test-course',
    title: 'Test',
    language: 'it',
    level: 'A1',
    modules: [
      {
        id: 'm1',
        title: 'Module',
        lessons: [{ id: 'l1', title: 'Lesson', theory: [], exercises }],
      },
    ],
    ...extra,
  }
}

const choice = {
  id: 'e1',
  type: 'choice',
  prompt: '?',
  options: ['a', 'b'],
  answer: 'a',
}

test('accepts a valid course', () => {
  const course = minimalCourse([choice])
  assert.equal(validateCourse(course), course)
})

test('reports the path of the invalid field', () => {
  assert.throws(
    () => validateCourse(minimalCourse([{ ...choice, answer: 'z' }])),
    /course\.modules\[0\]\.lessons\[0\]\.exercises\[0\]\.answer must be one of the options/,
  )
})

test('rejects duplicated ids across the course', () => {
  assert.throws(
    () => validateCourse(minimalCourse([choice, { ...choice }])),
    /"e1" is duplicated/,
  )
})

test('rejects unknown exercise types', () => {
  assert.throws(
    () => validateCourse(minimalCourse([{ ...choice, type: 'quiz' }])),
    /type must be one of/,
  )
})

test('requires reorder answers to use exactly the given tokens', () => {
  const reorder = {
    id: 'e1',
    type: 'reorder',
    prompt: '?',
    tokens: ['sono', 'Io'],
    answer: ['Io', 'sono'],
  }

  assert.doesNotThrow(() => validateCourse(minimalCourse([reorder])))
  assert.throws(
    () => validateCourse(minimalCourse([{ ...reorder, answer: ['Io', 'sei'] }])),
    /answer must use exactly the same tokens/,
  )
  assert.throws(
    () =>
      validateCourse(
        minimalCourse([{ ...reorder, alternatives: [['Io', 'Io']] }]),
      ),
    /alternatives\[0\] must use exactly the same tokens/,
  )
})

test('rejects match exercises with repeated sides', () => {
  const match = {
    id: 'e1',
    type: 'match',
    prompt: '?',
    pairs: [
      ['io', 'sono'],
      ['loro', 'sono'],
    ],
  }

  assert.throws(
    () => validateCourse(minimalCourse([match])),
    /pairs must not contain duplicates/,
  )
})

test('requires every spelled letter to have a city in the alphabet', () => {
  const alphabet = [
    { letter: 'A', name: 'a', cities: ['Ancona'] },
    { letter: 'K', name: 'cappa', cities: [] },
  ]
  const spelling = { id: 'e1', type: 'spelling', prompt: '?', word: 'AKA' }

  assert.throws(
    () => validateCourse(minimalCourse([{ ...spelling, word: 'AA' }])),
    /need a course\.alphabet/,
  )
  assert.throws(
    () => validateCourse(minimalCourse([spelling], { alphabet })),
    /letter "K" has no city/,
  )
})

test('rejects alphabet cities that do not start with their letter', () => {
  const alphabet = [{ letter: 'A', name: 'a', cities: ['Bologna'] }]

  assert.throws(
    () => validateCourse(minimalCourse([choice], { alphabet })),
    /cities\[0\] must start with "A"/,
  )
})

test('requires table rows to match the number of columns', () => {
  const course = minimalCourse([choice])
  course.modules[0].lessons[0].theory = [
    { type: 'table', columns: ['a', 'b'], rows: [['1']] },
  ]

  assert.throws(() => validateCourse(course), /rows\[0\] must have 2 cells/)
})
