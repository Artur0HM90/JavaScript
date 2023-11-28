/* 
5 - Estación del año:

Solicitar al usuario que ingrese un mes.
Utilizar un switch para imprimir la estación del año correspondiente.

*/

let ingresaMes = prompt ("Ingresa mes:");
ingresaMes = ingresaMes.toUpperCase();

switch (ingresaMes) {
    case "DICIEMBRE":
    case "ENERO": 
    case "FEBRERO":
    case "MARZO":
        document.write("El mes de " + ingresaMes + " es Verano.");
        break;
    
    case "ABRIL": 
    case "MAYO":
    case "JUNIO":
        document.write("El mes de " + ingresaMes + " es Otoño.");
        break;
    
    case "JULIO":
    case "AGOSTO":
    case "SETIEMBRE":
        document.write("El mes de " + ingresaMes + " es Invierno.");
        break;

    case "OCTUBRE":
    case "NOVIEMBRE":
        document.write("El mes de " + ingresaMes + " es Primavera."); 
        break;

    default:
        document.write("Debes ingresa una estación del año.");
        break;
}