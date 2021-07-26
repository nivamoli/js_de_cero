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

var encontrarArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "iphone"
})
// .find Devuelve true o false si el elemento que buscamos existe
// no modifica el array, devuelve uno nuevo.
console.log(encontrarArticulo)


articulos.forEach(function(articulo) {
    console.log(articulo.nombre)
});

// forEach (para cada elemento del array) 
// este método no me devuelve un nuevo array sino que filtra del array original.


var articulosBaratos = articulos.some(function(articulo){
    return articulo.precio <= 300;
})
// devuelve un true o false
// en ese caso pedimos que devuelva si existe articulos que su precio es menor o igual a 300
console.log(articulosBaratos)
// some nos regresa una validación de verdadero o falso para elementos que cumplan la validación.