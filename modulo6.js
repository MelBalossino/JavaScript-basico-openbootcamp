/* EJERCICIOS MÓDULO 6
Crea un archivo JS que contenga las siguientes líneas
*/

// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compra = ["Leche", "Manteca", "Queso", "Carne", "Avena", "Aceite de girasol"];

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop();

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculasFav = [
    { titulo: "Paratemporal", director: "Justin Benson", anyo: 2020 },
    { titulo: "Erin Brockovich", director: "Steven Soderbergh", anyo: 2000 },
    { titulo: "Si yo tuviera 30", director: "Gary Winick", anyo: 2004 },
]

// Una nueva lista que contenga las películas posteriores al 2010 (utilizando filter)
let peliculasPost2010 = peliculasFav.filter(obj => obj.anyo > 2010)

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = peliculasFav.map((valor) => valor.director);

//  Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let tituloPeliculas = peliculasFav.map((valor) => valor.titulo);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let titulosDir = (directores.concat(tituloPeliculas));

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let propagacion = [...directores,...titulosDir];
