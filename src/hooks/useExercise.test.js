import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createInitialExerciseState,
  exerciseReducer,
  EXERCISE_STATES,
} from './useExercise.js'

test('records a correct answer and updates statistics', () => {
  const answered = exerciseReducer(createInitialExerciseState(), {
    type: 'answer',
    value: 'ciao',
    correct: true,
  })

  assert.equal(answered.currentAnswer, 'ciao')
  assert.equal(answered.currentResult, 'correct')
  assert.deepEqual(answered.stats, {
    answered: 1,
    correct: 1,
    incorrect: 0,
    accuracy: 100,
  })
})

test('advances to the next item and completes the last item', () => {
  const initial = createInitialExerciseState()
  const answered = exerciseReducer(initial, {
    type: 'answer',
    value: 'ciao',
    correct: false,
  })
  const advanced = exerciseReducer(answered, { type: 'next', totalItems: 2 })
  const completed = exerciseReducer(advanced, {
    type: 'answer',
    value: 'hello',
    correct: true,
  })

  assert.equal(advanced.currentIndex, 1)
  assert.equal(advanced.status, EXERCISE_STATES.ACTIVE)
  assert.equal(advanced.currentResult, null)

  assert.equal(
    exerciseReducer(completed, { type: 'next', totalItems: 2 }).status,
    EXERCISE_STATES.COMPLETED,
  )
})

test('ignores unknown actions without changing state', () => {
  const initial = createInitialExerciseState()

  assert.deepEqual(exerciseReducer(initial, { type: 'unknown' }), initial)
})