//* TIPO PERSONALIZADO
type TAnimal = {
  especie: string;
};

//* MERGING => NO PERMITIDO
// type TAnimal = {
//   raza: string;
// }

//* EXTENDS
type TMascota = TAnimal & {
  nombre: string;
  edad: number;
};

const perro: TAnimal = {
  especie: "perro",
};

const ayudanteDeSanta: TMascota = {
  especie: "perro",
  nombre: "Ayudante de Santa",
  edad: 8
}

const stampi: Omit<TMascota, "edad"> = {
  especie: "elefante",
  nombre: "Stampi"
}

const bolaDeNieve: Partial<TMascota> = {
  nombre: "Bola de Nieve"
}
