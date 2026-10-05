import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { progressRepository } from '../../app/progressRepository.js'
import { getCourse } from '../../content/courses/index.js'
import { findLesson } from '../../domain/course.js'
import { useExercise } from '../../hooks/useExercise.js'
import { useExerciseProgress } from '../../hooks/useExerciseProgress.js'
import ExerciseContainer from '../exercises/ExerciseContainer.jsx'
import { ANSWER_COMPONENTS } from '../exercises/types/answerComponents.js'
import ExercisePrompt from '../exercises/types/ExercisePrompt.jsx'
import {
  checkAnswer,
  correctAnswerText,
  prepareExercise,
} from '../exercises/types/exerciseLogic.js'
import '../exercises/types/exerciseTypes.css'

function LessonPage() {
  const { courseId, lessonId } = useParams()
  const [round, setRound] = useState(0)
  const course = getCourse(courseId)
  const found = course && findLesson(course, lessonId)

  if (!found) {
    return (
      <p>
        No encontramos esta lección. <Link to="/">Volver al inicio</Link>
      </p>
    )
  }

  // A new key remounts the lesson: fresh shuffle and a fresh attempt.
  return (
    <LessonExercises
      key={`${lessonId}-${round}`}
      course={course}
      lesson={found.lesson}
      onRestart={() => setRound((value) => value + 1)}
    />
  )
}

function LessonExercises({ course, lesson, onRestart }) {
  const context = { alphabet: course.alphabet }
  const [items] = useState(() =>
    lesson.exercises.map((exercise) =>
      prepareExercise(exercise, { alphabet: course.alphabet, random: Math.random }),
    ),
  )
  const exercise = useExercise({
    items,
    validateAnswer: (value, item) => checkAnswer(value, item, context),
  })
  const progress = useExerciseProgress({
    repository: progressRepository,
    courseId: course.id,
    exerciseId: lesson.id,
    exercise,
  })

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
      {progress.saveStatus === 'error' && (
        <p role="alert">No se pudo guardar el progreso.</p>
      )}
      <Link to="/">Volver a las lecciones</Link>
    </ExerciseContainer>
  )
}

export default LessonPage
