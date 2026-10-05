const DAY_MS = 24 * 60 * 60 * 1000

// Nivel n empieza en 100 · (1 + 2 + … + (n−1)) XP: 0, 100, 300, 600, 1000…
const XP_LEVEL_STEP = 100

/** Local calendar day as "YYYY-MM-DD" (streaks follow the user's clock). */
export function localDateKey(date) {
  const pad = (value) => String(value).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export function previousDateKey(key) {
  const [year, month, day] = key.split('-').map(Number)
  const previous = new Date(Date.UTC(year, month - 1, day) - DAY_MS)
  return previous.toISOString().slice(0, 10)
}

/**
 * Consecutive study days ending today, or ending yesterday if today has no
 * activity yet (the streak is still alive until the day ends).
 *
 * @param {Iterable<string>} days "YYYY-MM-DD" keys
 * @param {string} today
 */
export function currentStreak(days, today) {
  const studied = new Set(days)
  let day = studied.has(today) ? today : previousDateKey(today)
  let streak = 0

  while (studied.has(day)) {
    streak += 1
    day = previousDateKey(day)
  }
  return streak
}

export function xpForLevel(level) {
  return (XP_LEVEL_STEP * level * (level - 1)) / 2
}

/** @returns {{ level: number, xpInLevel: number, xpForNext: number }} */
export function levelForXp(xp) {
  let level = 1
  while (xp >= xpForLevel(level + 1)) level += 1

  return {
    level,
    xpInLevel: xp - xpForLevel(level),
    xpForNext: xpForLevel(level + 1) - xpForLevel(level),
  }
}

/**
 * Global stats across every course.
 *
 * @param {object[]} progresses course progress documents (core/storage)
 * @param {string} today local date key
 */
export function computePlayerStats(progresses, today) {
  const records = progresses.flatMap((progress) => Object.values(progress.exercises))
  const days = progresses.flatMap((progress) => progress.activityDays ?? [])
  const totalXp = records.reduce((sum, record) => sum + (record.xp ?? 0), 0)

  return {
    totalXp,
    ...levelForXp(totalXp),
    streak: currentStreak(days, today),
    studiedToday: days.includes(today),
  }
}
