export default function validateUser({ username, password }) {

  const emailRegExp = /\S+@\S+\.\S+/;
  const errors = {};

  if(!username) {
    errors.username = "Debe ingresar un email"
  } else {
    if(username.length < 5) errors.username = "Username de al menos 5 caracteres";
    if(username.length > 50) errors.username = "Username de máximo 50 caracteres";
    if(!emailRegExp.test(username)) errors.username = "Username debe ser un email";
  }

  if(!password) {
    errors.password = "Debe ingresar una contraseña"
  } else {
    if(password.length < 4) errors.password = "Password de al menos 4 caracteres";
    if(password.length > 10) errors.password = "Password de máximo 10 caracteres";
  }

  return errors;
}

// console.log(validateUser({
//   username: "ariel@gmail.com",
//   password: "1234",
// }));