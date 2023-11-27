/* 9 - Escribe un programa que determine si un año es "sabático" (divisible por 4). */

let ingresaAño = prompt ("Ingresa año:");
ingresaAño = parseInt(ingresaAño);

if (ingresaAño % 7 == 0) {
    console.log("El año: " + ingresaAño + " es sabatico." );
    document.write("El año: " + ingresaAño + " es sabatico." );

}else if (ingresaAño) {
    console.log("El año: " + ingresaAño + " no es sabatico." );
    document.write("El año: " + ingresaAño + " no es sabatico." );

}else{ 
    console.log("Ingresa un número.");
    document.write("Ingresa un número.");
}
