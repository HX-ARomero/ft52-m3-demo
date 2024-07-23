//* UNION TYPES "|"
let otraVariable: string | undefined;
console.log(otraVariable); //* undefined
otraVariable = "Valor";

let miVariable: number | string = 1234;
miVariable = "Hola Mundo!!!";

//* ALIAS "|"
type TRoles = "admin" | "invitado" | "registrado";

function tienePermisos(rol: TRoles): string {
  if (rol === "admin") {
    return "OK";
  }
  return "Sin permiso!!!";
}
console.log(tienePermisos("admin"));
console.log(tienePermisos("invitado"));
// console.log(tienePermisos("tester"));
const myRole = "admin";
console.log(tienePermisos(myRole));