import { Link } from 'react-router-dom'
import { COURSES } from '../content/courses/index.js'
import { lessonPath } from '../features/lessons/paths.js'

function HomePage() {
  return (
    <section>
      <h1>Tukola</h1>
      <p>Plataforma personal de idiomas: italiano y business English.</p>

      {COURSES.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          {course.modules.map((module) => (
            <div key={module.id}>
              <h3>{module.title}</h3>
              <ol>
                {module.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <Link to={lessonPath(course.id, lesson.id)}>
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      ))}

      <p>
        <Link to="/practica/demo">Probar ejercicio de demostración</Link>
      </p>
    </section>
  )
}

export default HomePage
