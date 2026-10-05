import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { progressRepository } from '../../app/progressRepository.js'
import { getCourse } from '../../content/courses/index.js'
import { starsForAccuracy, xpForSession } from '../../core/gamification/scoring.js'
import { findLesson, findNextLesson } from '../../domain/course.js'
import { EXERCISE_STATES, useExercise } from '../../hooks/useExercise.js'
import { useCourseProgress } from '../../hooks/useCourseProgress.js'
import { useExerciseProgress } from '../../hooks/useExerciseProgress.js'
import { buildCourseMap, findMapNode, LESSON_STATUS } from '../course/courseMap.js'
import ExerciseContainer from '../exercises/ExerciseContainer.jsx'
import { ANSWER_COMPONENTS } from '../exercises/types/answerComponents.js'
import ExercisePrompt from '../exercises/types/ExercisePrompt.jsx'
import {
  checkAnswer,
  correctAnswerText,
  prepareExercise,
  shuffle,
} from '../exercises/types/exerciseLogic.js'
import LessonResult from './LessonResult.jsx'
import LessonTheory from './LessonTheory.jsx'
import { coursePath, lessonPath } from './paths.js'
import '../exercises/types/exerciseTypes.css'
import './lesson.css'

function LessonPage() {
  const { courseId, lessonId } = useParams()
  const [round, setRound] = useState(0)
  const course = getCourse(courseId)
  const found = course && findLesson(course, lessonId)
  const { progress, error } = useCourseProgress({
    repository: progressRepository,
    courseId,
    refreshKey: lessonId,
  })

  if (!found) {
    return (
      <p>
        No encontramos esta lección. <Link to="/">Volver al inicio</Link>
      </p>
    )
  }

  if (error) {
    return <p role="alert">No se pudo cargar tu progreso: {error.message}</p>
  }

  if (!progress) {
    return <p>Cargando…</p>
  }

  if (findMapNode(buildCourseMap(course, progress), lessonId).status === LESSON_STATUS.LOCKED) {
    return (
      <p>
        🔒 Completa la lección anterior para desbloquear «{found.lesson.title}».{' '}
        <Link to={coursePath(course.id)}>Volver al mapa</Link>
      </p>
    )
  }

  // A new key remounts the lesson: fresh shuffle and a fresh attempt.
  return (
    <LessonPlayer
      key={`${lessonId}-${round}`}
      course={course}
      lesson={found.lesson}
      onRestart={() => setRound((value) => value + 1)}
    />
  )
}

/** Theory → exercises → review of mistakes → result (stars and XP). */
function LessonPlayer({ course, lesson, onRestart }) {
  const context = { alphabet: course.alphabet }
  const [items] = useState(() => {
    // Module reviews practise a random sample of all their exercises.
    const exercises = lesson.sampleSize
      ? shuffle(lesson.exercises, Math.random).slice(0, lesson.sampleSize)
      : lesson.exercises
    return exercises.map((exercise) =>
      prepareExercise(exercise, { alphabet: course.alphabet, random: Math.random }),
    )
  })
  const exercise = useExercise({
    items,
    validateAnswer: (value, item) => checkAnswer(value, item, context),
    reviewMistakes: true,
    startImmediately: false,
  })
  const xp = xpForSession(exercise.stats)
  const progress = useExerciseProgress({
    repository: progressRepository,
    courseId: course.id,
    exerciseId: lesson.id,
    exercise,
    xp: xp.total,
  })
  const nextLesson = findNextLesson(course, lesson.id)

  if (exercise.state.status === EXERCISE_STATES.IDLE) {
    return (
      <section className="lesson-intro">
        <h2>{lesson.title}</h2>
        <LessonTheory blocks={lesson.theory} />
        <div className="lesson-intro__footer">
          <button type="button" className="lesson-intro__start" onClick={exercise.start}>
            Empezar · {items.length} ejercicios
          </button>
        </div>
      </section>
    )
  }

  return (
    <ExerciseContainer
      title={lesson.title}
      exercise={exercise}
      renderPrompt={(item) => <ExercisePrompt exercise={item} />}
      renderAnswer={({ item, onAnswer, disabled }) => {
        const Answer = ANSWER_COMPONENTS[item.type]
        return <Answer exercise={item} onAnswer={onAnswer} disabled={disabled} />
      }}
      renderFeedback={({ item, result }) => (
        <>
          {result === 'incorrect' && correctAnswerText(item, context) && (
            <p className="exercise-feedback__answer" lang="it">
              Respuesta: <strong>{correctAnswerText(item, context)}</strong>
            </p>
          )}
          {item.explanation && (
            <p className="exercise-feedback__explanation">{item.explanation}</p>
          )}
        </>
      )}
      onRestart={onRestart}
    >
      <LessonResult
        stars={starsForAccuracy(exercise.stats.accuracy)}
        xp={xp}
        progress={progress}
        nextLessonPath={nextLesson && lessonPath(course.id, nextLesson.id)}
        mapPath={coursePath(course.id)}
      />
    </ExerciseContainer>
  )
}

export default LessonPage
