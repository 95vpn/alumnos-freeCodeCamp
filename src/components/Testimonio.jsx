
import '../hojas-de-estilo/Testimonio.css'
import React from 'react'

const Testimonio = (props) => {
  return (
    <div className='contenedor-testimonio'>
            <img 
            className='image-testimonio' 
            src={props.imagen}
            alt='Foto de Emma' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
  )
}

export default Testimonio;