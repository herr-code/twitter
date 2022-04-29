/*
  Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
  Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
  Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
  Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.
*/

const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {
  test('1) Create an user object', () => {
    //Aqui invocas el código que vas a usar en tu app
    const user = new User(1, "carlogilmar", "Carlo", "Bio")
    
    // Aqui validas los resultados de ese código
    // Esta es una comparación que va a igualar el valor dela izquierda con el valor de la derecha (valor esperado)
    expect(user.id).toBe(1);
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.bio).toBe("Bio");
    //Verifica que el valor no sea undefined
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });

  test('2) Add getters', () =>{
    const user = new User(1, "carlogilmar", "Carlo", "Bio")
    expect(user.getUsername()).toBe("carlogilmar");
    expect(user.getBio()).toBe("Bio");
    expect(user.getDateCreated()).not.toBeUndefined();
    expect(user.getLastUpdated()).not.toBeUndefined();
  });
})