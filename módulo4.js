/* EJERCICIOS MÓDULO 4
Crea un archivo JS que contenga las siguientes líneas
*/
// Una cadena de texto con tu Nombre
let nombre = "Melodi";

// Otra cadena de texto con tu Apellido
let apellido = "Balossino";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `    ${nombre} ${apellido}   `;

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = nombre.toUpperCase();

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúscula
let estudianteMinus = nombre.toLowerCase();

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(estudiante.length);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.trim().length);

// Una variable que contenga la primera letra del Nombre
let primeraLetraNombre = nombre[0];

// Otra variable que contenga la última letra del Apellido
let ultimaLetraApellido = apellido[apellido.length -1];

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.includes(nombre));

