import { useEffect, useState } from 'react'
import { APP_EVENTS } from '../core/events/eventBus.js'
import { computePlayerStats, localDateKey } from '../core/gamification/playerStats.js'

/**
 * Global player stats (total XP, level, streak) across `courses`. Reloads
 * whenever `events` reports that progress was saved.
 * `repository`, `courses` and `events` must be stable between renders.
 *
 * @returns {object | null} null while loading or if loading failed
 */
export function usePlayerStats({ repository, courses, events }) {
  const [stats, setStats] = useState(null)
  const [version, setVersion] = useState(0)

  useEffect(
    () => events.on(APP_EVENTS.PROGRESS_SAVED, () => setVersion((value) => value + 1)),
    [events],
  )

  useEffect(() => {
    let ignore = false

    Promise.all(courses.map((course) => repository.getProgress(course.id)))
      .then((progresses) => {
        if (!ignore) setStats(computePlayerStats(progresses, localDateKey(new Date())))
      })
      .catch(() => {
        // Stats are decorative: if progress cannot be read, hide them.
        if (!ignore) setStats(null)
      })

    return () => {
      ignore = true
    }
  }, [repository, courses, version])

  return stats
}
