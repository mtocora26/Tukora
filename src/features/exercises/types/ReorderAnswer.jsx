import { useState } from 'react'

function ReorderAnswer({ exercise, onAnswer, disabled }) {
  const [placedIds, setPlacedIds] = useState([])
  const tokens = exercise.view.tokens
  const byId = new Map(tokens.map((token) => [token.id, token]))
  const placed = placedIds.map((id) => byId.get(id))
  const complete = placed.length === tokens.length

  function place(id) {
    setPlacedIds((ids) => [...ids, id])
  }

  function remove(id) {
    setPlacedIds((ids) => ids.filter((placedId) => placedId !== id))
  }

  return (
    <div className="build">
      <div className="build__line" aria-label="Tu frase">
        {placed.length === 0 && (
          <span className="build__placeholder">Toca las palabras en orden</span>
        )}
        {placed.map((token) => (
          <button
            key={token.id}
            type="button"
            className="tile"
            onClick={() => remove(token.id)}
            disabled={disabled}
          >
            {token.text}
          </button>
        ))}
      </div>

      <div className="build__bank" aria-label="Palabras disponibles">
        {tokens.map((token) => {
          const used = placedIds.includes(token.id)
          return (
            <button
              key={token.id}
              type="button"
              className={`tile${used ? ' tile--used' : ''}`}
              onClick={() => place(token.id)}
              disabled={disabled || used}
              aria-hidden={used}
            >
              {token.text}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        className="build__check"
        onClick={() => onAnswer(placed.map((token) => token.text))}
        disabled={disabled || !complete}
      >
        Comprobar
      </button>
    </div>
  )
}

export default ReorderAnswer
