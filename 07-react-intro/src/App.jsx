import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const isRegistered = true;

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h1>Primer aplicación en REACT</h1>
      <hr />
      {/* {isRegistered && <Login />}
      {!isRegistered && <Register />} */}

      { isRegistered ? <Login /> : <Register /> }
      {/* { condición    ? esVerdadero : esFalso } */}

      <Register />

    </div>
  );
}

export default App;

//* HTML, JS, CSS