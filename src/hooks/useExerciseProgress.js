import { useEffect, useState } from 'react'
import { recordExerciseAttempt } from '../core/storage/progressModel.js'
import { EXERCISE_STATES } from './useExercise.js'

export const SAVE_STATUSES = Object.freeze({
  IDLE: 'idle',
  SAVING: 'saving',
  SAVED: 'saved',
  ERROR: 'error',
})

/**
 * Loads the stored record of an exercise and saves a new attempt through a
 * `ProgressRepository` once the exercise reaches `completed`.
 *
 * `repository` must be stable between renders (e.g. a module-level instance).
 *
 * @param {{
 *   repository: import('../core/storage/ProgressRepository.js').ProgressRepository,
 *   courseId: string,
 *   exerciseId: string,
 *   exercise: { state: { status: string }, stats: { accuracy: number } },
 *   xp?: number,
 * }} options
 * @returns {{ record: object | null, saveStatus: string, error: Error | null }}
 */
export function useExerciseProgress({
  repository,
  courseId,
  exerciseId,
  exercise,
  xp = 0,
}) {
  const [record, setRecord] = useState(null)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState(null)

  const completed = exercise.state.status === EXERCISE_STATES.DONE
  const score = exercise.stats.accuracy

  useEffect(() => {
    let ignore = false

    repository
      .getProgress(courseId)
      .then((progress) => {
        if (!ignore) {
          setRecord(progress.exercises[exerciseId] ?? null)
        }
      })
      .catch((loadError) => {
        if (!ignore) {
          setError(loadError)
        }
      })

    return () => {
      ignore = true
    }
  }, [repository, courseId, exerciseId])

  useEffect(() => {
    if (!completed) {
      return
    }

    repository
      .getProgress(courseId)
      .then((progress) =>
        repository.saveProgress(
          courseId,
          recordExerciseAttempt(progress, {
            exerciseId,
            score,
            xp,
            now: new Date().toISOString(),
          }),
        ),
      )
      .then((savedProgress) => {
        setRecord(savedProgress.exercises[exerciseId])
        setSaved(true)
      })
      .catch(setError)
  }, [completed, repository, courseId, exerciseId, score, xp])

  return {
    record,
    saveStatus: getSaveStatus({ completed, saved, error }),
    error,
  }
}

function getSaveStatus({ completed, saved, error }) {
  if (error) return SAVE_STATUSES.ERROR
  if (!completed) return SAVE_STATUSES.IDLE
  return saved ? SAVE_STATUSES.SAVED : SAVE_STATUSES.SAVING
}
