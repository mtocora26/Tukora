import { useState } from 'react'
import { isCorrectPair } from './exerciseLogic.js'

/**
 * Tap one item on each side to pair them. Right pairs lock in place; wrong
 * ones are recorded as attempts, so the exercise only counts as correct when
 * every pair was found at the first try.
 */
function MatchAnswer({ exercise, onAnswer, disabled }) {
  const [selected, setSelected] = useState(null) // { side, value }
  const [attempts, setAttempts] = useState([])
  const [wrong, setWrong] = useState(null) // [left, right] of the last miss

  const matched = attempts.filter((attempt) => isCorrectPair(exercise, attempt))
  const matchedLeft = new Set(matched.map(([left]) => left))
  const matchedRight = new Set(matched.map(([, right]) => right))

  function select(side, value) {
    setWrong(null)

    if (!selected || selected.side === side) {
      setSelected({ side, value })
      return
    }

    const pair = side === 'left' ? [value, selected.value] : [selected.value, value]
    const nextAttempts = [...attempts, pair]
    setAttempts(nextAttempts)
    setSelected(null)

    if (!isCorrectPair(exercise, pair)) {
      setWrong(pair)
      return
    }

    if (matched.length + 1 === exercise.pairs.length) {
      onAnswer({ attempts: nextAttempts })
    }
  }

  function itemClass(side, value, isMatched) {
    const classes = ['tile', 'match__item']
    if (isMatched) classes.push('tile--correct')
    else if (selected?.side === side && selected.value === value) classes.push('tile--selected')
    else if (wrong && wrong[side === 'left' ? 0 : 1] === value) classes.push('tile--wrong')
    return classes.join(' ')
  }

  function renderColumn(side, values, matchedSet) {
    return (
      <div className="match__column">
        {values.map((value) => {
          const isMatched = matchedSet.has(value)
          return (
            <button
              key={value}
              type="button"
              className={itemClass(side, value, isMatched)}
              onClick={() => select(side, value)}
              disabled={disabled || isMatched}
              aria-pressed={selected?.side === side && selected.value === value}
            >
              {value}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div className="match">
      {renderColumn('left', exercise.pairs.map(([left]) => left), matchedLeft)}
      {renderColumn('right', exercise.view.right, matchedRight)}
    </div>
  )
}

export default MatchAnswer
