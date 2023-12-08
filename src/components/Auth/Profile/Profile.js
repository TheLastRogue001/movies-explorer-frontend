import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [name, setName] = useState("Алекс");
  const [disabled, setDisabled] = useState(true);
  const getButtons = () => {
    if (!disabled) {
      return (
        <div className="profile__buttons profile__buttons-save">
          <button
            type="submit"
            onClick={() => {
              setDisabled(true);
            }}
            className="profile__save"
          >
            Сохранить
          </button>
        </div>
      );
    }
    if (disabled) {
      return (
        <div className="profile__buttons">
          <button
            type="button"
            onClick={() => {
              setDisabled(false);
            }}
            className="profile__redit"
          >
            Редактировать
          </button>
          <Link to="/signin" className="profile__exit">
            Выйти из аккаунта
          </Link>
        </div>
      );
    }
  };
  return (
    <main className="profile">
      <section className="profile__container">
        <h1 className="profile__title">Привет, {name}!</h1>
        <div className="profile__name">
          <label className="profile__caption">Имя</label>
          <input
            disabled={disabled}
            placeholder="Алекс"
            min-length="2"
            max-length="40"
            onChange={() => {}}
            className="profile__input"
          />
        </div>
        <div className="profile__email">
          <label className="profile__caption">E-mail</label>
          <input
            disabled={disabled}
            placeholder="sasha0908@mail.ru"
            min-length="2"
            max-length="40"
            onChange={() => {}}
            className="profile__input"
          />
        </div>
        {getButtons()}
      </section>
    </main>
  );
}

export default Profile;
