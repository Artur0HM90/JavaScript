/* 8 - Escribe un programa que determine si un estudiante aprobó (supón que 70 o más es aprobado). */

let ingresaUnDiaDeLaSemana = prompt ("Ingresa el número del día de la semana: 1 lunes 2 martes 3 miercoles 4 jueves 5 viernes 6 sabado 7 viernes");

ingresaUnDiaDeLaSemana = parseInt(ingresaUnDiaDeLaSemana);

if (ingresaUnDiaDeLaSemana == 1 ) {
    console.log("ingresaste el día número " + ingresaUnDiaDeLaSemana + " corresponde al LUNES.");

}else if (ingresaUnDiaDeLaSemana == 2) {    
    console.log("ingresaste el día número " + ingresaUnDiaDeLaSemana + " corresponde al MARTES.");

}else if (ingresaUnDiaDeLaSemana == 3) {
    console.log("ingresaste el día número " + ingresaUnDiaDeLaSemana + " corresponde al MIRCOLES.");

}else if (ingresaUnDiaDeLaSemana == 4) {
    console.log("ingresaste el día número " + ingresaUnDiaDeLaSemana + " corresponde al JUEVES.");
    
}else if (ingresaUnDiaDeLaSemana == 5) {
    console.log("ingresaste el día número " + ingresaUnDiaDeLaSemana + " corresponde al VIERNES.");

}else if (ingresaUnDiaDeLaSemana == 6) {
    console.log("ingresaste el día número " + ingresaUnDiaDeLaSemana + " corresponde al SABADO.");
    
}else if (ingresaUnDiaDeLaSemana == 7) {
    console.log("ingresaste el día número " + ingresaUnDiaDeLaSemana + " corresponde al DOMINGO.");
    
} else {
    console.log("INGRESA EL NÚMERO CORRECTO.")
}