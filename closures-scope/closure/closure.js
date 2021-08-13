const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins; 
    console.log(moneyBox(`Money Box: $${saveCoins}`));
}

console.log(moneyBox(5));
console.log(moneyBox(10));
//esto no es un closure.
// en este caso me imprime 5 y 10 por lo que no me esta guardando el valor 15.


// creando una estructura de closure: 

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => { // esta función recuerda la asignación del valor anterior 
        saveCoins += coins; 
        console.log(`Save Coins: $${saveCoins}`)
    }
    return countCoins;
}

let myMoneyBox = moneyBox(); 

myMoneyBox(5); // imprime 5 y queda en la memoria. 
myMoneyBox(7); // output = 12 -> al pasarle un nuevo valor suma el valor que ya tenía (5) y le suma el 7 y lo guarda;
myMoneyBox(10); // output = 22 -> suma el 12 que ya tenía y le suma el 10 
