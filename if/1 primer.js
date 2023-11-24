/* 1 - Escribe un programa que determine si un número es positivo, negativo o cero.*/ 

let ingresaNumero = prompt('Ingresa un número.');

if (ingresaNumero > 0) {
    console.log("El número " + ingresaNumero + " es positivo.")

}else if (ingresaNumero < 0) {
    console.log("El número " + ingresaNumero + " es negativo.")

}else if (ingresaNumero == 0) {
    console.log("El número que ingresaste es " + ingresaNumero + ".")
}else{
    console.log("Debes ingresar un número.")
}