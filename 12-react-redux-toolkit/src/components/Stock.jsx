import React from "react";
import { useDispatch } from "react-redux";
import { agregarProducto } from "../redux/carritoSlice";

function Stock() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Productos en Stock:</h2>
      
      <button
        onClick={() => {
          dispatch(
            agregarProducto({
              title: "Monitor",
              price: 200,
            })
          );
        }}
      >
        Monitor - $USD 200
      </button>

      <button
        onClick={() => {
          dispatch(
            agregarProducto({
              title: "Teclado",
              price: 50,
            })
          );
        }}
      >
        Teclado - $USD 50
      </button>

      <button
        onClick={() => {
          dispatch(
            agregarProducto({
              title: "Notebook",
              price: 500,
            })
          );
        }}
      >
        Notebook - $USD 500
      </button>
    </div>
  );
}

export default Stock;
