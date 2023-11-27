/* 

Tipo de figura:

Solicitar al usuario que ingrese el nombre de una figura geométrica (cuadrado, triángulo, círculo, etc.).
Utilizar un switch para imprimir el número de lados de la figura.

*/

let figuraGeometrica = prompt("Escribe una figura geometrica: \n Cuadrado \n Triangulo \n Rectangulo \n Pentagono \n Octagono")

figuraGeometrica = figuraGeometrica.toUpperCase();

switch (figuraGeometrica) {
    case "CUADRADO":
        document.write("Elegiste " + figuraGeometrica + " tiene 4 lados.");
        break;

    case "TRIANGULO":
        document.write("Elegiste " + figuraGeometrica + " tiene 3 lados.");
        break;

    case "RECTANGULO":
        document.write("Elegiste " + figuraGeometrica + " tiene 4 lados.");
        break;

    case "PENTAGONO":
        document.write("Elegiste " + figuraGeometrica + " tienes 5 lados.");
        break;

    case "OCTAGONO":
        document.write("Elegiste " + figuraGeometrica + " tienes 8 lados.");
        break;

    default:
        document.write(figuraGeometrica + " - NO ES UNA FIGURA GEOMETRICA debes ingresar el nombre de una de las figuras geometricas de la lista.");
        break;
}
