/*
3 Saludo personalizado:

Crea una función que tome un nombre como argumento y devuelva un saludo personalizado.

*/

let ingreseNombre = prompt("Ingrese nombre: ");
let ingreseSaludo = prompt("Ingrese saludo:");

ingreseNombre = ingreseNombre.toUpperCase();
ingreseSaludo = ingreseSaludo.toUpperCase();

function enviarSaludo(ingreseNombre, ingreseSaludo) {
    document.write(`${ingreseNombre} te enviamos un gran saludo: ${ingreseSaludo}.`);
    
}

enviarSaludo(ingreseNombre, ingreseSaludo);