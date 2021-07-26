// es la forma en que podemos ambiar un tipo de valor a otro

// coerción implícita 
// -- sucede cuando el lenguaje nos ayuda y cambia un tipo de valor a otro

// coerción explícita. 
// -- Sucede cuando nosotros obligamos a cambiar un tipo de valor por otro. 


// ejemplos coerción implícita: 

var coercion = 4 * '7';
console.log(coercion)
// output = tipo de dato Number = 28 

var coercion_concatenada = 4 + "2"; // aquí no realiza la operación, solo agregar el 4 al 2 en un string. 
console.log(coercion_concatenada); 
// output = Tipo de dato String = 42


// ejemplos coerción explícita: 

var a = 20; 
var b = a + ""; // output = tipo de dato string = 20; 

var c = String(a); // el método string nos permite convertir tipos de datos en strings. 
console.log(typeof c); // convertirmos a la variabla "a" en tipo string. 

var d = Number(c); // el método number nos permite cambiar tipos de datos a números
console.log(d); 
console.log(typeof d) // output = tipo de dato Number 



