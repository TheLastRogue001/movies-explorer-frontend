import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../../images";
import "./Login.css";
import { apiMain } from "../../../utils/MainApi";

function Login({ onInfoAuth, handleLogin }) {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function isValiEmail(val) {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(val);
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const type = target.type;
    setFields({ ...fields, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    const emailValid = type === "email" ? isValiEmail(value) : true;
    if (!emailValid) setErrors({ ...errors, [name]: "Невалидный email" });
    setIsValid(target.closest("form").checkValidity() && emailValid);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setFields(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setFields, setErrors, setIsValid]
  );

  const contactSubmit = (e) => {
    e.preventDefault();

    apiMain
      .authorize(fields.email, fields.password)
      .then((data) => {
        if (data.token) {
          handleLogin();
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
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
        <form
          className="sign__form"
          onSubmit={(e) => contactSubmit(e)}
          name="login"
          noValidate
        >
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
                onChange={(e) => handleChange(e)}
                value={fields.email ?? ""}
                className="sign__input"
              ></input>
              <span className="sign__input-error">{errors.email}</span>
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
                onChange={(e) => handleChange(e)}
                value={fields.password ?? ""}
                className="sign__input"
              ></input>
              <span className="sign__input-error">{errors.password}</span>
            </div>
          </div>
          <button
            id="submit"
            type="submit"
            value="Submit"
            disabled={!isValid}
            className="sign__button"
          >
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
