// El ciclo for nos permite ejecutar tareas repetitivamente sin hacerlo de forma manual 

var estudiante = [
    'Nicolas',
    'Camilo',
    'Silvio',
    'Camila'
]

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`)
}

for(i = 0; i < estudiante.length; i++) {
    saludarEstudiante(estudiante[i])
}

// forma 2


var alumno = [
    'Nicolas',
    'Camilo',
    'Silvio',
    'Camila'
]

function saludarEstudiante(alumnos) {
    console.log(`Hola ${alumnos}`)
}

for(alumnos of alumno) {
    saludarEstudiante(alumnos)
}
