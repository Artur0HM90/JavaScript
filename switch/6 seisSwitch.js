/* 
6 - Conversión de unidades:

Solicitar al usuario que ingrese una unidad de medida ("metro", "kilogramo", "litro", etc.).
Utilizar un switch para imprimir la abreviatura correspondiente ("m", "kg", "L", etc.).

*/

let ingresaUnidadDeMedida = prompt("Escribe la unidad de medida: \n 1 Metro. \n 2 Kilogramo. \n 3 Litro.");

ingresaUnidadDeMedida = ingresaUnidadDeMedida.toUpperCase();

switch (ingresaUnidadDeMedida) {
    case "METRO":
        document.write("Has ingrsado la unidad de medida el " + ingresaUnidadDeMedida + " su abreviatura es 'm'" );
        break;
    
    case "KILOGRAMO":
        document.write("Has ingresado la unidad de medida el " + ingresaUnidadDeMedida + " su abreviatura es 'kg.'" );
        break;

    case "LITRO":
        document.write("Has ingresado la unidad de medida el " + ingresaUnidadDeMedida + " su abreviatura es 'L.'");
        break;

    default:
        document.write("Debes ingresar la unidad de medida que se te dio.");
        break;
}