import { useState } from "react";

export default function AddToDo({setContadorEstado, setAllToDos}) {

  const [newToDo, setNewToDo] = useState("");
  const handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    setNewToDo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setContadorEstado(contadorEstado => contadorEstado + 1);
    setAllToDos(allToDos => allToDos = [...allToDos, newToDo]);
    setNewToDo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Ingresar nueva tarea:</label>
        <input
          type="text"
          value={newToDo}
          onChange={handleInputChange}
        />
        <input type="submit" value="Agregar tarea" />
      </form>
    </div>
  );
}
