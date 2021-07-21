


// filtrar: .filter
// nos ayuda a filtrar y a validar si algo es verdad o falso y lo mete en un nuevo array (no modifica el original)
// el .filter recibe una función como parámetro
var filtrar = articulos.filter(function(articulo) {
    return articulo.precio >= 500; 
})

console.log(filtrar);



// Mapear: .map 
// nos permite ejecutar una función para cada elemento del array (crea un nuevo array - no modifica el original)

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

var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre; 
})

console.log(nombreArticulos);
