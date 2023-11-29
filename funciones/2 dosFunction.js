/* 
2 - Suma simple:

Crea una función que sume dos números y devuelva el resultado.

*/

let ingresaPrimerNumero  = prompt("Ingresa primer número: ");
let IngresaSegundoNumero = prompt("Ingresa segundo número:");

ingresaPrimerNumero  = parseFloat(ingresaPrimerNumero);
IngresaSegundoNumero = parseFloat(IngresaSegundoNumero);

let resultado = ingresaPrimerNumero + IngresaSegundoNumero;

function suma(ingresaPrimerNumero, IngresaSegundoNumero) {
    document.write(`El resultado de la suma es ${resultado}.`);
}

suma();