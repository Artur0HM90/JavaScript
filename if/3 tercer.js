/* 3 - Implementa un programa que determine si un año es bisiesto.

¿Cómo saber si un año es bisiesto?
Todos los años bisiestos son divisibles entre 4.
Aquellos años que son divisibles entre 4, pero no entre 100, son bisiestos.
Los años que son divisibles entre 100, pero no entre 400, no son bisiestos.
Sin embargo, los años divisibles entre 100 y entre 400 sí que son bisiestos.
*/

let ingresaAño = prompt("Ingresa un año.");

if (ingresaAño % 4 == 0 && ingresaAño & 100 == 0) {
    console.log("El año " + ingresaAño + " es bisiesto" )
}else {
    console.log("El año " + ingresaAño + " no es bisiesto" )
}