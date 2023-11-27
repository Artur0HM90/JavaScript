/*

Día de la semana:
Solicitar al usuario que ingrese un número del 1 al 7.
Utilizar un switch para imprimir el día de la semana correspondiente.

*/

let ingreseDia = prompt("Ingresa el número de samana  \n 1 Lunes \n 2 Martes \n 3 Miercoles \n 4 Jueves \n 5 Viernes \n 6 Sabado \n 7 Domingo")

ingreseDia = parseInt(ingreseDia);

switch (ingreseDia) {
    case 1:
        document.write("Escogiste Lunes.");
        break;

    case 2:
        document.write("Escogiste Martes.");
        break;
    
    case 3:
        document.write("Escogiste Miercoles.");
        break;
    
    case 4:
        document.write("Escogiste Jueves.");
        break

    case 5:
        document.write("Escogiste viernes.");
        break;

    case 6:
        document.write ("Escogiste Sabado.");
        break;

    case 7:
        document.write("Escogiste Domingo.");
        break;

    default:
        document.write("ERROR - Ingresa un valor del 1 - 7.");
        break;
}