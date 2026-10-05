import assert from 'node:assert/strict'
import test from 'node:test'
import {
  computePlayerStats,
  currentStreak,
  levelForXp,
  localDateKey,
  previousDateKey,
} from './playerStats.js'

test('formats local dates and walks back across months and years', () => {
  assert.equal(localDateKey(new Date(2026, 0, 5, 23, 59)), '2026-01-05')
  assert.equal(previousDateKey('2026-03-01'), '2026-02-28')
  assert.equal(previousDateKey('2026-01-01'), '2025-12-31')
})

test('streak counts consecutive days ending today', () => {
  assert.equal(
    currentStreak(['2026-10-02', '2026-10-03', '2026-10-04'], '2026-10-04'),
    3,
  )
})

test('streak is still alive if the last study day was yesterday', () => {
  assert.equal(currentStreak(['2026-10-02', '2026-10-03'], '2026-10-04'), 2)
})

test('a missed day breaks the streak', () => {
  assert.equal(currentStreak(['2026-10-01', '2026-10-02'], '2026-10-04'), 0)
  assert.equal(
    currentStreak(['2026-09-30', '2026-10-02', '2026-10-03', '2026-10-04'], '2026-10-04'),
    3,
  )
  assert.equal(currentStreak([], '2026-10-04'), 0)
})

test('levels need more XP each time', () => {
  assert.deepEqual(levelForXp(0), { level: 1, xpInLevel: 0, xpForNext: 100 })
  assert.deepEqual(levelForXp(99), { level: 1, xpInLevel: 99, xpForNext: 100 })
  assert.deepEqual(levelForXp(100), { level: 2, xpInLevel: 0, xpForNext: 200 })
  assert.deepEqual(levelForXp(416), { level: 3, xpInLevel: 116, xpForNext: 300 })
  assert.equal(levelForXp(1000).level, 5)
})

test('player stats combine every course', () => {
  const progress = (xps, activityDays) => ({
    exercises: Object.fromEntries(xps.map((xp, i) => [`e${i}`, { xp }])),
    activityDays,
  })
  const stats = computePlayerStats(
    [
      progress([100, 50], ['2026-10-03']),
      progress([60], ['2026-10-04']),
      { exercises: { old: {} } }, // records saved before xp / activityDays existed
    ],
    '2026-10-04',
  )

  assert.equal(stats.totalXp, 210)
  assert.equal(stats.level, 2)
  assert.equal(stats.streak, 2)
  assert.equal(stats.studiedToday, true)
})
