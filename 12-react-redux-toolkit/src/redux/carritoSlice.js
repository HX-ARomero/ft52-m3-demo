import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const carritoSlice = createSlice({
  //* Nombre del slice:
  name: "carrito",
  //* Estado Inicial:
  initialState,
  //* Reducers:
  reducers: {
    //* action: { type: "agregarProducto", payload: "" }
    agregarProducto: (state, action) => {
      state.push(action.payload);
    },
    quitarProducto: (state, action) => {
      return state.filter(producto => producto.title !== action.payload);
    },
  }
});

//* carritoSlice = { actions: { agregarProducto, quitarProducto }, reducer }
export const { agregarProducto, quitarProducto } = carritoSlice.actions;
export default carritoSlice.reducer;