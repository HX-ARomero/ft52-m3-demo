//* ACTION TYPES:
const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO";
const QUITAR_PRODUCTO = "QUITAR_PRODUCTO";

//* ACTION CREATORS:
function agregarProducto(producto) {
  return {
    type: AGREGAR_PRODUCTO,
    payload: producto,
  };
}

function quitarProducto(id) {
  return {
    type: QUITAR_PRODUCTO,
    payload: id,
  };
}

//* { id: 1, nombre: "Teclado" }
// console.log(agregarProducto({ id: 1, nombre: "Teclado" }));
// console.log(agregarProducto({ id: 2, nombre: "Monitor" }));
// console.log(quitarProducto(1));

module.exports = {
  AGREGAR_PRODUCTO,
  agregarProducto,
  QUITAR_PRODUCTO,
  quitarProducto,
};
