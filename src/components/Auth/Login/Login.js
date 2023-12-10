import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../../images";
import "./Login.css";
import * as auth from "../../../utils/MainApi";

function Login({ onInfoAuth, handleLogin }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.token) {
          setFormValue({ email: "", password: "" });
          handleLogin(formValue.email);
          navigate("/movies", { replace: true });
        }
      })
      .catch(() => {
        onInfoAuth(false);
      });
  };

  const navigate = useNavigate();

  return (
    <main className="sign">
      <section className="sign__container">
        <Link className="sign__main" to="/">
          <img className="sign__img" src={Logo} alt="Логотип" />
        </Link>
        <h1 className="sign__title">Рады видеть!</h1>
        <form className="sign__form" onSubmit={handleSubmit} name="login">
          <div className="sign__components">
            <div className="sign__info">
              <label className="sign__label">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                min-length="2"
                max-length="40"
                placeholder="E-mail"
                onChange={handleChange}
                value={formValue.email}
                className="sign__input"
              ></input>
              <span className="sign__input-error"></span>
            </div>
            <div className="sign__info">
              <label className="sign__label">Пароль</label>
              <input
                id="password"
                type="password"
                name="password"
                min-length="2"
                max-length="40"
                placeholder="Пароль"
                required
                onChange={handleChange}
                value={formValue.password}
                className="sign__input"
              ></input>
              <span className="sign__input-error"></span>
            </div>
          </div>
          <button onClick={handleSubmit} type="submit" className="sign__button">
            Войти
          </button>
          <div className="sign__register">
            <p className="sign__p">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="sign__link">
              Регистрация
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
