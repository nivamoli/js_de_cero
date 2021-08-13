// vamos a crear datos privados, los cuales solo se podrán acceder dentro del closure definida. 

const person = () => {
    var saveName = 'Nicolás'; // esta variable no se puede reasignar en ningún lugar. 
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    };
};

newPerson = person(); 
console.log(newPerson.getName());
newPerson.setName('Camilo'); // podemos reasignar el valor de "saveName" haciendo estos métodos. 
console.log(newPerson.getName());