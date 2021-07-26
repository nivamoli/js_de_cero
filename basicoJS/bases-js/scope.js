// Es el alcance que tienen las variables 
// depende mucho de donde definamos una variable para saber si tendremos acceso a ella o no

var nombre = 'Scope Global'; 

// este es el scope global 
// aquí existen todas las funciones y variables a definir. 

function scopeLocal() {
    var apellido = "Scope local" // El interior de esta función es un Scope local.
    // solo se puede acceder a esa variable dentro de esta función. 
    console.log(`${nombre} ${apellido}`); // En un scope local podemos acceder a las variables que estén en el scope global. 
}

console.log(nombre); // output = var nombre equivale a Scope Global. 
scopeLocal(); 

console.log(apellido); // en el scope global no podemos acceder a apellido porque está definida en un scope local. 
// output = undefined - is not defined.






