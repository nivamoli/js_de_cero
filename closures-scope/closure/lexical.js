// aquí vamos a asignar y a raasignar valores y a construir nuevos elementos a partir de este. 
// podemos ver como recuerdan el valor que le estamos definiendo.

const buildCount = (i) => {
    let count = i; // a este valor podemos acceder dentro de la función que definimos abajo. 
    const displayCount = () => { // esta función es el closure. 
        console.log(count++) // el ámbito léxico es las funciones que se ejecutan utilizando la cadena del alcance donde estaban vigentes en su momento. 
    };
    return displayCount;
}

const myCount = buildCount(1);
myCount(); // imprime 1 y recuerda ese valor
myCount(); // retorna el 2 y recuerda ese valor
myCount(); // retorna 3 y recuerda el valor.

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
