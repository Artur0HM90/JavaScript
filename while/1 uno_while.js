let ingresaNumero = prompt ("Ingresa un número entero: ") ;
ingresaNumero = parseInt(ingresaNumero)

while (ingresaNumero <= 5) {
    document.write(`${ingresaNumero},`);
    ingresaNumero++;
}