import React, { useState } from "react";
import validateUser from "../helpers/validateUser";

export default function FormLogin() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "Debe ingresar un email",
    password: "Debe ingresar una contraseña",
  });

  const handleChange = (event) => {
    // console.log(event.target.name);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validateUser({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //* Petición al Back...
    alert(
      `Request al Back, { username: ${input.username}, password: ${input.password} }`
    );
    setInput({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Formulario en React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          name="username"
          value={input.username}
          placeholder="Ingresa tu nombre..."
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "coral" }}>
          {errors.username ? errors.username : null}
        </span>
        <br />

        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          name="password"
          value={input.password}
          placeholder="Ingresa tu password..."
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "coral" }}>
          {errors.password && errors.password}
        </span>
        <br />

        <input
          type="submit"
          value="Enviar..."
          disabled={errors.username || errors.password}
        />
      </form>
    </div>
  );
}
