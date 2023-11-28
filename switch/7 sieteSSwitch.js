/*
7 Día laboral o fin de semana:

Solicitar al usuario que ingrese un día de la semana. Utilizar un switch para imprimir si es un día laboral o un día de fin de semana.

*/

let ingresaDiaDeLaSemana = prompt("Ingresa dia de la semana:");
ingresaDiaDeLaSemana = ingresaDiaDeLaSemana.toUpperCase();

switch (ingresaDiaDeLaSemana) {
    case "LUNES":
    case "MARTES":
    case "MIERCOLES":
    case "JUEVES":
    case "VIERNES":
        document.write("El día " + ingresaDiaDeLaSemana + " es un dia laboral.");
        break;
    
    case "SABADO":
    case "DOMINGO":
        document.write("El día " + ingresaDiaDeLaSemana + " es un día no laborable.");
        break;

    default:
        document.write("has ingresado " + ingresaDiaDeLaSemana + " no corresponde a un día de la semana.");
        break;
}