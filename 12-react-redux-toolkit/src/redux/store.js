import carritoSlice from "./carritoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  //* Quién es mi reducer:
  reducer: {
    carrito: carritoSlice,
  },
});

export default store;
