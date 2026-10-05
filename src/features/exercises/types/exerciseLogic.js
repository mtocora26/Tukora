import { validateTextAnswer } from '../text-answer/textAnswer.js'

const SPELLING_DISTRACTORS = 3

/**
 * Adds a `view` with everything an exercise needs to be shown that is random
 * (shuffled options, token bank…). Runs once per lesson, outside render, so
 * components stay pure.
 *
 * @param {object} exercise content exercise (see domain/course.js)
 * @param {{ alphabet?: object[], random?: () => number }} context
 */
export function prepareExercise(exercise, { alphabet = [], random = Math.random } = {}) {
  switch (exercise.type) {
    case 'choice':
      return { ...exercise, view: { options: shuffle(exercise.options, random) } }

    case 'reorder': {
      const tokens = exercise.tokens.map((text, id) => ({ id, text }))
      return {
        ...exercise,
        view: {
          tokens: shuffleAvoiding(tokens, random, (list) =>
            isAcceptedOrder(list.map((token) => token.text), exercise),
          ),
        },
      }
    }

    case 'match':
      return {
        ...exercise,
        view: { right: shuffle(exercise.pairs.map(([, right]) => right), random) },
      }

    case 'spelling': {
      const letters = new Set(exercise.word.toUpperCase())
      const own = [...letters].map((letter) => findEntry(alphabet, letter).cities[0])
      const others = alphabet
        .filter((entry) => !letters.has(entry.letter) && entry.cities.length > 0)
        .map((entry) => entry.cities[0])
      const distractors = shuffle(others, random).slice(0, SPELLING_DISTRACTORS)

      return { ...exercise, view: { bank: shuffle([...own, ...distractors], random) } }
    }

    default:
      return exercise
  }
}

/**
 * `validateAnswer` for `useExercise`. The shape of `value` depends on the type:
 * choice/typed → string, reorder/spelling → string[], match → { attempts }.
 */
export function checkAnswer(value, exercise, { alphabet = [] } = {}) {
  switch (exercise.type) {
    case 'choice':
      return value === exercise.answer

    case 'typed':
      return validateTextAnswer(value, {
        answers: [exercise.answer, ...(exercise.alternatives ?? [])],
      })

    case 'reorder':
      return Array.isArray(value) && isAcceptedOrder(value, exercise)

    case 'match':
      return (
        Array.isArray(value?.attempts) &&
        value.attempts.every((attempt) => isCorrectPair(exercise, attempt))
      )

    case 'spelling':
      return isCorrectSpelling(value, exercise.word, alphabet)

    default:
      return false
  }
}

/** Text shown as "the right answer" after a mistake. */
export function correctAnswerText(exercise, { alphabet = [] } = {}) {
  switch (exercise.type) {
    case 'choice':
    case 'typed':
      return exercise.answer
    case 'reorder':
      return exercise.answer.join(' ')
    case 'spelling':
      return [...exercise.word.toUpperCase()]
        .map((letter) => spellLetter(letter, findEntry(alphabet, letter).cities[0]))
        .join(' – ')
    case 'match':
      return exercise.pairs.map(([left, right]) => `${left} → ${right}`).join(' · ')
    default:
      return null
  }
}

/**
 * Text worth reading aloud in the course language after answering, or null.
 * Match exercises mix both languages, so they are not read.
 */
export function speakableText(exercise, context) {
  return exercise.type === 'match' ? null : correctAnswerText(exercise, context)
}

export function isCorrectPair(exercise, [left, right]) {
  return exercise.pairs.some(([l, r]) => l === left && r === right)
}

export function spellLetter(letter, city) {
  return `${letter} di ${city}`
}

function isAcceptedOrder(order, exercise) {
  const joined = order.join(' ')
  return [exercise.answer, ...(exercise.alternatives ?? [])].some(
    (accepted) => accepted.join(' ') === joined,
  )
}

function isCorrectSpelling(cities, word, alphabet) {
  const letters = [...word.toUpperCase()]

  return (
    Array.isArray(cities) &&
    cities.length === letters.length &&
    letters.every((letter, i) =>
      findEntry(alphabet, letter)?.cities.includes(cities[i]),
    )
  )
}

function findEntry(alphabet, letter) {
  return alphabet.find((entry) => entry.letter === letter)
}

export function shuffle(list, random) {
  const result = [...list]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

// Re-shuffles a few times so the bank does not start already solved.
function shuffleAvoiding(list, random, isSolved) {
  let result = shuffle(list, random)
  for (let tries = 0; tries < 5 && isSolved(result); tries++) {
    result = shuffle(list, random)
  }
  return result
}
