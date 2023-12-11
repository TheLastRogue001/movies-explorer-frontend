import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../../images";
import "./Register.css";
import { apiMain } from "../../../utils/MainApi";

function Register({ onInfoAuth }) {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFields({ ...fields, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
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
    if (fields.password) {
      apiMain
        .register(fields.name, fields.email, fields.password)
        .then((res) => {
          onInfoAuth(true);
          navigate("/signin", { replace: true });
        })
        .catch((err) => {
          onInfoAuth(false);
        });
    }
    resetForm();
  };

  const navigate = useNavigate();

  return (
    <main className="register">
      <section className="register__container">
        <Link className="register__main" to="/">
          <img className="register__img" src={Logo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form
          className="register__form"
          onSubmit={(e) => contactSubmit(e)}
          name="register"
          noValidate
        >
          <div className="register__components">
            <div className="register__info">
              <label className="register__label">Имя</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                min-length="2"
                max-length="40"
                placeholder="Имя"
                onChange={(e) => handleChange(e)}
                value={fields.name ?? ""}
                className="register__input"
              ></input>
              <span className="register__input-error">{errors.name}</span>
            </div>
            <div className="register__info">
              <label className="register__label">E-mail</label>
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
                className="register__input"
              ></input>
              <span className="register__input-error">{errors.email}</span>
            </div>
            <div className="register__info">
              <label className="register__label">Пароль</label>
              <input
                id="password"
                type="password"
                name="password"
                required
                min-length="8"
                max-length="40"
                placeholder="Пароль"
                onChange={(e) => handleChange(e)}
                value={fields.password ?? ""}
                className="register__input"
              ></input>
              <span className="register__input-error">{errors.password}</span>
            </div>
          </div>
          <button
            id="submit"
            type="submit"
            value="Submit"
            disabled={!isValid}
            className="register__button"
          >
            Зарегистрироваться
          </button>
          <div className="register__signup">
            <p className="register__p">Уже зарегистрированы?</p>
            <Link to="/signin" className="register__link">
              Войти
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Register;
