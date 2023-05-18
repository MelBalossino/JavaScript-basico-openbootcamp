// EJERCICIOS MÓDULO 7- PARTE 3
//Crea un archivo llamado fechas.js que contenga las siguientes líneas

// La fecha de hoy
let fecha = new Date()
console.log(fecha);

//- La fecha de tu nacimiento
const fechaNacimiento = new Date(1990, 7, 14, 14, 13,);
console.log(fechaNacimiento);

//- Una variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let masTarde = fecha > fechaNacimiento;
console.log(masTarde);

//- Una variable que contenga el día de tu nacimiento
let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento);

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let añoNacimiento = fechaNacimiento.getFullYear();
console.log(añoNacimiento);