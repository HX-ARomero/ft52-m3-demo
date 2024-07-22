const ciudad: string = "Springfield";

const marge: string = "Marge Bubbie";

const edad = 12;

const lisa: string = `Lisa vive en ${ciudad} y tiene ${edad} años`;

console.log(lisa[200]); //* undefined

lisa[200]
  ? console.log(lisa[200])
  : console.log("No ha sido definido");
