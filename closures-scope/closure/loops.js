// podemos crear closures de distintas formas y tambien de forma involuntaria. 
// es decir no tener control de lo que estamos creando. 

const anotherFunction = () => {
    for(var i = 0; i < 10; i++) { // en este closure estamos guardando el último valor de i que es 10 por lo que lo imprime las veces solicitadas (10)
        setTimeout(() => { // este es un closure creado de forma involuntaria por lo que hay que tener cuidado con esto. 
            console.log(i);
        }, 1000)
    }
}



// con let nosotros rompemos ese ciclo que ya no está accediendo a ese valor sino por medio del bloque. 

// aquí vemos el ámbito de bloque y el closure trabajando juntos. 
const anotherFunction = () => {
    for(let i = 0; i < 10; i++) { // en este closure estamos guardando el último valor de i que es 10 por lo que lo imprime las veces solicitadas (10)
        setTimeout(() => { // este es un closure creado de forma involuntaria por lo que hay que tener cuidado con esto. 
            console.log(i);
        }, 1000)
    }
}