import { EXERCISE_STATES } from '../../hooks/useExercise.js'
import './ExerciseContainer.css'

/**
 * Generic shell for any exercise that follows the `useExercise` contract
 * (`{ state, answer, next, stats }`). It owns the shared flow — progress,
 * feedback, "next" and the final summary — while each exercise type only
 * provides how an item is shown and how it is answered.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {{ state: object, answer: Function, next: Function, stats: object }} props.exercise
 * @param {(item: unknown) => React.ReactNode} props.renderPrompt
 * @param {(args: { item: unknown, onAnswer: Function, disabled: boolean }) => React.ReactNode} props.renderAnswer
 * @param {(args: { item: unknown, answer: unknown, result: string }) => React.ReactNode} [props.renderFeedback]
 *   Extra, type-specific feedback (e.g. the expected answer).
 * @param {() => void} [props.onRestart]
 * @param {React.ReactNode} [props.children] Extra content for the summary screen.
 */
function ExerciseContainer({
  title,
  exercise,
  renderPrompt,
  renderAnswer,
  renderFeedback,
  onRestart,
  children,
}) {
  const { state, answer, next, stats } = exercise

  if (state.status === EXERCISE_STATES.COMPLETED) {
    return (
      <section className="exercise">
        <h2>{title}</h2>
        <ExerciseSummary stats={stats} onRestart={onRestart}>
          {children}
        </ExerciseSummary>
      </section>
    )
  }

  const answered = state.result !== null
  const isLastItem = state.currentIndex === state.totalItems - 1

  return (
    <section className="exercise">
      <header className="exercise__header">
        <h2>{title}</h2>
        <ExerciseProgress
          current={state.currentIndex + 1}
          total={state.totalItems}
        />
      </header>

      <div className="exercise__prompt">{renderPrompt(state.currentItem)}</div>

      {/* `key` resets any internal state of the answer UI between items. */}
      <div key={state.currentIndex} className="exercise__answer">
        {renderAnswer({
          item: state.currentItem,
          onAnswer: answer,
          disabled: answered,
        })}
      </div>

      {answered && (
        <div
          className={`exercise__feedback exercise__feedback--${state.result}`}
          role="status"
        >
          <p className="exercise__feedback-title">
            {state.result === 'correct' ? '¡Correcto!' : 'Incorrecto'}
          </p>
          {renderFeedback?.({
            item: state.currentItem,
            answer: state.answer,
            result: state.result,
          })}
          <button type="button" onClick={next} autoFocus>
            {isLastItem ? 'Ver resultado' : 'Siguiente'}
          </button>
        </div>
      )}
    </section>
  )
}

function ExerciseProgress({ current, total }) {
  return (
    <div className="exercise__progress">
      <span>
        {current} / {total}
      </span>
      <progress value={current - 1} max={total} aria-label="Progreso" />
    </div>
  )
}

function ExerciseSummary({ stats, onRestart, children }) {
  return (
    <div className="exercise__summary">
      <p className="exercise__score">{stats.accuracy}%</p>
      <p>
        {stats.correct} correctas de {stats.answered}
      </p>
      {children}
      {onRestart && (
        <button type="button" onClick={onRestart} autoFocus>
          Repetir
        </button>
      )}
    </div>
  )
}

export default ExerciseContainer
