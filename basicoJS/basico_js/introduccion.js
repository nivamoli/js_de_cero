// tipos de datos 

// primitivos 
 
var numero = 23;
var cadena_texto = "string"; // se usan más las comillas simples ''
var booleano = true || false;
// empty values - valores vacíos - valores placeholders:
var und = undefined;
var nul = null; // se usan cuando aún no tenemos el valor que necesitamos pero necesitamos reservar el espacio en memoria. 


// Objetos

// -- datos predefinidos por JS: 
 
var fecha = Date; 
var expresiones_regulares = RegExp;
var err = Error; 

// -- datos definidos por el usuario/programador 

var func_simple = function() {};
var funcionConstructora = function Persona(nombre) {this.nombre = nombre;}; 

// -- Arrays 

var arr = [0, 1, 2, 3, 4];

// -- Objetos 

var obj = {}; 
var objeto_global = "global object";
var prototipo = console.log(func_simple.prototype);


// averiguar un tipo de dato :

var tipo_dato = typeof obj; 



