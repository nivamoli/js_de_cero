// bloques son = {} pueden ser if, otras funciones, etc..

const fruits = () => { // esto es un bloque de función.
    if(true) { // esto es un bloque de una condición.
        var fruit1 = 'Apple';
        let fruit2 = 'Orange';
        const fruit3 = 'Banana';
        // si llamamos acá las variables definidas con let y const si podemos acceder normalmente. 
    }
    console.log(fruit1); // con var podemos acceder a esas variables dentro de un scope de función
    console.log(fruit2); // (undefined) nos sale reference error porque se están llamando dentro de otro bloque. 
    console.log(fruit3); // (undefined) nos sale reference error porque se están llamando dentro de otro bloque. 
}

fruits();



// en este caso cada "let x" esta definido en su propio scope por lo que me imprime los 2 valores
let x = 1; 
{
    let x = 2; // output 2
    console.log(x)
};

console.log(x); // output 1


// en este caso con var la variable es reasignada por lo que me imprime el mismo número

var y = 1; 
{   
    var y = 2; // output 2 -> Aquí y ya fue reasignada por 2 por los 2 console.log imprimen lo mismo.
    console.log(y);
}
console.log(y); // output2


const anotherFunction = () => {
    for(var i = 0; i < 10; i++) { // al definirla con var el ciclo hace todo el recorrido y como el último valor que definió para i es 10, me imprime 10, 10 veces.
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}
// si definimos i con let si va a tomar los valores diferentes:
// output: 0, 1, 2, 3, etc.., 9; 

anotherFunction();