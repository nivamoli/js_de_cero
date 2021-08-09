
const listaSalarios = colombia.map(function(persona) {
    return persona.salary;
});

const salariosOrdenados = listaSalarios.sort(function(salaryA, salaryB) {
    return salaryA - salaryB;
})


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

console.log(medianaSalarios(salariosOrdenados));