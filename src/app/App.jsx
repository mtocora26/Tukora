import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { COURSES } from '../content/courses/index.js'
import PlayerBadge from '../features/gamification/PlayerBadge.jsx'
import { usePlayerStats } from '../hooks/usePlayerStats.js'
import { appEvents } from './appEvents.js'
import { progressRepository } from './progressRepository.js'
import CoursePage from '../features/course/CoursePage.jsx'
import DemoExercisePage from '../features/exercises/demo/DemoExercisePage.jsx'
import LessonPage from '../features/lessons/LessonPage.jsx'
import HomePage from './HomePage.jsx'
import '../features/gamification/gamification.css'
import './App.css'

function App() {
  const stats = usePlayerStats({
    repository: progressRepository,
    courses: COURSES,
    events: appEvents,
  })

  return (
    <BrowserRouter>
      <header className="app-header">
        <Link to="/" className="app-brand">
          Tukola
        </Link>
        <PlayerBadge stats={stats} />
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage stats={stats} />} />
          <Route path="/practica/demo" element={<DemoExercisePage />} />
          <Route path="/curso/:courseId" element={<CoursePage />} />
          <Route
            path="/curso/:courseId/leccion/:lessonId"
            element={<LessonPage />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
