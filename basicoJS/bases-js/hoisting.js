// Hay nuevas formas de definir variables en ecmascript 6
console.log(variable_antigua); // output: undefined
// Esto es el hoisting -> llamar una variable antes de inicializarla. 

var variable_antigua = 'Vieja forma de definir variables'; 

let variable = 'Nueva forma de declarar';

const variable_no_reasignable = 'Forma de definir una constante';

// lo ideal es declarar e inicializar las variables en la misma linea, aunque a veces solo se declaran y se inicializan después. 


// --- el hoisting también sucede en las funciones

hoisting();

function hoisting() {
    console.log('Soy una función con hoisting')
} // aquí las funciones, javascript automáticamente la sube arriba de todo el código por lo que la ejecuta sin problema. 

// como buena práctica las funciones y variables hay que declararlas al inicio del código para evitar los problemas de hoisting. 