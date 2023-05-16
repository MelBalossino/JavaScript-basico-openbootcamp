/* EJERCICIOS MÓDULO 3 PARTE 3
Crea el siguiente archivo JS:

- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

*/

// BUCLE WHILE, BIFURCACIÓN IF Y SENTENCIA BREAK
let i = 1;
let factorial = 1;

while (i < 13) {
    factorial = factorial * i;
     i++;
     if (i >= 12) {
     continue;
 } if (i > 13) {
    break;
}
console.log(factorial);
}
