import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Carrito from "./components/Carrito";
import Stock from "./components/Stock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React-Redux Toolkit</h1>
      <hr />
      <Carrito />
      <hr />
      <Stock />
    </>
  );
}

export default App;
