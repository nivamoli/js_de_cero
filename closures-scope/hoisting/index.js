// ejemplo 1

a = 2; 
var a; // automáticamente esta declaración sube al tope (hoisting) todo el código por lo que encuentra el valor 2 normal.
console.log(a); // 2 


// ejemplo 2 

console.log(b); // en este caso nos genera un error y es que la variable b no está definida. 
var b = 2; 

// ejemplo 3 

function nameOfDog(name) {
    console.log(name)
}

nameOfDog('Tomás'); // se imprime normalmente el nombre.

// -------- 

nameOfDog('Tomás'); // también se imprime normalmente el nombre.

function nameOfDog(name) { // Javascript aplica hoisting a esta función por lo que se eleva al tope del código y lo ejecuta normalmente.
    console.log(name) 
}

