import { Link } from 'react-router-dom'
import { SAVE_STATUSES } from '../../hooks/useExerciseProgress.js'

const MAX_STARS = 3

function LessonResult({ stars, xp, progress, nextLessonPath, mapPath }) {
  // Wait for the save: the next lesson unlocks from the stored progress.
  const saved = progress.saveStatus === SAVE_STATUSES.SAVED

  return (
    <div className="lesson-result">
      <p className="lesson-result__stars" aria-label={`${stars} de ${MAX_STARS} estrellas`}>
        {Array.from({ length: MAX_STARS }, (_, i) => (
          <span
            key={i}
            className={`lesson-result__star${i < stars ? ' lesson-result__star--on' : ''}`}
            style={{ animationDelay: `${i * 150}ms` }}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </p>

      <p className="lesson-result__xp">+{xp.total} XP</p>
      <ul className="lesson-result__breakdown">
        {xp.breakdown.map((line) => (
          <li key={line.label}>
            {line.label}: +{line.xp}
          </li>
        ))}
      </ul>

      <SaveNote {...progress} />

      <nav className="lesson-result__links">
        {nextLessonPath && saved && (
          <Link to={nextLessonPath}>Siguiente lección →</Link>
        )}
        <Link to={mapPath}>Volver al mapa</Link>
      </nav>
    </div>
  )
}

function SaveNote({ record, saveStatus }) {
  if (saveStatus === SAVE_STATUSES.ERROR) {
    return <p role="alert">No se pudo guardar el progreso.</p>
  }

  if (saveStatus !== SAVE_STATUSES.SAVED) {
    return <p className="lesson-result__note">Guardando progreso…</p>
  }

  return (
    <p className="lesson-result__note">
      Mejor resultado: {record.bestScore}% · XP en esta lección: {record.xp}
    </p>
  )
}

export default LessonResult
