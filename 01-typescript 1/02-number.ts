const claveGuardada: number = 1234;
const valorIngresado = "Hola";

const claveFormateada = Number(valorIngresado);
//* "Hola" => NaN
console.log(claveFormateada);
console.log(typeof NaN); //* number
console.log(typeof Infinity); //* number
console.log(typeof -Infinity); //* number

if(claveGuardada === claveFormateada) {
  console.log("Damos Acceso");
}