// javascript esta diseñado bajo un paradigma de objetos

var carro = { // la sintaxis es: {}
    marca: 'BMW',
    modelo: 'M3 competition',
    annio: 2021,
    detalleAuto: function() {
        console.log(`${carro.marca} ${carro.modelo} ${carro.annio}`) // notación de punto para recorrer un objeto
        // this hace referencia al objeto padre (en este caso es carro)
        console.log(`${this.marca} ${this.modelo} ${this.annio}`)
    }
}

carro.detalleAuto();


