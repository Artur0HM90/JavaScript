/* 6 - ingresa la edad y verifica si es mayor de edad. */

let ingresaEdad = prompt ("Ingresa edad.");
ingresaEdad = parseInt(ingresaEdad);

if (ingresaEdad >= 18) {
    console.log("Tienes " + ingresaEdad + " años, ERES MAYOR DE EDAD.");

}else if ( ingresaEdad >= 0 ) {
    console.log("Tienes " + ingresaEdad + " años, ERES MENOR EDAD.")

} else if (ingresaEdad < 0) {
    console.log("Debes ingresar una edad mayor a 0.")

} else {
    console.log("INGRESA UNA EDAD.");    
} 
