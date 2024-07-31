import { useState } from "react";
import "./App.css";
import ToDoCounter from "./components/ToDoCounter";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

function App() {
  const [contadorEstado, setContadorEstado] = useState(0);
  const [allToDos, setAllToDos] = useState([]);

  return (
    <>
      <h1>ToDo List</h1>
      <hr />
      <AddToDo
        setContadorEstado={setContadorEstado}
        setAllToDos={setAllToDos}
      />
      <ToDoCounter
        contadorEstado={contadorEstado}
        title={"Tareas pendientes: "}
      />
      <ToDoList allToDos={allToDos} />
    </>
  );
}

export default App;
