/* 
2 - Mes del año:

Solicitar al usuario que ingrese un número del 1 al 12.
Utilizar un switch para imprimir el nombre del mes correspondiente.

*/

let ingresaAño = prompt("Ingresa el numero del mes: \n 1 Enero \n 2 Febrero \n 3 Marzo \n 4 Abril \n 5 Mayo \n 6 Junio \n 7 Julio \n 8 Agosto \n 9 Setiembre \n 10 Octubre \n 11 Noviembre \n 12 Diciembre ");

ingresaAño = parseInt (ingresaAño);

switch (ingresaAño) {
    case 1:
        document.write("Elegiste Enero.");
        break;

    case 2:
        document.write("Elegiste Febrero.");
        break;

    case 3:
        document.write("Elegiste Marzo.");
        break;

    case 4:
        document.write("Elegiste Abril.");
        break;

    case 5:
        document.write("Elegiste Mayo.");
        break;

    case 6:
        document.write("Elegiste Junio.");
        break;

    case 7:
        document.write("Elegiste Julio.");
        break;

    case 8:
        document.write("Elegiste Agosto.");
        break;

    case 9:
        document.write("Elegiste Setiembre.");
        break;

    case 10:
        document.write("Eleguste Octubre.");
        break;

    case 11:
        document.write("Elegiste Noviembre.");
        break;

    case 12:
        document.write("Elegiste Diciembre.");
        break;

    default:
        document.write("ERROR - Elige un valor del 1 - 12.");
        break;
}