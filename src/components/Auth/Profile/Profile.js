import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import "./Profile.css";

function Profile({ onExitClick, onUpdateUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser?.name);
    setEmail(currentUser?.email);
  }, [currentUser]);

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser({
      name,
      email,
    });
  };

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
          <Link to="/signin" onClick={onExitClick} className="profile__exit">
            Выйти из аккаунта
          </Link>
        </div>
      );
    }
  };
  return (
    <main className="profile">
      <section className="profile__container">
        <form className="profile__form" onSubmit={handleSubmit} name="edit">
          <h1 className="profile__title">Привет, {currentUser?.name}!</h1>
          <div className="profile__name">
            <label className="profile__caption">Имя</label>
            <input
              disabled={disabled}
              placeholder={name}
              min-length="2"
              max-length="40"
              onChange={handleSetName}
              className="profile__input"
            />
          </div>
          <div className="profile__email">
            <label className="profile__caption">E-mail</label>
            <input
              disabled={disabled}
              placeholder={email}
              min-length="2"
              max-length="40"
              onChange={handleSetEmail}
              className="profile__input"
            />
          </div>
          {getButtons()}
        </form>
      </section>
    </main>
  );
}

export default Profile;
