import { useState } from "react";
import "./App.css";
import ToDoCounter from "./components/ToDoCounter";

let contadorVariable = 0;

function App() {
  const sumarVariable = () => {
    contadorVariable++;
    console.log("contadorVariable: ", contadorVariable);
  };

  //* Estado INTERNO del Componente:
  const [contadorEstado, setContadorEstado] = useState(10);
  //* => [ esteEsElEstado, () => { } ]
  const sumaEstado = () => {
    setContadorEstado(contadorEstado => contadorEstado + 1);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <hr />
      <h3>Contador Variable: {contadorVariable}</h3>
      <h3>Contador Estado: {contadorEstado}</h3>
      <button onClick={sumarVariable}>Sumar Variable</button>
      <button onClick={sumaEstado}>Sumar Estado</button>
      <ToDoCounter contadorEstado={contadorEstado} title={"Tareas pendientes: "} />
    </>
  );
}

export default App;
