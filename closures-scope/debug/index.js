var a = 'Hello' // creamos el scope global

function hello() {
    let b = 'Hello World'; 
    const c = 'Hello world!';
    if(true) {
        let d = 'Hello world!!';
        debugger // esto pausa la ejecución de nuestro programa y podemos visualizarlo en las devtools. 
    }
}

hello();


// ----------- 


const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => { 
        debugger
        saveCoins += coins; 
        console.log(`Save Coins: $${saveCoins}`)
    }
    return countCoins;
}

let myMoneyBox = moneyBox(); 

myMoneyBox(5); 
myMoneyBox(7);
myMoneyBox(10);