/*
  Sprint 2: Agregar servicios

  Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
  Criterios de aceptación:
  1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
  2. El valor de `bio` deberá ser por default para todos los `user` creados.
  
  Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.  
*/

const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

  test('1) Create a new user using the UserService', () => {
    const user = UserService.create(1, "carlogilmar", "Carlo")
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });

  test('2) Get all user data in a list', () =>{
    const user = UserService.create(1, "carlogilmar", "Carlo")
    const userInfoInList = UserService.getInfo(user)
    expect(userInfoInList[0]).toBe(1);
    expect(userInfoInList[1]).toBe("carlogilmar");
    expect(userInfoInList[2]).toBe("Carlo");
    expect(userInfoInList[3]).toBe("Sin bio");
  });

  // test('3) Add setters', () =>{
  //   const user = new User(1, "carlogilmar", "Carlo", "Bio")
  //   user.setUsername = "Gilmar"
  //   expect(user.username).toBe("Gilmar");
  //   user.setBio = "New Bio"
  //   expect(user.bio).toBe("New Bio");
  // });
})