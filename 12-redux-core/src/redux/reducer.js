const { AGREGAR_PRODUCTO, QUITAR_PRODUCTO } = require("./actions");

const initialState = [];

//* action: { type: 'AGREGAR_PRODUCTO', payload: { id: 1, nombre: 'Teclado' } }
function reducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return [...state, action.payload];

    //* { type: 'QUITAR_PRODUCTO', payload: 1 }
    case QUITAR_PRODUCTO:
      return state.filter(producto => producto.id !== action.payload);

    default:
      return state;
  }
}

module.exports = reducer;
