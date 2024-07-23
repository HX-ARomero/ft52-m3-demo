//* INTERFAZ
interface IPersona {
  nombre: string;
  apellido: string;
}

//* MERGING
interface IPersona {
  edad: number;
}
interface IPersona {
  telefono?: number
}

//* EXTENDS
interface IEmpleado extends IPersona {
  cargo: string
}

const marge: IPersona = {
  nombre: "Marge",
  apellido: "Bubbie",
  edad: 36,
  telefono: 123456,
}

const lisa: Omit<IPersona, "edad"> = {
  nombre: "Marge",
  apellido: "Bubbie",
  telefono: 123456,
}

const bart: Partial<IPersona> = {
  nombre: "Bart",
}

const homero: IEmpleado = {
  nombre: "Homero",
  apellido: "Simpson",
  edad: 37,
  cargo: "Jefe de Seguridad",
}
