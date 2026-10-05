import { isSpeechSupported, speak } from '../core/speech/speech.js'
import './SpeakButton.css'

/** 🔊 button that reads `text` aloud. Renders nothing if the browser can't speak. */
function SpeakButton({ text, lang, label = 'Escuchar' }) {
  if (!text || !isSpeechSupported()) return null

  return (
    <button
      type="button"
      className="speak-button"
      onClick={() => speak(text, lang)}
      aria-label={label}
      title={label}
    >
      🔊
    </button>
  )
}

export default SpeakButton
