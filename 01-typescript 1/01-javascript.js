//* TIPADO DÉBIL: JS infiere el tipo de dato
let usuario = {
  nombre: "Homero",
  apellido: "Simpson",
};
let clave = "1234";

//* TIPADO DINÁMICO: JS permite cambiar el tipo de dato
usuario = "Homero";
clave = true;

//* Código

if(clave === "1234") {}

function saludar(nombre) {
  console.log(`Hola ${nombre.toUpperCase()}`);
}

saludar(usuario);
saludar(clave);