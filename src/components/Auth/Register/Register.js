import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../../images";
import "./Register.css";
import * as auth from "../../../utils/MainApi";

function Register({ onInfoAuth }) {
  const [formValue, setFormValue] = useState({
    name: "",
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
    if (formValue.password) {
      auth
        .register(formValue.name, formValue.email, formValue.password)
        .then((res) => {
          onInfoAuth(true);
          navigate("/signin", { replace: true });
        })
        .catch((err) => {
          if (err) onInfoAuth(false);
        });
    }
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
          onSubmit={handleSubmit}
          name="register"
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
                onChange={handleChange}
                value={formValue.name}
                className="register__input"
              ></input>
              <span className="register__input-error"></span>
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
                onChange={handleChange}
                value={formValue.email}
                className="register__input"
              ></input>
              <span className="register__input-error"></span>
            </div>
            <div className="register__info">
              <label className="register__label">Пароль</label>
              <input
                id="password"
                type="password"
                name="password"
                required
                min-length="2"
                max-length="40"
                placeholder="Пароль"
                onChange={handleChange}
                value={formValue.password}
                className="register__input"
              ></input>
              <span className="register__input-error"></span>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
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
