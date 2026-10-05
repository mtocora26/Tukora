import assert from 'node:assert/strict'
import test from 'node:test'
import { cleanSpeechText, isSpeechSupported, speechLang } from './speech.js'

test('maps course languages to voice languages', () => {
  assert.equal(speechLang('it'), 'it-IT')
  assert.equal(speechLang('fr-FR'), 'fr-FR')
})

test('removes blanks and separators before speaking', () => {
  assert.equal(cleanSpeechText('Lei ___ Eva.'), 'Lei Eva.')
  assert.equal(
    cleanSpeechText('R di Roma – O di Otranto'),
    'R di Roma, O di Otranto',
  )
  assert.equal(
    cleanSpeechText('Come ti chiami? / Come si chiama?'),
    'Come ti chiami?, Come si chiama?',
  )
})

test('is not supported outside the browser', () => {
  assert.equal(isSpeechSupported(), false)
})
