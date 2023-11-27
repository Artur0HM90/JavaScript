/* 11 - Crea un programa que clasifique un número como positivo o negativo. */

let ingresaNumero = prompt("Ingresa un número: ");
ingresaNumero = parseFloat(ingresaNumero);

if (ingresaNumero > 0) {
    document.write("El número " + ingresaNumero + " es positivo.");

} else if (ingresaNumero < 0) {
    document.write("El número " + ingresaNumero + " es negativo." );

} else if (ingresaNumero == 0) {
    document.write("El número que ingresaste es " + ingresaNumero + ".");

} else {
    document.write("Debes ingresar un número.");
}