import { useState } from 'react'
import './TextAnswerInput.css'

/**
 * Presentational input for exercises answered by typing text.
 *
 * @param {{ onAnswer: (value: string) => void, disabled: boolean, label?: string }} props
 */
function TextAnswerInput({ onAnswer, disabled, label = 'Tu respuesta' }) {
  const [value, setValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (value.trim() !== '') {
      onAnswer(value)
    }
  }

  return (
    <form className="text-answer" onSubmit={handleSubmit}>
      <label className="text-answer__label">
        {label}
        <input
          className="text-answer__input"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          disabled={disabled}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          autoFocus
        />
      </label>
      <button type="submit" disabled={disabled || value.trim() === ''}>
        Comprobar
      </button>
    </form>
  )
}

export default TextAnswerInput
