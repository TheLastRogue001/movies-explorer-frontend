import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../../images";
import "./Register.css";
// import * as auth from "../utils/auth";

function Register() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  return (
    <div className="register">
      <Link className="register__main" to="/">
        <img className="register__img" src={Logo} alt="Logo" />
      </Link>
      <label className="register__title">Добро пожаловать!</label>
      <form className="register__form" name="register">
        <div className="register__components">
          <div className="register__container">
            <label className="register__label">Имя</label>
            <input
              id="name"
              type="name"
              name="name"
              onChange={() => {}}
              value={formValue.name}
              className="register__input"
            ></input>
          </div>
          <div className="register__container">
            <label className="register__label">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={() => {}}
              value={formValue.email}
              className="register__input"
            ></input>
          </div>
          <div className="register__container">
            <label className="register__label">Пароль</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={() => {}}
              value={formValue.password}
              className="register__input"
            ></input>
          </div>
        </div>
        <button className="register__button">Зарегистрироваться</button>
        <div className="register__signup">
          <p className="register__p">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
