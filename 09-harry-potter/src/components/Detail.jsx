import React, { useEffect, useState } from "react";

export default function Detail({ id, closeHandler }) {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => data[0])
      .then((personajeElegido) => {
        setPersonaje(personajeElegido);
      });
  }, [id]);

  return (
    <div>
      <button onClick={closeHandler}>Cerrar Detalle</button>
      <h2>Detalle:</h2>
      <h3>Nombre: {personaje.name}</h3>
      <h3>Casa: {personaje.house}</h3>
      <h3>Especie: {personaje.species}</h3>
      <img
        src={personaje.image}
        alt={personaje.name}
        style={{ height: "150px" }}
      />
    </div>
  );
}
