import assert from 'node:assert/strict'
import test from 'node:test'
import { normalizeTextAnswer, validateTextAnswer } from './textAnswer.js'

const item = { prompt: 'Good morning', answers: ['Buongiorno', 'Buon giorno'] }

test('ignores case, extra spaces and final punctuation', () => {
  assert.equal(normalizeTextAnswer('  Buon   GIORNO!  '), 'buon giorno')
})

test('accepts any of the listed answers', () => {
  assert.equal(validateTextAnswer('buongiorno', item), true)
  assert.equal(validateTextAnswer('Buon giorno.', item), true)
})

test('rejects wrong and empty answers', () => {
  assert.equal(validateTextAnswer('buonasera', item), false)
  assert.equal(validateTextAnswer('   ', item), false)
  assert.equal(validateTextAnswer(null, item), false)
})

test('keeps accents significant', () => {
  const accented = { prompt: 'is', answers: ['è'] }

  assert.equal(validateTextAnswer('è', accented), true)
  assert.equal(validateTextAnswer('e', accented), false)
})
