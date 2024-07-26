//* ECMAScript Modules - Importación
//* En entorno V8

import valor from "./esm-export";

import { saludar, nombre } from "./esm-export";

console.log("importado: ", valor);
saludar(valor);
saludar(nombre);
