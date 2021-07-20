// En javascript hay tipos de valores verdaderos y falsos

// ---- valores por default falsos:

var bolean_vacio = false; // un booleano vacío es falso
console.log(Boolean()); // output = false
console.log(Boolean(0)) // output = false

var nul = false; 
console.log(Boolean(null)); // output = false

var not_a_number = false; 
console.log(Boolean(NaN)); // output = false

var no_definido = false; 
console.log(Boolean(undefined)); // output = false

var falso = false; 
console.log(Boolean(false)); // output = false

var string_vacio = false; 
console.log(Boolean("")); // output = false




// ---- valores por default verdaderos: 

var bolean_con_valor = true; // 
console.log(Boolean(1)) // output = true -> tanto valores positivos como negativos 

var string_completo = true; // con mínimo una letra ya es verdadero
console.log(Boolean("1"));

var arr = true; // 
console.log(Boolean([])); // así este vacío ya es verdadero

var obj = true; // 
console.log(Boolean({})); // así este vacío ya es verdadero

var func = true; 
console.log(Boolean(function() {})) // así este vacía es verdadero

var verdadero = true; 
console.log(Boolean(true)); // output = true; 