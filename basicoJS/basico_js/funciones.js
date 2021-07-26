// hay 2 tipos de funciones: declarativas y de expresión/expresivas

// -----  funcion declarativa: 

function funDeclarativa() {
    console.log('soy una función declarativa')
    return 1; // las funciones siempre deben retornar valores.
}

nombre(); // así la invocamos

// ----- Función expresiva

// en este tipo la función puede llevar un nombre pero normalmente se definen anónimas.

var funExpresiva = function() { // guardamos una función anónima en una variable. 
    console.log('Soy una función expresiva');
    return 2;
}

funExpresiva(); // se llama igual que una función declarativa. 


// ----- Ejemplos

// function con parámetros

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiante('Nicolás')


// function con return

function suma(a, b) {
    var resultado = a + b 
    return resultado
}

console.log(suma(10, 10));


/* A las funciones declarativas se les aplica hoisting, a la expresión de función, no.
 Ya que el hoisting solo se aplica en las palabras reservadas var y function. */


/* Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función
 antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero,
  y después mandarla llamar. */ 