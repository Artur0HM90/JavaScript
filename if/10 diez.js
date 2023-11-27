/* 10 - Implementa un programa que determine si una letra es una vocal. */

let ingresaVocal = prompt("Ingresa una vocal: ");
ingresaVocal = ingresaVocal.toUpperCase();

if (ingresaVocal == "A" || ingresaVocal == "E" || ingresaVocal == "I" || ingresaVocal == "O" || ingresaVocal == "U") {
    document.write(ingresaVocal + " es una vocal.");

} else {
    document.write(ingresaVocal + " no es una vocal.")}