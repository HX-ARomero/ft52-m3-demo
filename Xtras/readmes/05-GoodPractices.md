# BUENAS PRÁCTICAS

## COMENTAR CORRECTAMENTE NUESTRO CÓDIGO

- No utilizamos comentarios para explicar qué hacemos...
```js
// Verificamos si la edad es mayor a 18
if (a > 18) {
    // Si es mayor a 18 permitimos acceso
    // Si es menor a 18 no lo permitimos
}
```
- Utilizamos comentarios para explicar el por qué lo hacemos:
```js
// Los usuarios menores de 18 años no tendrán acceso
if (age > 18) {
    // Código...
}
```


## NO UTILIZAR IF PARA DEVOLVER UN BOOLEANO

- Evitamos incluir un if innecesario, complejizando nuestro código...
```js
if (num % 2 === 0) return true;
else return false;
```
- Podemos retornar directamente la condición:
```js
return num % 2 === 0;
```

[Volver a Inicio](../README.md)

[Buenas prácticas 04](./04-GoodPractices.md)

[Buenas prácticas 06](./06-GoodPractices.md)