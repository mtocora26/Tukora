/**
 * Study session state machine (EPIC-07-06):
 *
 *   idle ──start──▶ active ──(last item, with mistakes)──▶ reviewing ──▶ done
 *                     └──────────(last item, no mistakes)──────────────▶ done
 *
 * - `active`: first pass over every item. Only these answers count for the
 *   score (`stats.answered/correct/incorrect/accuracy`).
 * - `reviewing`: items missed in the previous pass come back until they are
 *   answered correctly. Only enabled with `reviewMistakes`.
 *
 * Inside `active`/`reviewing` each step is: answer → result → next.
 * Invalid actions (answering twice, `next` before answering…) are ignored.
 */
export const SESSION_PHASES = Object.freeze({
  IDLE: 'idle',
  ACTIVE: 'active',
  REVIEWING: 'reviewing',
  DONE: 'done',
})

export const NEXT_STEPS = Object.freeze({
  ITEM: 'item',
  REVIEW: 'review',
  DONE: 'done',
})

const INITIAL_STATS = Object.freeze({
  answered: 0,
  correct: 0,
  incorrect: 0,
  accuracy: 0,
  reviewed: 0,
  combo: 0,
  maxCombo: 0,
})

/**
 * @param {{ totalItems: number, reviewMistakes?: boolean, startImmediately?: boolean }} options
 */
export function createStudySession({
  totalItems,
  reviewMistakes = false,
  startImmediately = false,
}) {
  if (!Number.isInteger(totalItems) || totalItems < 1) {
    throw new TypeError('totalItems must be a positive integer')
  }

  const session = {
    phase: SESSION_PHASES.IDLE,
    totalItems,
    reviewMistakes,
    queue: [],
    position: 0,
    pending: [],
    step: 0,
    currentAnswer: null,
    currentResult: null,
    stats: { ...INITIAL_STATS },
  }

  return startImmediately
    ? studySessionReducer(session, { type: 'start' })
    : session
}

export function studySessionReducer(state, action) {
  switch (action.type) {
    case 'start':
      if (state.phase !== SESSION_PHASES.IDLE) return state
      return {
        ...state,
        phase: SESSION_PHASES.ACTIVE,
        queue: Array.from({ length: state.totalItems }, (_, i) => i),
        position: 0,
      }

    case 'answer':
      if (!isAnswering(state)) return state
      return applyAnswer(state, action.value, Boolean(action.correct))

    case 'next':
      if (!isAnswering(state) || state.currentResult === null) return state
      return advance(state)

    default:
      return state
  }
}

/** Index (in the original items) of the item being shown, or null. */
export function currentItemIndex(state) {
  return isAnswering(state) ? state.queue[state.position] : null
}

/** What `next` will do from the current state, or null if it cannot run yet. */
export function peekNextStep(state) {
  if (!isAnswering(state) || state.currentResult === null) return null
  if (state.position + 1 < state.queue.length) return NEXT_STEPS.ITEM
  if (state.pending.length > 0) return NEXT_STEPS.REVIEW
  return NEXT_STEPS.DONE
}

function isAnswering(state) {
  return (
    state.phase === SESSION_PHASES.ACTIVE ||
    state.phase === SESSION_PHASES.REVIEWING
  )
}

function applyAnswer(state, value, correct) {
  if (state.currentResult !== null) return state

  const firstPass = state.phase === SESSION_PHASES.ACTIVE
  const stats = { ...state.stats }

  if (firstPass) {
    stats.answered += 1
    stats.correct += correct ? 1 : 0
    stats.incorrect = stats.answered - stats.correct
    stats.accuracy = Math.round((stats.correct / stats.answered) * 100)
  } else if (correct) {
    stats.reviewed += 1
  }

  stats.combo = correct ? stats.combo + 1 : 0
  stats.maxCombo = Math.max(stats.maxCombo, stats.combo)

  const pending =
    !correct && state.reviewMistakes
      ? [...state.pending, state.queue[state.position]]
      : state.pending

  return {
    ...state,
    pending,
    currentAnswer: value,
    currentResult: correct ? 'correct' : 'incorrect',
    stats,
  }
}

function advance(state) {
  const cleared = {
    ...state,
    step: state.step + 1,
    currentAnswer: null,
    currentResult: null,
  }

  switch (peekNextStep(state)) {
    case NEXT_STEPS.ITEM:
      return { ...cleared, position: state.position + 1 }
    case NEXT_STEPS.REVIEW:
      return {
        ...cleared,
        phase: SESSION_PHASES.REVIEWING,
        queue: state.pending,
        pending: [],
        position: 0,
      }
    default:
      return { ...cleared, phase: SESSION_PHASES.DONE, queue: [], position: 0 }
  }
}
