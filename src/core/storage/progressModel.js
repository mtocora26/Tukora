export const EXERCISE_STATUSES = Object.freeze([
  'not_started',
  'in_progress',
  'completed',
])

export function createEmptyProgress(courseId) {
  assertIdentifier(courseId, 'courseId')

  return {
    courseId,
    exercises: {},
    updatedAt: null,
  }
}

export function validateProgress(courseId, progress) {
  assertIdentifier(courseId, 'courseId')

  if (!isRecord(progress)) {
    throw new TypeError('progress must be an object')
  }

  if (progress.courseId !== courseId) {
    throw new TypeError('progress.courseId must match courseId')
  }

  if (!isRecord(progress.exercises)) {
    throw new TypeError('progress.exercises must be an object')
  }

  const exercises = Object.fromEntries(
    Object.entries(progress.exercises).map(([exerciseId, exercise]) => {
      assertIdentifier(exerciseId, 'exerciseId')
      validateExerciseProgress(exerciseId, exercise)
      return [exerciseId, { ...exercise }]
    }),
  )

  assertNullableTimestamp(progress.updatedAt, 'progress.updatedAt')

  return {
    courseId,
    exercises,
    updatedAt: progress.updatedAt,
  }
}

/**
 * Returns a copy of `progress` with one more completed attempt of an exercise.
 * The latest score wins; `completedAt` keeps the first completion date.
 *
 * @param {object} progress
 * @param {{ exerciseId: string, score: number, now: string }} attempt
 * @returns {object}
 */
export function recordExerciseAttempt(progress, { exerciseId, score, now }) {
  assertIdentifier(exerciseId, 'exerciseId')
  assertTimestamp(now, 'now')

  const previous = progress.exercises[exerciseId]
  const exercise = {
    exerciseId,
    status: 'completed',
    score,
    attempts: (previous?.attempts ?? 0) + 1,
    updatedAt: now,
    completedAt: previous?.completedAt ?? now,
  }
  validateExerciseProgress(exerciseId, exercise)

  return {
    ...progress,
    exercises: { ...progress.exercises, [exerciseId]: exercise },
  }
}

function validateExerciseProgress(exerciseId, exercise) {
  if (!isRecord(exercise)) {
    throw new TypeError(`progress for exercise "${exerciseId}" must be an object`)
  }

  if (exercise.exerciseId !== exerciseId) {
    throw new TypeError(
      `progress.exerciseId must match exercise key "${exerciseId}"`,
    )
  }

  if (!EXERCISE_STATUSES.includes(exercise.status)) {
    throw new TypeError(
      `progress.status must be one of: ${EXERCISE_STATUSES.join(', ')}`,
    )
  }

  if (
    exercise.score !== null &&
    (!Number.isFinite(exercise.score) ||
      exercise.score < 0 ||
      exercise.score > 100)
  ) {
    throw new TypeError('progress.score must be null or a number from 0 to 100')
  }

  if (!Number.isInteger(exercise.attempts) || exercise.attempts < 0) {
    throw new TypeError('progress.attempts must be a non-negative integer')
  }

  assertTimestamp(exercise.updatedAt, 'progress.updatedAt')
  assertNullableTimestamp(exercise.completedAt, 'progress.completedAt')
}

function assertIdentifier(value, name) {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new TypeError(`${name} must be a non-empty string`)
  }
}

function assertTimestamp(value, name) {
  if (
    typeof value !== 'string' ||
    Number.isNaN(Date.parse(value))
  ) {
    throw new TypeError(`${name} must be an ISO timestamp`)
  }
}

function assertNullableTimestamp(value, name) {
  if (value !== null) {
    assertTimestamp(value, name)
  }
}

function isRecord(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
