import assert from 'node:assert/strict'
import test from 'node:test'
import { starsForAccuracy, xpForSession } from './scoring.js'

test('stars depend on first-pass accuracy', () => {
  assert.equal(starsForAccuracy(100), 3)
  assert.equal(starsForAccuracy(90), 3)
  assert.equal(starsForAccuracy(89), 2)
  assert.equal(starsForAccuracy(60), 2)
  assert.equal(starsForAccuracy(0), 1)
})

test('a perfect session gets every bonus', () => {
  const xp = xpForSession({ correct: 8, reviewed: 0, accuracy: 100, maxCombo: 8 })

  assert.equal(xp.total, 80 + 20 + 16)
  assert.deepEqual(
    xp.breakdown.map((line) => line.xp),
    [80, 20, 16],
  )
})

test('corrected mistakes give a little XP and short combos give none', () => {
  const xp = xpForSession({ correct: 5, reviewed: 3, accuracy: 63, maxCombo: 2 })

  assert.equal(xp.total, 50 + 6)
})

test('an empty session gives no XP', () => {
  assert.deepEqual(
    xpForSession({ correct: 0, reviewed: 0, accuracy: 0, maxCombo: 0 }),
    { total: 0, breakdown: [] },
  )
})
