type TContacto = {
	email: string;
	celular?: number;
}

enum THobbies {
	AJEDREZ = "Jugar Ajedrez",
	CODEAR = "Codear",
	MUSICA = "Escuchar música",
	MIRARTV = "Mirar tele"
}

export interface IUsuario {
  id: number;
  nombre: string;
  hobbies: string[];
  contacto: TContacto;
}

const lenny: IUsuario = {
  id: 1,
  nombre: "Lenny",
  hobbies: [THobbies.MUSICA, THobbies.MIRARTV],
  contacto: {
    email: "lenny@mail.com",
    celular: 12345678,
  },
};
console.log(lenny);