// perimetro del cuadrado = suma de sus 4 lados
// Área del cuadrado = multiplicar 2 de sus lados. (un lado al cuadrado)
// perímetro del triángulo = Suma de sus 3 lados 
// Área del triángulo = Base * altura / 2
// perímetro del círculo = (Diámetro * PI) Radio -> de la mitad hacia el borde del círculo - Diámetro -> Radio * 2.  
// Área del círculo = Radio al cuadrado * PI.


// ------------ Código para el cuadrado:

console.group("Cuadrados")

// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)

function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado(lado) {
    return lado * lado;
}

perimetroCuadrado(56);
// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`)

areaCuadrado(56);

// console.log(`El area del cuadrado es: ${areaCuadrado}cm2`);

console.groupEnd();


//------------- Código para el triángulo: 

console.group("Triangulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5; 
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; // definimos dentro de paréntesis para que ejecute primero esa operación

function perimetroTriangulo(lado1, lado2, base) {
    suma = lado1 + lado2 + base;
    console.log(typeof suma);
    console.log(suma);
    return suma;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2; 
}

// console.log(
//     `El lado 1 mide: ${ladoTriangulo1}cm, 
//     El lado 2 mide: ${ladoTriangulo2}cm 
//     La base mide: ${baseTriangulo}cm
//     La altura es de: ${alturaTriangulo}cm
//     El perímetro del triángulo es: ${perimetroTriangulo}cm
//     El área del triángulo es de: ${areaTriangulo}cm2`)

console.groupEnd();


// ------------ Código para el círculo:

console.group("Círculos")

// const numPi = 3.14; // podemos definirlo manualente ó:
// const pi = Math.PI;
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const perimetroCirculo = diametroCirculo * pi;
// const areaCirculo = radioCirculo ** 2 * pi;



// console.log(
//     `El radio del círculo es de: ${radioCirculo}cm, 
//     El diámetro del circulo es de: ${diametroCirculo}cm 
//     El perímetro del círculo es de: ${perimetroCirculo}
//     El área del circulo es de: ${areaCirculo}cm2`)

console.groupEnd();


// interactuar con HTML 


// ------------ cuadrado:

function calcularPerimetroCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const valor = input.value
    const perimetro = perimetroCuadrado(valor);
    alert(`El perímetro del cuadrado es: ${perimetro}`)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const valor = input.value; 
    const area = areaCuadrado(valor); 
    alert(`El Área del cuadrado es: ${area}`);
}


// ------------ Triángulo:

// perímetro del triángulo = Suma de sus 3 lados
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("lado-triangulo-1");
    const lado1 = Number(input1.value);
    const input2 = document.getElementById("lado-triangulo-2")
    const lado2 = Number(input2.value); 
    const base = document.getElementById("base-triangulo");
    const baseT = Number(base.value); 
    const perimetro = perimetroTriangulo(lado1, lado2, baseT);
    alert(`El perimetro del triangulo es: ${Number(perimetro)}`)
} 

// Área del triángulo = Base * altura / 2
function calcularAreaTriangulo() {
    const base = document.getElementById("base-triangulo");
    const baseT = base.value; 
    const altura = document.getElementById("altura-triangulo");
    const alturaT = altura.value;
    const areaDelTriangulo = areaTriangulo(baseT, alturaT)
    alert(`El Área del triangulo es: ${areaDelTriangulo}`) 
}


// ------------ Círculo:

const pi = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    //diametro = radio * 2; // en lugar de repetir la formula para calcular el radio: llamamos la funcion
    const diametro = diametroCirculo(radio); 
    return diametro * pi;
}

function areaCirculo(radio) {
    return (radio ** 2) * pi
}

// diametro = radioCirculo * 2;
// Área del círculo = Radio al cuadrado * PI.

function calcularDiametroCirculo() {
    const radio = document.getElementById("radio-circulo");
    const valor = radio.value;
    const diametro = diametroCirculo(valor);
    alert(`El diámetro del circulo es: ${diametro}`)
}


// perímetro del círculo = (Diámetro * PI)  
function calcularPerimetroCirculo() {
    const pi = Math.PI;
    const inputDiametro = document.getElementById("diametro-circulo")
    const valorDiametro = inputDiametro.value;
    const perimetro = valorDiametro * pi;
    alert(`El perímetro del circulo es: ${perimetro}`)
}

// Área del círculo = Radio al cuadrado * PI.

function calcularAreaCirculo() {
    const radio = document.getElementById("radio-circulo");
    const valor = radio.value;
    const areaCir = areaCirculo(valor); 
    alert(`El area del circulo es: ${areaCir}`)
}


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 77004a168ddb496cb78e672116a6351d0f89cc85



// Calcular altura triángulo isóceles

// Math.sqrt(a**2 - b / 2 ** 2)


function ladosTrianguloIsoc(ladoa, ladob, ladoc) {
    if(ladoa === ladob) {
        resultado = ladoa + ladob + ladoc; 
        console.log(`La suma de sus lados es: ${Number(resultado)}`);
    } else if(ladob === ladoc) {
        resultado = ladoa + ladob + ladoc; 
        console.log(`La suma de sus lados es: ${Number(resultado)}`);
    } else if(ladoa == ladoc) {
        resultado = ladoa + ladob + ladoc; 
        console.log(`La suma de sus lados es: ${Number(resultado)}`);
    } else {
        console.log('No es un triángulo isóceles')
    }
}

function alturaIsoc(ladoa, ladob, ladoc) {
    ladosTrianguloIsoc(ladoa, ladob, ladoc);
    const altura = Math.sqrt(ladoa ** 2 - ladob ** 2 / 4);
    console.log(altura);
}

alturaIsoc(20, 20, 10);
<<<<<<< HEAD
=======
=======
>>>>>>> 8654b10e6a48f2a80fae935d42804df98822f88c
>>>>>>> 77004a168ddb496cb78e672116a6351d0f89cc85
