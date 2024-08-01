import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Detail from "./components/Detail";

function App() {

  const [personajes, setPersonajes] = useState([]);
  const [detail, setDetail] = useState(false);
  const [id, setId] = useState("");

  function clickHandler(id) {
    setId(id);
    setDetail(true);
  };

  function closeHandler() {
    setDetail(false);
  };

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then(response => response.json())
      .then(data => data.slice(0, 5))
      .then(personajes => {
        setPersonajes(personajes);
      })
  }, []);

  return (
    <>
      <h1>Harry Potter App</h1>
      <hr />
      {
        personajes.map(peronaje => (
          <Card key={peronaje.id} peronaje={peronaje} clickHandler={clickHandler}/>
        ))
      }
      <hr />
      {
        detail && <Detail id={id} closeHandler={closeHandler} />
      }
    </>
  );
}

export default App;

/*
<App /> Estados: personajes: []
                 id        : Id del personaje para ver en Detail
                 detail    : true || false
        Funciones:
            clickHandler   : Modifica "id" y "detail"(true)
            closeHandler   : Modificar "detail"(false)
        Componentes hijos  : <Card /> Recibe por props a "personaje"
                           : <Detail /> => Renderizado condicional "detail"

*/