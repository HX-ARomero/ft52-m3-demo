import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quitarProducto } from "../redux/carritoSlice";

function Carrito() {
  const productosEnCarrito = useSelector((state) => state.carrito);
  // console.log(productosEnCarrito);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Carrito:</h2>
      {productosEnCarrito.length ? (
        productosEnCarrito.map((producto, index) => (
          <p key={index}>
            {producto.title} - U$D {producto.price}
            <button
              onClick={() => {
                dispatch(quitarProducto(producto.title));
              }}
            >
              X
            </button>
          </p>
        ))
      ) : (
        <p>Carrito vacío...</p>
      )}
    </div>
  );
}

export default Carrito;
