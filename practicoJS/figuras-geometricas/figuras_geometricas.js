// perimetro del cuadrado = suma de sus 4 lados
// Área del cuadrado = multiplicar 2 de sus lados. (un lado al cuadrado)
// perímetro del triángulo = Suma de sus 3 lados 
// Área del triángulo = Base * altura / 2
// perímetro del círculo = (Diámetro * PI) Radio -> de la mitad hacia el borde del círculo - Diámetro -> Radio * 2.  
// Área del círculo = Radio al cuadrado * PI.

// Código para el cuadrado:

console.group("Cuadrados")

const ladoCuadrado = 5; 
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)

const perimetroCuadrado = ladoCuadrado * 4; 
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado; 
console.log(`El area del cuadrado es: ${areaCuadrado}cm2`);

console.groupEnd();

// Código para el triángulo: 

console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; 
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; // definimos dentro de paréntesis para que ejecute primero esa operación

console.log(
    `El lado 1 mide: ${ladoTriangulo1}cm, 
    El lado 2 mide: ${ladoTriangulo2}cm 
    La base mide: ${baseTriangulo}cm
    La altura es de: ${alturaTriangulo}cm
    El perímetro del triángulo es: ${perimetroTriangulo}cm
    El área del triángulo es de: ${areaTriangulo}cm2`)

console.groupEnd();


// Código para el círculo:

console.group("Círculos")

// const numPi = 3.14; // podemos definirlo manualente ó:
const pi = Math.PI;
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const perimetroCirculo = diametroCirculo * pi;
const areaCirculo = radioCirculo ** 2 * pi;

console.log(
    `El radio del círculo es de: ${radioCirculo}cm, 
    El diámetro del circulo es de: ${diametroCirculo}cm 
    El perímetro del círculo es de: ${perimetroCirculo}
    El área del circulo es de: ${areaCirculo}cm2`)

console.groupEnd();