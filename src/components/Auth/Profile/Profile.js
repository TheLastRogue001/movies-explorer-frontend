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
            onClick={() => {
              setDisabled(true);
            }}
            className="profile__save"
          >Сохранить</button>
        </div>
      );
    }
    if (disabled) {
      return (
        <div className="profile__buttons">
          <button
            onClick={() => {
              setDisabled(false);
            }}
            className="profile__redit"
          >
            Редактировать
          </button>
          <button className="profile__exit">Выйти из аккаунта</button>
        </div>
      );
    }
  };
  return (
    <div className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, {name}!</h1>
        <div className="profile__name">
          <caption className="profile__caption">Имя</caption>
          <input
            disabled={disabled}
            placeholder="Алекс"
            className="profile__input"
          />
        </div>
        <div className="profile__email">
          <caption className="profile__caption">E-mail</caption>
          <input
            disabled={disabled}
            placeholder="sasha0908@mail.ru"
            className="profile__input"
          />
        </div>
        {getButtons()}
      </div>
    </div>
  );
}

export default Profile;
