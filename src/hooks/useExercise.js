import { useReducer } from 'react'
import {
  createStudySession,
  currentItemIndex,
  peekNextStep,
  SESSION_PHASES,
  studySessionReducer,
} from '../core/session/studySession.js'

export const EXERCISE_STATES = SESSION_PHASES

/**
 * Shared contract for exercise implementations, backed by the study session
 * state machine (`core/session/studySession.js`).
 *
 * @param {{
 *   items: Array,
 *   validateAnswer: (answer: unknown, item: unknown) => boolean,
 *   reviewMistakes?: boolean,
 *   startImmediately?: boolean,
 * }} options
 * @returns {{ state: object, answer: Function, next: Function, start: Function, stats: object }}
 */
export function useExercise({
  items,
  validateAnswer,
  reviewMistakes = false,
  startImmediately = true,
}) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new TypeError('useExercise items must be a non-empty array')
  }

  if (typeof validateAnswer !== 'function') {
    throw new TypeError('useExercise validateAnswer must be a function')
  }

  const [session, dispatch] = useReducer(
    studySessionReducer,
    { totalItems: items.length, reviewMistakes, startImmediately },
    createStudySession,
  )

  const itemIndex = currentItemIndex(session)

  const state = {
    status: session.phase,
    currentIndex: itemIndex,
    currentItem: itemIndex === null ? null : items[itemIndex],
    totalItems: items.length,
    position: session.position,
    queueLength: session.queue.length,
    step: session.step,
    nextStep: peekNextStep(session),
    answer: session.currentAnswer,
    result: session.currentResult,
  }

  function answer(value) {
    if (itemIndex === null || session.currentResult !== null) {
      return
    }

    dispatch({
      type: 'answer',
      value,
      correct: validateAnswer(value, items[itemIndex]),
    })
  }

  function next() {
    dispatch({ type: 'next' })
  }

  function start() {
    dispatch({ type: 'start' })
  }

  return { state, answer, next, start, stats: session.stats }
}
