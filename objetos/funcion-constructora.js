// nos permite crear objetos de forma menos manual
// la palabra new nos crea un objeto. en este caso de tipo Persona

function Persona(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.imprimirAuto = function() {
        console.log(`${this.marca} ${this.modelo} ${this.annio}`)
    }
}

var bmw = new Persona('BMW', 'M3 competition', 2021) // esto se llama instancia -> Crear un objeto dentro de otro
var toyota = new Persona('Toyota', 'Supra', 2021)
var mercedes = new Persona('Mercedes Benz', 'a45 AMG', 2021)

bmw.imprimirAuto();
toyota.imprimirAuto();
mercedes.imprimirAuto();

