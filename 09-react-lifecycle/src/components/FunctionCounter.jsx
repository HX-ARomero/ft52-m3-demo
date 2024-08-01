import React, { useEffect, useState } from "react";
import FunctionDisplay from "./FunctionDisplay";

export default function FunctionCounter() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const sumarUno = () => {
    setContador(contador + 1);
  };

  useEffect(() => {
    console.log("FunctionCounter se montó al DOM ó se actualizó");
  }, [contador]);

  return (
    <div>
      <h2>Contador de Función</h2>
      <h3>Contador: {contador}</h3>
      <button onClick={sumarUno}>Suma 1</button>
      {contador > 2 && contador < 5 ? <FunctionDisplay /> : null}
    </div>
  );
}

//* componentDidMount()
//* useEffect(() => {}, []);

//* componentDidUpdate()
//* useEffect(() => {}, [estadoObservado1, estadoObservado2]);

//* componentWillUnmount()
//* useEffect(() => () => {}, []);