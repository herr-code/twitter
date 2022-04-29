/*
  Sprint 3: Agregar vistas

  Requerimientos:

  1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
  2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
  3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.
  4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.
*/

const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {

  test('1) Return an error object when try to create a new user with an null payload', () => {
    const payload = null
    const result = UserView.createUser(payload)
    
    expect(result.error).toMatch(/payload no existe/);
  });

  test('2) Return an error object when try to create a new user with a payload with invalid properties', () =>{
    const payload = { username: null, name: 12, id: "id" }
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor válido/);
  });

  // test('3) Update username', () =>{
  //   const user = UserService.create(1, "carlogilmar", "Carlo")
  //   UserService.updateUserUsername(user, "carlog")
  //   expect(user.username).toBe("carlog");
  // });
  
  // test('4) Given a list of users give me the list of usernames', () =>{
  //   const user1 = UserService.create(1, "carlogilmar1", "Carlo")
  //   const user2 = UserService.create(1, "carlogilmar2", "Carlo")
  //   const user3 = UserService.create(1, "carlogilmar3", "Carlo")
  //   const usernames = UserService.getAllUsernames([user1, user2, user3])

  //   expect(usernames).toContain("carlogilmar1");
  //   expect(usernames).toContain("carlogilmar2");
  //   expect(usernames).toContain("carlogilmar3");
  // });
})