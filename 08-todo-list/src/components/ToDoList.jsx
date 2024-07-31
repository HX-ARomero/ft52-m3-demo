export default function ToDoList({ allToDos }) {
  return (
    <div style={{ backgroundColor: "darkslateblue", padding: "5px" }}>
      <h2>Lista de tareas:</h2>
      <ul>
        {allToDos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
