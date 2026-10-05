import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
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
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
