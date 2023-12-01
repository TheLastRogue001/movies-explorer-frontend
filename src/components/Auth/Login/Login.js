import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../../images";
import "./Login.css";
// import * as auth from "../utils/auth";

function Login() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  return (
    <div className="sign">
      <Link className="sign__main" to="/">
        <img className="sign__img" src={Logo} alt="Logo" />
      </Link>
      <caption className="sign__title">Рады видеть!</caption>
      <form className="sign__form" name="login">
        <div className="sign__components">
          <div className="sign__container">
            <label className="sign__label">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formValue.email}
              className="sign__input"
            ></input>
          </div>
          <div className="sign__container">
            <label className="sign__label">Пароль</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formValue.password}
              className="sign__input"
            ></input>
          </div>
        </div>
        <button className="sign__button">
          Войти
        </button>
        <div className="sign__register">
          <caption className="sign__caption">Ещё не зарегистрированы?</caption>
          <Link to="/signup" className="sign__link">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
