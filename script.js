/*
let primerNumero = prompt ("1 numero");
let segundoNumero = prompt ("2 numero");

let resultado = parseFloat (primerNumero + segundoNumero);

console.log(resultado);
*/
let primerNumero = prompt('Ingresa el primer número')
let segundoNumero = prompt('Ingresa el segundo número')
let operacion = primerNumero + segundoNumero;

primerNumero = parseFloat(primerNumero);
segundoNumero = parseFloat(segundoNumero);

if (operacion > 7) {
    console.log('Es mayor a 7')
}else if (operacion < 7 && operacion > 2) {
    console.log('Esta entre 7 y 2')
}else {
    console.log('es false');
}