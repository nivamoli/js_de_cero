// scope global.

var hello = 'Hola'; // a esta variable se puede acceder desde cualquier parte.
let world = 'World'; 
const helloWorld = 'Hello World!';

console.log(hello);

function acceso() {
    console.log(hello); // en scope local puede acceder a las variables definidas es global. 
    console.log(world);
}

acceso();

// con var podemos reasignar una variable (es mala práctica)

var hello = 'Hola +'; 
// por el hoisting JS eleva esta variable arriba de todo el código por lo que me permite llamarla antes. 

let world = 'World +';
// con let no podemos reasignar una variable porque nos da error. 


const helloWorld = () => {
    globalVar = 'Im global' // Aquí estamos asignando una variable global a pesar que esta dentro de la función y es una mala práctica.
};

helloWorld(); // al ejecutar la función antes de llamarla globalmente, el retorno de la función ya está en el entorno global.
// si llamamos la variable globalVar antes de ejecutar la función aparece como no definida.
console.log(globalVar);

const anotherFunction = function () {
    var localVar = globalVar = 'Global Var';
}

anotherFunction();
console.log(globalVar); 
