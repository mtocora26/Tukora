import { useReducer } from 'react'

export const EXERCISE_STATES = Object.freeze({
  ACTIVE: 'active',
  COMPLETED: 'completed',
})

const INITIAL_STATS = Object.freeze({
  answered: 0,
  correct: 0,
  incorrect: 0,
  accuracy: 0,
})

/**
 * Shared contract for exercise implementations.
 *
 * @param {{ items: Array, validateAnswer: (answer: unknown, item: unknown) => boolean }} options
 * @returns {{ state: object, answer: Function, next: Function, stats: object }}
 */
export function useExercise({ items, validateAnswer }) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new TypeError('useExercise items must be a non-empty array')
  }

  if (typeof validateAnswer !== 'function') {
    throw new TypeError('useExercise validateAnswer must be a function')
  }

  const [exercise, dispatch] = useReducer(exerciseReducer, {
    currentIndex: 0,
    currentAnswer: null,
    currentResult: null,
    status: EXERCISE_STATES.ACTIVE,
    stats: { ...INITIAL_STATS },
  })

  const state = {
    status: exercise.status,
    currentIndex: exercise.currentIndex,
    currentItem: items[exercise.currentIndex] ?? null,
    answer: exercise.currentAnswer,
    result: exercise.currentResult,
  }

  function answer(value) {
    if (exercise.currentResult !== null) {
      return
    }

    dispatch({
      type: 'answer',
      value,
      correct: validateAnswer(value, items[exercise.currentIndex]),
    })
  }

  function next() {
    if (exercise.currentResult === null) {
      return
    }

    dispatch({ type: 'next', totalItems: items.length })
  }

  return { state, answer, next, stats: exercise.stats }
}

export function createInitialExerciseState() {
  return {
    currentIndex: 0,
    currentAnswer: null,
    currentResult: null,
    status: EXERCISE_STATES.ACTIVE,
    stats: { ...INITIAL_STATS },
  }
}

export function exerciseReducer(state, action) {
  if (action.type === 'answer') {
    const answered = state.stats.answered + 1
    const correct = state.stats.correct + (action.correct ? 1 : 0)
    const incorrect = answered - correct

    return {
      ...state,
      currentAnswer: action.value,
      currentResult: action.correct ? 'correct' : 'incorrect',
      stats: {
        answered,
        correct,
        incorrect,
        accuracy: Math.round((correct / answered) * 100),
      },
    }
  }

  if (action.type === 'next') {
    const nextIndex = state.currentIndex + 1
    const completed = nextIndex >= action.totalItems

    return {
      ...state,
      currentIndex: completed ? state.currentIndex : nextIndex,
      currentAnswer: null,
      currentResult: null,
      status: completed ? EXERCISE_STATES.COMPLETED : EXERCISE_STATES.ACTIVE,
    }
  }

  return state
}