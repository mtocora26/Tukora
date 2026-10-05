import assert from 'node:assert/strict'
import test from 'node:test'
import { createEmptyProgress, recordExerciseAttempt } from './progressModel.js'

const FIRST = '2026-10-04T10:00:00.000Z'
const SECOND = '2026-10-05T10:00:00.000Z'

test('records the first completed attempt of an exercise', () => {
  const progress = recordExerciseAttempt(createEmptyProgress('italian-a1'), {
    exerciseId: 'saluti-1',
    score: 80,
    now: FIRST,
  })

  assert.deepEqual(progress.exercises['saluti-1'], {
    exerciseId: 'saluti-1',
    status: 'completed',
    score: 80,
    attempts: 1,
    updatedAt: FIRST,
    completedAt: FIRST,
  })
})

test('increments attempts and keeps the first completion date', () => {
  const first = recordExerciseAttempt(createEmptyProgress('italian-a1'), {
    exerciseId: 'saluti-1',
    score: 80,
    now: FIRST,
  })
  const second = recordExerciseAttempt(first, {
    exerciseId: 'saluti-1',
    score: 100,
    now: SECOND,
  })

  assert.equal(second.exercises['saluti-1'].attempts, 2)
  assert.equal(second.exercises['saluti-1'].score, 100)
  assert.equal(second.exercises['saluti-1'].updatedAt, SECOND)
  assert.equal(second.exercises['saluti-1'].completedAt, FIRST)
})

test('does not mutate the original progress', () => {
  const original = createEmptyProgress('italian-a1')

  recordExerciseAttempt(original, {
    exerciseId: 'saluti-1',
    score: 50,
    now: FIRST,
  })

  assert.deepEqual(original.exercises, {})
})

test('rejects scores outside 0-100', () => {
  assert.throws(
    () =>
      recordExerciseAttempt(createEmptyProgress('italian-a1'), {
        exerciseId: 'saluti-1',
        score: 120,
        now: FIRST,
      }),
    TypeError,
  )
})
