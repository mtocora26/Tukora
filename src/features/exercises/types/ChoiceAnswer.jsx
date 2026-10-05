import { useState } from 'react'

function ChoiceAnswer({ exercise, onAnswer, disabled }) {
  const [selected, setSelected] = useState(null)

  function choose(option) {
    setSelected(option)
    onAnswer(option)
  }

  return (
    <div className="choice" role="group" aria-label="Opciones">
      {exercise.view.options.map((option) => (
        <button
          key={option}
          type="button"
          className={optionClass(option, selected, exercise.answer, disabled)}
          onClick={() => choose(option)}
          disabled={disabled}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

function optionClass(option, selected, answer, answered) {
  const classes = ['tile', 'choice__option']
  if (answered && option === answer) classes.push('tile--correct')
  else if (answered && option === selected) classes.push('tile--wrong')
  return classes.join(' ')
}

export default ChoiceAnswer
