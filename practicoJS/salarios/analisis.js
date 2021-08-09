
// Helpers ó Utils -> Funciones que no son del programa principal pero que sirven para el fin de este. 

// calcular mediana general
function mediaAritmetica(lista) {
    const sumaLista = lista.reduce(function(varlorAcum = 0, elemento) {
        varlorAcum = varlorAcum + elemento; 
        return varlorAcum;
    })
    // reduce recibo una función como argumento
    const promedio = sumaLista / lista.length;
    return promedio;
}

function esPar(numero) {
    return (numero % 2 === 0); 
}

// Helpers /// 


// ----- calcular mediana salarios

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)
    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = mediaAritmetica([personaMitad1, personaMitad2])
        return mediana;
    } else {
        const personaMitad = lista[mitad]
        return personaMitad;
    }
}

const listaSalarios = colombia.map(function(persona) {
    return persona.salary;
});

const salariosOrdenados = listaSalarios.sort(function(salaryA, salaryB) {
    return salaryA - salaryB;
})

const medianaGeneralCol = medianaSalarios(salariosOrdenados);



// ----- calcular mediana Top 10%



const spliceStart = (salariosOrdenados.length * 90) / 100;
const spliceCount = salariosOrdenados.length - spliceStart;

const salaryTop10 = salariosOrdenados.splice(
    spliceStart,
    spliceCount
)

const medianaTop10Col = medianaSalarios(salaryTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
})