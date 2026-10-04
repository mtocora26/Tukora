/**
 * Normalizes free-text answers so trivial differences (case, surrounding or
 * repeated spaces, final punctuation) do not count as mistakes. Accents are
 * kept on purpose: in Italian "è" and "e" are different words.
 *
 * @param {unknown} value
 * @returns {string}
 */
export function normalizeTextAnswer(value) {
  return String(value ?? '')
    .trim()
    .toLocaleLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[.!?¡¿]+$/u, '')
    .trim()
}

/**
 * `validateAnswer` for `useExercise` when items look like
 * `{ prompt: string, answers: string[] }`.
 *
 * @param {unknown} value
 * @param {{ answers: string[] }} item
 * @returns {boolean}
 */
export function validateTextAnswer(value, item) {
  const answer = normalizeTextAnswer(value)

  return (
    answer !== '' &&
    item.answers.some((accepted) => normalizeTextAnswer(accepted) === answer)
  )
}
