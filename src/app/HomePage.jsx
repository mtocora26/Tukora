import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section>
      <h1>Tukola</h1>
      <p>Plataforma personal de idiomas: italiano y business English.</p>
      <p>
        <Link to="/practica/demo">Probar ejercicio de demostración</Link>
      </p>
    </section>
  )
}

export default HomePage
