// perimetro del cuadrado = suma de sus 4 lados
// Área del cuadrado = multiplicar 2 de sus lados. (un lado al cuadrado)
// perímetro del triángulo = Suma de sus 3 lados 
// Área del triángulo = Base * altura / 2
// perímetro del círculo = (Diámetro * PI) Radio -> de la mitad hacia el borde del círculo - Diámetro -> Radio * 2.  
// Área del círculo = Radio al cuadrado * PI.







// Código para el cuadrado:

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









// Código para el triángulo: 

console.group("Triangulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5; 
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; // definimos dentro de paréntesis para que ejecute primero esa operación

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2; 
}

perimetroTriangulo(23, 12, 5);
areaTriangulo(5, 23);

// console.log(
//     `El lado 1 mide: ${ladoTriangulo1}cm, 
//     El lado 2 mide: ${ladoTriangulo2}cm 
//     La base mide: ${baseTriangulo}cm
//     La altura es de: ${alturaTriangulo}cm
//     El perímetro del triángulo es: ${perimetroTriangulo}cm
//     El área del triángulo es de: ${areaTriangulo}cm2`)

console.groupEnd();










// Código para el círculo:

console.group("Círculos")

// const numPi = 3.14; // podemos definirlo manualente ó:
// const pi = Math.PI;
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const perimetroCirculo = diametroCirculo * pi;
// const areaCirculo = radioCirculo ** 2 * pi;

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


// console.log(
//     `El radio del círculo es de: ${radioCirculo}cm, 
//     El diámetro del circulo es de: ${diametroCirculo}cm 
//     El perímetro del círculo es de: ${perimetroCirculo}
//     El área del circulo es de: ${areaCirculo}cm2`)

console.groupEnd();