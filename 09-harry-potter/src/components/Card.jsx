import React from 'react'

export default function Card({ peronaje, clickHandler }) {
  // console.log(props);
  
  return (
    <div>
      <h2>Personaje: {peronaje.name}</h2>
      <h3>Casa: {peronaje.house}</h3>
      <button onClick={() => clickHandler(peronaje.id)}>Ver Detalle</button>
    </div>
  )
}
