import assert from 'node:assert/strict'
import test from 'node:test'
import { validateCourse } from '../../domain/course.js'
import { COURSES } from './index.js'

for (const course of COURSES) {
  test(`course "${course.id}" matches the content model`, () => {
    assert.doesNotThrow(() => validateCourse(course))
  })
}

test('course ids are unique', () => {
  const ids = COURSES.map((course) => course.id)
  assert.equal(new Set(ids).size, ids.length)
})
