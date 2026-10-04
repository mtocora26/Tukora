import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createStudySession,
  currentItemIndex,
  NEXT_STEPS,
  peekNextStep,
  SESSION_PHASES,
  studySessionReducer,
} from './studySession.js'

// Answers the current item and moves on.
function play(state, ...results) {
  return results.reduce((session, correct) => {
    const answered = studySessionReducer(session, {
      type: 'answer',
      value: correct ? 'ok' : 'ko',
      correct,
    })
    return studySessionReducer(answered, { type: 'next' })
  }, state)
}

test('starts idle and becomes active on start', () => {
  const idle = createStudySession({ totalItems: 2 })
  assert.equal(idle.phase, SESSION_PHASES.IDLE)
  assert.equal(currentItemIndex(idle), null)

  const active = studySessionReducer(idle, { type: 'start' })
  assert.equal(active.phase, SESSION_PHASES.ACTIVE)
  assert.equal(currentItemIndex(active), 0)
})

test('can start immediately', () => {
  const session = createStudySession({ totalItems: 1, startImmediately: true })
  assert.equal(session.phase, SESSION_PHASES.ACTIVE)
})

test('rejects an empty session', () => {
  assert.throws(() => createStudySession({ totalItems: 0 }), TypeError)
})

test('records an answer and updates statistics', () => {
  const session = createStudySession({ totalItems: 2, startImmediately: true })
  const answered = studySessionReducer(session, {
    type: 'answer',
    value: 'ciao',
    correct: true,
  })

  assert.equal(answered.currentAnswer, 'ciao')
  assert.equal(answered.currentResult, 'correct')
  assert.deepEqual(answered.stats, {
    answered: 1,
    correct: 1,
    incorrect: 0,
    accuracy: 100,
    reviewed: 0,
    combo: 1,
    maxCombo: 1,
  })
})

test('ignores a second answer and next before answering', () => {
  const session = createStudySession({ totalItems: 2, startImmediately: true })
  assert.equal(studySessionReducer(session, { type: 'next' }), session)

  const answered = studySessionReducer(session, {
    type: 'answer',
    value: 'a',
    correct: true,
  })
  assert.equal(
    studySessionReducer(answered, { type: 'answer', value: 'b', correct: false }),
    answered,
  )
})

test('ignores answers while idle or done and unknown actions', () => {
  const idle = createStudySession({ totalItems: 1 })
  assert.equal(
    studySessionReducer(idle, { type: 'answer', value: 'a', correct: true }),
    idle,
  )

  const done = play(studySessionReducer(idle, { type: 'start' }), true)
  assert.equal(done.phase, SESSION_PHASES.DONE)
  assert.equal(studySessionReducer(done, { type: 'start' }), done)
  assert.equal(studySessionReducer(done, { type: 'unknown' }), done)
})

test('without review, finishes after the first pass even with mistakes', () => {
  const session = createStudySession({ totalItems: 2, startImmediately: true })
  const done = play(session, false, true)

  assert.equal(done.phase, SESSION_PHASES.DONE)
  assert.equal(done.stats.accuracy, 50)
})

test('with review, repeats missed items until they are correct', () => {
  let session = createStudySession({
    totalItems: 3,
    reviewMistakes: true,
    startImmediately: true,
  })

  session = play(session, true, false) // item 0 ok, item 1 missed
  session = studySessionReducer(session, {
    type: 'answer',
    value: 'ko',
    correct: false,
  }) // item 2 missed
  assert.equal(peekNextStep(session), NEXT_STEPS.REVIEW)

  session = studySessionReducer(session, { type: 'next' })
  assert.equal(session.phase, SESSION_PHASES.REVIEWING)
  assert.deepEqual(session.queue, [1, 2])
  assert.equal(currentItemIndex(session), 1)

  session = play(session, true, false) // item 1 fixed, item 2 missed again
  assert.equal(session.phase, SESSION_PHASES.REVIEWING)
  assert.deepEqual(session.queue, [2])

  session = play(session, true)
  assert.equal(session.phase, SESSION_PHASES.DONE)
})

test('the score only counts the first pass', () => {
  const session = createStudySession({
    totalItems: 2,
    reviewMistakes: true,
    startImmediately: true,
  })
  const done = play(session, false, true, true)

  assert.equal(done.phase, SESSION_PHASES.DONE)
  assert.equal(done.stats.answered, 2)
  assert.equal(done.stats.correct, 1)
  assert.equal(done.stats.accuracy, 50)
  assert.equal(done.stats.reviewed, 1)
})

test('tracks the current and best combo', () => {
  const session = createStudySession({ totalItems: 5, startImmediately: true })
  const done = play(session, true, true, true, false, true)

  assert.equal(done.stats.combo, 1)
  assert.equal(done.stats.maxCombo, 3)
})

test('step increases on every next, also when an item repeats', () => {
  const session = createStudySession({
    totalItems: 1,
    reviewMistakes: true,
    startImmediately: true,
  })
  const afterFirst = play(session, false)
  const afterSecond = play(afterFirst, false)

  assert.equal(currentItemIndex(afterFirst), 0)
  assert.equal(currentItemIndex(afterSecond), 0)
  assert.notEqual(afterFirst.step, afterSecond.step)
})
