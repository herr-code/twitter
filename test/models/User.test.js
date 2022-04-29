/*
  Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
  Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
*/

const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {
  test('1) Create an user object', () => {
    //Aqui invocas el código que vas a usar en tu app
    const user = new User(1, "carogilmar", "Carlo", "Bio")
    
    // Aqui validas los resultados de ese código
    // Esta es una comparación que va a igualar el valor dela izquierda con el valor de la derecha (valor esperado)
    expect(user.id).toBe(1);
    expect(user.username).toBe("carogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.bio).toBe("Bio");
    //Verifica que el valor no sea undefined
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });

  // test('2) Use the method getInfo()', () =>{
  //   const tomHolland= new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
  //   expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
  // });
})