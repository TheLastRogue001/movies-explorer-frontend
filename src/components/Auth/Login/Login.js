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
      <label className="sign__title">Рады видеть!</label>
      <form className="sign__form" name="login">
        <div className="sign__components">
          <div className="sign__container">
            <label className="sign__label">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={() => {}}
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
              onChange={() => {}}
              value={formValue.password}
              className="sign__input"
            ></input>
          </div>
        </div>
        <button className="sign__button">Войти</button>
        <div className="sign__register">
          <p className="sign__p">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="sign__link">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
