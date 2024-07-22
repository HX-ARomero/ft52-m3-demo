function resta(a: any, b: any) {
  return a + b;
}

let miVariaable: any = null;
miVariaable = "Valor";
miVariaable = "1234";
miVariaable = Number(miVariaable);

// let otraVariable = "Otro Valor" as string;
// otraVariable.

const persona: any = { nombre: "Carl", edad: 30 };

let personaTipada = persona as { nombre: string, edad: number };

console.log(`Apellido: ${persona.apellido}`); //!
// console.log(`Apellido: ${personaTipada.apellido}`); //!

let hola: string = "Hola";
const saludo: string = "Hola";
// saludo.push();