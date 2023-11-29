function estoEsUnaFuncion(params) {
    console.log("Uno");
    return 19;
    console.log("Dos");
    console.log("Tres");
    return "La funcion ha retornado una cadena de texto.";
}
/*
let valorDeFuncion = estoEsUnaFuncion();
console.log(valorDeFuncion);
*/

let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt ("Ingresa tu edad: ");

nombre = nombre.toUpperCase();
edad = parseInt(edad);

function saludar(nombre, edad) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);


}
saludar(nombre, edad);

