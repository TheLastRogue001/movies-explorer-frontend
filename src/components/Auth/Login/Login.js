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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  return (
    <main className="sign">
      <Link className="sign__main" to="/">
        <img className="sign__img" src={Logo} alt="Логотип" />
      </Link>
      <h1 className="sign__title">Рады видеть!</h1>
      <form className="sign__form" name="login">
        <div className="sign__components">
          <div className="sign__container">
            <label className="sign__label">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="E-mail"
              onChange={handleChange}
              value={formValue.email}
              className="sign__input"
            ></input>
            <span className="sign__input-error"></span>
          </div>
          <div className="sign__container">
            <label className="sign__label">Пароль</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Пароль"
              required
              onChange={handleChange}
              value={formValue.password}
              className="sign__input"
            ></input>
            <span className="sign__input-error"></span>
          </div>
        </div>
        <button type="submit" className="sign__button">
          Войти
        </button>
        <div className="sign__register">
          <p className="sign__p">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="sign__link">
            Регистрация
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
