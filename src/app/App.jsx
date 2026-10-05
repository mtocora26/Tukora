import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import DemoExercisePage from '../features/exercises/demo/DemoExercisePage.jsx'
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
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
