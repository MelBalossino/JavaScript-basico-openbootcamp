const miFuncion = num => {
    if (typeof num === "number") {
        return num / 2;
    }
    throw new Error("El valor debe ser de tipo número")
}

let numero = 84;

try {
    console.log("Está ejecutándose de manera correcta")
    const mitad = miFuncion(numero)
    console.log(mitad)
} catch (e) {
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}


