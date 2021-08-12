const fruits = () => {
    let fruit = 'Apple';
    console.log(fruit); // a fruit solo se puede acceder dentro de este scope de función.
}

fruits();

console.log(fruit);
// no esta global por lo tanto sale undefined. 


const anotherFunction = () => {
    var x = 1; // var ya es obsoleto, es preferiblemente no llamar a nuestras variables con var.
    var x = 2; // var si se puede reasignar por lo que el valor queda = 2;
    let y = 1;
    let y = 2; // let no puede ser reasignada
    console.log(x);
    console.log(y); // output = Y ya ha sido declarada 1 vez por lo que da error.
}

anotherFunction();

