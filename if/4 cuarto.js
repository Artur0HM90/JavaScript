/* 4 - Crea un programa que clasifique un triángulo como equilátero o no equilátero.

Perímetro de un triángulo equilátero
Una de las características del triángulo equilátero es que sus tres lados son iguales, por lo tanto, para calcular el perímetro corresponde a tres veces la longitud de uno de sus lados (a).

*/

let primerLado = prompt ("Ingresa el primer lado.");
let segundoLado = prompt ("Ingresa el segundo lado.");
let tercerLado = prompt ("Ingresa el tercer lado.");

primerLado = parseFloat(primerLado);
segundoLado = parseFloat(segundoLado);
tercerLado = parseFloat(tercerLado);

if (primerLado && segundoLado && tercerLado) {
    if (primerLado == segundoLado && segundoLado == tercerLado) {
        console.log("Los tres lados son iguales es un triángulo equilátero.");

    } else{
        console.log("Los tres lados no son iguales.");
    }
} else{
    console.log("Ingresa valores validos.");
}