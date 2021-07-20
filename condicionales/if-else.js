
if(condicion) {
    // aquí indicamos que es lo que va a ejecutar si se cumple la condición.
}

var edad = 25; 

if(edad >= 18) { // si ocurre esto: 
    console.log('Puede votar'); // ejecute esto
} else { // si no se cumple la condicion (si es falso): 
    console.log('No puede votar') // ejecute esto
}

// si tenemos varias condiciones:

var edad = 17;

if(edad === 18) {
    console.log('Puedes votar por primera vez');
} else if (edad > 18) { // podemos tener muchos else if si necesitamos validar varias condiciones
    console.log('Puede votar');
} else {
    console.log('No puede votar');
}

// operador ternario -> básicamente es generar el if y el else en una sola línea:

condition ? true : false; // sintaxis

var numero = 1; 

var resultado = numero === 1 ? "si soy un 1" : "No soy un 1";  // el ? equivale a entonces, los : equivalen a si no 

console.log(resultado);


// ejercicio: 

var piedra = 'Piedra';
var papel = 'Papel';
var tijera = 'Tijera';

var usuario1 = piedra;
var usuario2 = papel;

function quienGana() {
    if(usuario1 === piedra && usuario2 === tijera) {
        console.log('Usuario 1 ha ganado')
    } else if (usuario1 === papel && usuario2 === piedra) {
        console.log('Usuario 1 ha ganado')
    } else {
        console.log('Usuario 2 ha ganado')
    }
}

quienGana();




