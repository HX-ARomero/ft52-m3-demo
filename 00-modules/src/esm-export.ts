//* ECMAScript Modules - Exportación
//* En entorno V8

const saludar = (nombre: string): void => console.log(`Hola ${nombre}`);
const nombre = "Carl";

const lenny = "Lenny";
export default (lenny);

export {
  saludar,
  nombre,
}



//* export = { saludar, nombre }