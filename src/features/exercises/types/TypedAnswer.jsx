import TextAnswerInput from '../text-answer/TextAnswerInput.jsx'

function TypedAnswer({ onAnswer, disabled }) {
  return (
    <TextAnswerInput label="Escríbelo en italiano" onAnswer={onAnswer} disabled={disabled} />
  )
}

export default TypedAnswer
