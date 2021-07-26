// es una estructura y un tipo objeto
// es un valor que nos va a permitir guardar más valores adentro 

var frutas = [
    'Mandarina',
    'Naranja',
    'Granadilla'
]


console.log(frutas.length) // length nos permite saber la cantidad de elementos del array en este caso.
console.log(frutas[0])

// métodos 

frutas.push('Cereza'); // .push nos permite agregar elementos a un array en última posición.
console.log(frutas)


var ultimo = frutas.pop(); // nos permite eliminar el último elemento de un array
console.log(ultimo)
console.log(frutas)

var agregar_primero = frutas.unshift('Limón') //.unshift nos permite agregar un elemento en la primera posición del array
console.log(frutas);

var eliminar_ele_inicio = frutas.shift(); // .shift elimina el primero elemento del array
console.log(frutas); // elimina limón

var posicion_elemento = frutas.indexOf('Granadilla')
console.log(posicion_elemento); // output = 2 porque granadilla está en la posición 2.
