import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
//* import Characters from "./components/Characters";

//* Importar Componente Lazy
const Characters = React.lazy(() => import("./components/Characters"));

function App() {
  return (
    <>
      <h1>Frontend Avanzado</h1>
      <Navbar />
      <hr />
      {/* Suspendemos renderizado hasta la carga completa */}
      <Suspense fallback={<p>Cargando...</p>}>
        <Characters />
      </Suspense>
    </>
  );
}

export default App;
