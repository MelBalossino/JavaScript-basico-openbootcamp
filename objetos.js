// EJERCICIOS MÓDULO 7 PARTE 2
// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let objetoPersona = {
    nombre: "Melodi",
    apellido: "Balossino",
    edad: 32,
    altura: 169,
    eresDesarrollador: true,
}
console.log(objetoPersona)

// Una variable que obtenga tu edad a partir del objeto anterior
let miEdad = objetoPersona.edad;
console.log(miEdad)
// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s.

let amigos = [
{nombre: "Fernanda", apellido: "Villada", edad: 31, altura: 168, eresDesarrollador: false},
{nombre: "Javier", apellido: "Valenzuela", edad: 33, altura: 171, eresDesarrollador: false},
]
console.log(amigos)

let listaCompleta = [objetoPersona, ...amigos];
console.log(listaCompleta)

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
let ordenadoPorEdad = _.sortBy(listaCompleta, 'edad').reverse();
console.log(ordenadoPorEdad);
