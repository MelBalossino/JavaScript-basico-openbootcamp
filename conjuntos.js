/* EJERCICIOS MÓDULO 7 PARTE 1
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
*/

// Un nuevo Set con los nombres de tu familia
let arrayFamilia = ["Melodi", "Gianfranco", "Adriana", "Cinthia"];
let familia = new Set(arrayFamilia);

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familia.add("Melodi");

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida).
familia.add("Javascript");