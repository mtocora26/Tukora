import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CoursePage from '../features/course/CoursePage.jsx'
import DemoExercisePage from '../features/exercises/demo/DemoExercisePage.jsx'
import LessonPage from '../features/lessons/LessonPage.jsx'
import HomePage from './HomePage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header className="app-header">
        <Link to="/" className="app-brand">
          Tukola
        </Link>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
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
