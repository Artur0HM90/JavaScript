let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt ("Ingresa tu edad: ");

nombre = nombre.toUpperCase();
edad = parseInt(edad);

function saludar(nombre, edad) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}
saludar(nombre, edad);

