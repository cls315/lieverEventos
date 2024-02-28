import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import style from "./Login.module.css";

const Login = () => {
  const { loginContainer, loginForm, loginLabel, loginInput, btn } = style;
  return (
    <div>
      <SearchBar />
      <div className={loginContainer}>
        <h1>Iniciar sesion</h1>
        <form className={loginForm}>
          <label htmlFor="email" className={loginLabel}>
            Ingrese su Email
          </label>
          <input type="text" name="email" className={loginInput} />

          <label htmlFor="password" className={loginLabel}>
            Ingrese su contraseña
          </label>
          <input type="text" name="password" className={loginInput} />

          <input type="submit" className={btn} />
        </form>
      </div>
    </div>
  );
};

export default Login;
