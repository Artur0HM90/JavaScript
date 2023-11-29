/*
2 Tabla de multiplicar:
Imprime la tabla de multiplicar del 5 utilizando un bucle while.
*/

let inicio = 1;
let ingresaNumeroParaMultiplicar = prompt("Ingresa el número que se va a multiplicar:")
ingresaNumeroParaMultiplicar = parseInt(ingresaNumeroParaMultiplicar);

while (inicio <= 12) {
    document.write(`${inicio} * ${ingresaNumeroParaMultiplicar} = ${inicio * ingresaNumeroParaMultiplicar} <br>`);
    inicio ++;
}