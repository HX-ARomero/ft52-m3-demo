export default function ToDoCounter({ title, contadorEstado }) {
  // console.log("props: ", props);
  //* props = {contadorEstado: 10, title: 'Tareas pendientes: '}
  return (
    <div style={{ backgroundColor: "darkslategray", padding: "5px" }}>
      <h2>
        {title} {contadorEstado}
      </h2>
    </div>
  );
}
