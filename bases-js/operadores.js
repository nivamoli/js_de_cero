 
 // -- estos operadores también son conocidos como operadores binarios
 
 // suma 

 var suma = 3 + 5;
// el operador + también nos permite concatenar valores (de tipo string). 

 // resta 

 var resta = 7 - 4;

 // multiplicacion 

 var multiplicacion = 7 * 5

 // division 

var division = 20 / 5; 


// negacion 

var negacion = !false // -> Aquí negamos que es falso; 
console.log(negacion); //el output es = true

// asignación 

var asignar = 'el igual (=) nos permite asignar valores'; 

// comparación 

var comparar = 24 == '24'; // aquí no compara el tipo de dato sino el tipo de valor
console.log(comparar); // el output = true

var comparar_estrictamente = 24 === '24'; // con el triple = se compara si es el mismo tipo de dato y valor. 
console.log(comparar_estrictamente); // el output es = false. 

var comparar_mayor = 14 > 5; 
var comparar_menor = 5 < 14;
var mayor_o_igual = 14 >= 10;
var menor_o_igual = 10 <= 14; 
console.log(comparar_mayor);
console.log(comparar_menor);
console.log(mayor_o_igual);
console.log(menor_o_igual);


// validación 

var uno_es_verdadero = a || b; // acá validamos si uno de los 2 es verdadero. (|| equivale a ó)
var dos_son_verdaderos = a && b; // acá validamos si a y b son verdaderos (&& equivale a y)


// incremento 

var edad = 25; 
edad++; // incrementamos la edad + 1
console.log(edad); // output = 26

var edad_incrementada = edad += 2; // podemos incrementar un valor por cualquier número. 
console.log(edad_incrementada); // output = 28; 
