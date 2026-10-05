import { useEffect, useState } from 'react'

/**
 * Loads a course's progress through a `ProgressRepository`.
 * `repository` must be stable between renders. Changing `refreshKey` (for
 * example the current lesson id) reloads it.
 *
 * @returns {{ progress: object | null, error: Error | null }}
 *   `progress` is null while loading.
 */
export function useCourseProgress({ repository, courseId, refreshKey = null }) {
  const key = `${courseId}|${refreshKey}`
  const [result, setResult] = useState({ key: null, progress: null, error: null })

  useEffect(() => {
    let ignore = false

    repository
      .getProgress(courseId)
      .then((progress) => {
        if (!ignore) setResult({ key, progress, error: null })
      })
      .catch((error) => {
        if (!ignore) setResult({ key, progress: null, error })
      })

    return () => {
      ignore = true
    }
  }, [repository, courseId, key])

  // Ignore a result that belongs to a previous courseId/refreshKey.
  return result.key === key
    ? { progress: result.progress, error: result.error }
    : { progress: null, error: null }
}
