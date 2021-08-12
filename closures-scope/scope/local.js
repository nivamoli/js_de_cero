const helloWorld = () => {
    let hola = 'Hello'; // Estas variables únicamente están definidas en el scope local
    let world = 'World';
    const hello = `${hola} ${world}`;
    console.log(hello);
}

helloWorld();

console.log(hola);
// nos da error porque solo podemos acceder a esas variables dentro de su scope local (dentro de la funcion helloWorld)


var scope = 'im Global'; 

const functionScope = () => {
    var scope = 'I am just a local'; // en este caso var scope no se reasigna. únicamente trabaja para este ámbito léxito / scope local.
    const func = () => {
        return scope; 
    }
    console.log(func())
}

functionScope();

console.log(scope); // output = 'im Global';
// la variable scope global sigue teniendo el valor = 'im Global';