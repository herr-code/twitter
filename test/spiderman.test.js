/*
  Requerimiento 1
  Crea una clase spiderman que tenga como atributos los siguientes campos: 

  nombre, edad, actor que lo interpretó, número de películas en las que apareció, estudio de cine.

  Requerimiento 2
  Queremos usar un método que nos regrese la siguiente información: nombre y estudio al que pertenece el spiderman instanciado.

  Ejemplo:

  tomHolland.getInfo() // esto necesita regresar: "Hey, I'm Tom Holland from Marvel studio"

*/

const Spiderman = require('./../app/spiderman')

describe("Unit Tests for Spiderman class", () => {
  test('1) Create an spiderman object', () => {
    //Aqui escribimos el código que queremos usar tal cuál 
    //Quiero poder instanciar un objeto Spiderman con esta información
    const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(2);
    expect(andrewGarfield.studio).toBe("Sony");
  });

  test('2) Use the method getInfo()', () =>{
    const tomHolland= new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
  });
})