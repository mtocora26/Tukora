/**
 * Text-to-speech through the browser's Web Speech API (free, no audio files).
 * Note: Android WebView (Capacitor, EPIC-10) does not implement it; there this
 * module is the seam to swap in a native TTS plugin.
 */
const SPEECH_LANGS = Object.freeze({ it: 'it-IT', en: 'en-US', es: 'es-ES' })

/** Maps a course language ("it") to a BCP 47 voice language ("it-IT"). */
export function speechLang(language) {
  return SPEECH_LANGS[language] ?? language
}

/** Removes what should not be read aloud: blanks, arrows, separators. */
export function cleanSpeechText(text) {
  return String(text)
    .replace(/_{2,}/g, ' ')
    .replace(/\s[–→·/]\s/g, ', ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function isSpeechSupported() {
  return (
    typeof window !== 'undefined' &&
    'speechSynthesis' in window &&
    typeof window.SpeechSynthesisUtterance === 'function'
  )
}

export function speak(text, lang) {
  if (!isSpeechSupported()) return

  const synth = window.speechSynthesis
  const utterance = new window.SpeechSynthesisUtterance(cleanSpeechText(text))
  const prefix = lang.slice(0, 2).toLowerCase()

  utterance.lang = lang
  utterance.rate = 0.9
  utterance.voice =
    synth
      .getVoices()
      .find((voice) => voice.lang.replace('_', '-').toLowerCase().startsWith(prefix)) ??
    null

  synth.cancel() // a new tap interrupts the previous phrase
  synth.speak(utterance)
}
