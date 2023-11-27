/*

Calificación:

Solicitar al usuario que ingrese una calificación del 1 al 5.
Utilizar un switch para imprimir un mensaje asociado a la calificación (por ejemplo, "Muy excelente","Excelente", "Bueno", "Regular", "Malo".).

*/

let ingresaCalificación = prompt("Ingresa calificación 1 - 5: \n 1 Muy excelente. \n 2 excelente. \n 3 Bueno. \n 4 Regular. \n 5 Malo.")

ingresaCalificación = parseInt(ingresaCalificación);



switch (ingresaCalificación) {
    case 1:
        document.write("El usuario tiene una Muy excelente calificación.");
        break;

    case 2:
        document.write("El usuario tiene una Excelente calificación.");
        break

    case 3:
        document.write("El usuario tiene una Bueno calificación.");
        break;

    case 4:
        document.write("El usuario tiene una Regular calificación.");
        break;

    case 5:
        document.write("El usuario tiene una Mala calificación.");
        break;

    default:
        document.write("ERROR -  Debes ingresar del 1 - 5.");
        break;
}