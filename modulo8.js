// EJERCICIOS MÓDULO 8 
// Crea un archivo JS que contenga las siguientes líneas

// Una función sin parámetros que devuelva siempre "true"
function verdad(...parametros) {
return true;
}
console.log(verdad());

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function saludo(){
  console.log("Hola soy una promesa");
}
setTimeout(saludo, 5000);

// - Una función generadora de índices pares automáticos
function* generadorIndicesPares() {
  let indice = 0;
  while (true) {
    yield indice;
    indice += 2;
  }
}
const generador = generadorIndicesPares();

console.log(generador.next().value); // 0
console.log(generador.next().value); // 2
console.log(generador.next().value); // 4
console.log(generador.next().value); // 6
