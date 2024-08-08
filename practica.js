alert('Hola desde alert!');

//var apellido = "Torres";
let nombre = "Carmen";

const pi = 3.14;
//string nombre = "Juan";
//Tipos de datos

//No definido
let noDefinido;
//Número
let cantidad = 50;
//Cadena de texto o String
let bebida = "agua";
// booleanos
let activo = true;

//Objetos
//Persona: nombre, apellido, edad, peso
let persona = {nombre: 'Estrella', apellido: 'Rivera', edad: 24};
console.log(persona);

let personas = [
    {nombre: 'Melanie', apellido: 'Matus', edad: 21},
    {nombre: 'Amayrani', apellido: 'Arias', edad: 19},
    {nombre: 'Karla', apellido: 'Yulenni', edad: 22},
    persona
];

console.log(personas);
console.log(personas[2]);

//FUNCIONES JS
//Listado de instrucciones
function suma(a, b) {
    return a + b;
}
let resultadoDeSuma = suma(9, 7);
console.log(resultadoDeSuma); // Aquí estás llamando correctamente a console.log

function multiplicacion(a, b) {
    return a * b;
}

let resultado = multiplicacion(5, 7);
console.log(resultado); // Aquí estás llamando correctamente a console.log
