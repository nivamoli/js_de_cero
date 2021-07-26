var articulos = [
    articulo1 = {
        nombre: 'televisor',
        precio: 250
    },
    articulo2 = {
        nombre: 'Bicicleta',
        precio: 500
    },
    articulo3 = {
        nombre: 'iphone',
        precio: 1000
    },
    articulo4 = {
        nombre: 'audifonos',
        precio: 300
    }
]

function agregarArticulo() {
    articulos.push(articulo5 = {nombre: 'control', precio: 350})
} // .push nos permite agregar un elemento al final del array.

agregarArticulo();
console.log(articulos);

// eliminar el primer elemento: 

var eliminarPrimerElemento = articulos.shift();
// con .shift eliminamos el elemento del indice 0 en un array
console.log(articulos);

// eliminar el último elemento: 

var eliminarUltimoElemento = articulos.pop();
// nos permite eliminar el último elemento de un array
console.log(eliminarUltimoElemento);
console.log(articulos)