import React from 'react'
import { NavLink } from 'react-router-dom'

export const Descripcion = () => {
  return (
    <div className='descripclass' >
      <NavLink className="linksclass" to="/listado" >Ir Atras</NavLink>
      <div className='descripelementos'>
        hola soy descripcion
      </div>
    </div>
  )
}


