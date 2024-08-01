import "./App.css";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";

function App() {
  return (
    <>
      <h1>React LifeCycle</h1>
      <hr />
      {/* <ClassCounter title={"Contador de Clase"}/> */}
      <FunctionCounter />
    </>
  );
}

export default App;
