import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createEmptyProgress,
  MAX_ACTIVITY_DAYS,
  recordExerciseAttempt,
  validateProgress,
} from './progressModel.js'

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
    bestScore: 80,
    xp: 0,
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

test('keeps the best score and accumulates xp', () => {
  const first = recordExerciseAttempt(createEmptyProgress('italian-a1'), {
    exerciseId: 'saluti-1',
    score: 90,
    xp: 100,
    now: FIRST,
  })
  const second = recordExerciseAttempt(first, {
    exerciseId: 'saluti-1',
    score: 50,
    xp: 40,
    now: SECOND,
  })

  assert.equal(second.exercises['saluti-1'].score, 50)
  assert.equal(second.exercises['saluti-1'].bestScore, 90)
  assert.equal(second.exercises['saluti-1'].xp, 140)
})

test('upgrades records saved before bestScore and xp existed', () => {
  const legacy = {
    courseId: 'italian-a1',
    updatedAt: null,
    exercises: {
      'saluti-1': {
        exerciseId: 'saluti-1',
        status: 'completed',
        score: 70,
        attempts: 1,
        updatedAt: FIRST,
        completedAt: FIRST,
      },
    },
  }
  const next = recordExerciseAttempt(legacy, {
    exerciseId: 'saluti-1',
    score: 60,
    xp: 10,
    now: SECOND,
  })

  assert.equal(next.exercises['saluti-1'].bestScore, 70)
  assert.equal(next.exercises['saluti-1'].xp, 10)
})

test('records each study day once, sorted', () => {
  let progress = createEmptyProgress('italian-a1')
  for (const [exerciseId, today] of [
    ['a', '2026-10-04'],
    ['b', '2026-10-02'],
    ['a', '2026-10-04'],
  ]) {
    progress = recordExerciseAttempt(progress, {
      exerciseId,
      score: 100,
      now: FIRST,
      today,
    })
  }

  assert.deepEqual(progress.activityDays, ['2026-10-02', '2026-10-04'])
})

test('keeps only the most recent activity days', () => {
  const progress = {
    ...createEmptyProgress('italian-a1'),
    activityDays: Array.from({ length: MAX_ACTIVITY_DAYS }, (_, i) =>
      new Date(Date.UTC(2024, 0, 1 + i)).toISOString().slice(0, 10),
    ),
  }
  const next = recordExerciseAttempt(progress, {
    exerciseId: 'a',
    score: 100,
    now: FIRST,
    today: '2026-10-04',
  })

  assert.equal(next.activityDays.length, MAX_ACTIVITY_DAYS)
  assert.equal(next.activityDays.at(-1), '2026-10-04')
  assert.equal(next.activityDays[0], '2024-01-02')
})

test('validateProgress keeps activity days and rejects invalid ones', () => {
  const progress = { ...createEmptyProgress('italian-a1'), activityDays: ['2026-10-04'] }

  assert.deepEqual(validateProgress('italian-a1', progress).activityDays, ['2026-10-04'])
  assert.equal('activityDays' in validateProgress('italian-a1', createEmptyProgress('italian-a1')), false)
  assert.throws(
    () => validateProgress('italian-a1', { ...progress, activityDays: ['4/10/2026'] }),
    /activityDays/,
  )
})
