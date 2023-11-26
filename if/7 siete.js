/* 

7 - Escribe un programa que determine si un estudiante aprobó (supón que sacaste

* 11 a 20 estas aprobado - ). 
* 7 a 10 tienes derecho a ir a aplazados
* 0 a 6 estas desaprobado

*/

let primeraNota = prompt("Ingresa la primera nota.");
let segundaNota = prompt("Ingresa la segunsa nota.");
let terceraNota = prompt("Ingresa la tercera nota.");
let cuartaNota  = prompt("Ingresa la cuarta nota.");

primeraNota = parseFloat(primeraNota);
segundaNota = parseFloat(segundaNota);
terceraNota = parseFloat(terceraNota);
cuartaNota  = parseFloat(cuartaNota);

notaFinal = ((primeraNota + segundaNota + terceraNota + cuartaNota) / 4);

if (notaFinal >= 11) {
    console.log("Tu nota final es: " + notaFinal + " estas APROBADO.")

}else if (notaFinal >= 7) {
    console.log("Tu nota final es: " + notaFinal + " tienes derecho a ir aplazados.")

} else {
    console.log("Tu nota final es: " + notaFinal + " estas desaprobado.")
}