import { useEffect, useState } from 'react'
import { APP_EVENTS } from '../core/events/eventBus.js'
import { localDateKey } from '../core/gamification/playerStats.js'
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
 * `repository` (and `events`, if given) must be stable between renders, e.g.
 * module-level instances. After saving it emits `progress:saved` on `events`.
 *
 * @param {{
 *   repository: import('../core/storage/ProgressRepository.js').ProgressRepository,
 *   courseId: string,
 *   exerciseId: string,
 *   exercise: { state: { status: string }, stats: { accuracy: number } },
 *   xp?: number,
 *   events?: { emit: Function },
 * }} options
 * @returns {{ record: object | null, saveStatus: string, error: Error | null }}
 */
export function useExerciseProgress({
  repository,
  courseId,
  exerciseId,
  exercise,
  xp = 0,
  events = null,
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

    const now = new Date()

    repository
      .getProgress(courseId)
      .then((progress) =>
        repository.saveProgress(
          courseId,
          recordExerciseAttempt(progress, {
            exerciseId,
            score,
            xp,
            now: now.toISOString(),
            today: localDateKey(now),
          }),
        ),
      )
      .then((savedProgress) => {
        setRecord(savedProgress.exercises[exerciseId])
        setSaved(true)
        events?.emit(APP_EVENTS.PROGRESS_SAVED, { courseId, exerciseId })
      })
      .catch(setError)
  }, [completed, repository, events, courseId, exerciseId, score, xp])

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
