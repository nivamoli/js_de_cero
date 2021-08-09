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
        return varlorAcum;
    })
    // reduce recibo una función como argumento
    const promedio = sumaLista / lista1.length;
    return console.log(promedio);
}

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


function mediaAritmetica(lista2) {
    const sumaLista = lista2.reduce(function(varlorAcum = 0, elemento) {
        varlorAcum = varlorAcum + elemento; 
        return varlorAcum;
    })
    // reduce recibo una función como argumento
    const promedio = sumaLista / lista2.length;
    return promedio;
}

const lista2 = [
    20,
    50,
    70,
    100,
    200,
    400,
    500,
    600
]

function esPar(numero) {
    if(numero % 2 === 0) {
        return true;
    } else {
        return false
    }
}

function mediana(arr) {
    let mediana;
    const mitadLista = parseInt(lista2.length / 2)
    if (esPar(lista2.length)) {
        const elemento1 = lista2[mitadLista - 1];
        const elemento2 = lista2[mitadLista];
        const promedio1y2 = mediaAritmetica([elemento1, elemento2]);
        mediana = promedio1y2;
        console.log(mediana);
    } else {
        mediana = lista2[mitadLista];
        console.log(mediana);

    }
} 

mediana(lista2);






// ------------- Moda ---------------- 


// moda
// es el elemento que más se repite: 
// 10 ,23 , 45, 45, 50 , 45 = la moda es 45
// pueden ser varios números que se repiten las mismas veces
// no solamente son números.


const lista3 = [
    1,
    2,
    4,
    5,
    5,
    5,
    6,
    9
];

const listaCount = {};

lista3.map(function(elemento) {
        if(listaCount[elemento]) {
            listaCount[elemento] += 1
        } else {
            listaCount[elemento] = 1; 
        }
});

console.log(listaCount);

let countArray = Object.entries(listaCount).sort(
    function(valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
); 

console.log(countArray)

const moda = countArray[countArray.length - 1]

console.log(moda);