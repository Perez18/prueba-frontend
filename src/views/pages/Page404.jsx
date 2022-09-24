import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className="page-404">

      <div className="four_zero_four_bg">
        <h1 className="text-center ">404</h1>
      </div>

      <div className="content-404 text-center">
        <p>La pagina que buscas no esta disponible!</p>
        <button>
          <Link to="/" className="link-404">Ir al inicio</Link>
        </button>
      </div>
    </div>
  )
}

export default Page404