/* 2 - Crea un programa que verifique si un número es par o impar.*/

let ingresaNumero = prompt ("Ingresa un número");

if (ingresaNumero % 2 == 0) {
    console.log("El número " + ingresaNumero + " es par")
}else {
    console.log("El número " + ingresaNumero + " es impar");
}