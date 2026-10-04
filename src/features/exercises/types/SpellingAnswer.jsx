import { useState } from 'react'
import { spellLetter } from './exerciseLogic.js'

function SpellingAnswer({ exercise, onAnswer, disabled }) {
  const [cities, setCities] = useState([])
  const letters = [...exercise.word.toUpperCase()]
  const complete = cities.length === letters.length

  function pick(city) {
    if (!complete) setCities((list) => [...list, city])
  }

  function undo() {
    setCities((list) => list.slice(0, -1))
  }

  return (
    <div className="build">
      <ol className="spelling__slots" aria-label="Tu deletreo">
        {letters.map((letter, i) => (
          <li
            key={i}
            className={`spelling__slot${i === cities.length ? ' spelling__slot--current' : ''}`}
          >
            {cities[i] ? spellLetter(letter, cities[i]) : `${letter} di …`}
          </li>
        ))}
      </ol>

      <div className="build__bank" aria-label="Ciudades">
        {exercise.view.bank.map((city) => (
          <button
            key={city}
            type="button"
            className="tile"
            onClick={() => pick(city)}
            disabled={disabled || complete}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="build__actions">
        <button
          type="button"
          className="button--secondary"
          onClick={undo}
          disabled={disabled || cities.length === 0}
        >
          Borrar
        </button>
        <button
          type="button"
          onClick={() => onAnswer(cities)}
          disabled={disabled || !complete}
        >
          Comprobar
        </button>
      </div>
    </div>
  )
}

export default SpellingAnswer
