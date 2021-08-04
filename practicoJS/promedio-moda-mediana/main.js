// promedio de la media aritmética 
// = suma de numeros de cada venta  / cantidad de ventas


// ------------- Promedio ---------------- 

const lista1 = [
    100,
    200,
    400,
    600,
    800
];
// con arrays podemos iterar cada uno de los elementos sin usar ciclos.

// con arrays podemos iterar cada uno de los elementos sin usar ciclos.


function mediaAritmetica(arr) {
    const sumaLista = lista1.reduce(function(varlorAcum = 0, elemento) {
        varlorAcum = varlorAcum + elemento; 
        return varlorAcum
    })
    // reduce recibo una función como argumento
    const promedio = sumaLista / lista1.length;
    return console.log(promedio);
}

mediaAritmetica(lista1);

// function mediaAritmetica(arr) {
//     let sumaLista1 = 0;
//     for(let i = 0; i < lista1.length; i++) {
//         sumaLista1 = sumaLista1 + lista1[i];
//     }
//     const promedio = sumaLista1 / lista1.length;
//     return console.log(promedio);
// }

// mediaAritmetica(lista1);

// con arrays podemos iterar cada uno de los elementos sin usar ciclos. 



// ------------- Mediana ---------------- 


// mediana 
// = Ordenar todos los valores e identificar el valor de la mitad. 
// eje= 1, 4, 6, 7, 9 -> la mediana es 6
// en caso de tener pares: 
// 10 14 25 40 = Se suman los 2 elementos de la mitad / 2 


function mediana() {
    
}







// ------------- Moda ---------------- 


// moda
// es el elemento que más se repite: 
// 10 ,23 , 45, 45, 50 , 45 = la moda es 45
// pueden ser varios números que se repiten las mismas veces
// no solamente son números.


function moda() {

}

