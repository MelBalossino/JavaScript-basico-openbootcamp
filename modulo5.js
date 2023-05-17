/* EJERCICIOS MÓDULO 5 NUMBERS
Crea un archivo JS que contenga las siguientes líneas
*/
// Una variable que contenga tu altura en centímetros (entero)
let altura = 169;

// Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMetros = 1.69;

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKilogramos = 72.10;

// Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeada = Math.ceil(alturaMetros);

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedondeado = Math.floor(pesoKilogramos);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxValor = Number.MAX_VALUE;
let numero1 = maxValor + 1;

if (maxValor === numero1) {
    let iguales = "Si, son iguales";
} else {
    console.log("No son iguales!");
}

