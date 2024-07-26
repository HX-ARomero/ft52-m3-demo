//* COMMON JS - Importación
//* En entorno Node JS

const { suma, num1, num2 } = require('./common-export');

// console.log(importado);

const resultado = suma(num1, num2);
console.log(resultado);