import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import "./Profile.css";

function Profile({ onExitClick, onUpdateUser }) {
  const [disabled, setDisabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [IsInfo, setIsInfo] = useState(false);

  const currentUser = useContext(CurrentUserContext);

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
    setDisabled(true);

    onUpdateUser({
      name: fields.name,
      email: fields.email,
    });
  };

  const textInfo = `profile__p ${IsInfo ? "" : "profile__p_disabled"}`;

  useEffect(() => {
    setButtonDisabled(
      fields.name === currentUser?.name && fields.email === currentUser?.email
    );
  });

  useEffect(() => {
    setFields({
      name: currentUser?.name,
      email: currentUser?.email,
    });
  }, [currentUser]);

  return (
    <main className="profile">
      <section className="profile__container">
        <form
          className="profile__form"
          onSubmit={(e) => contactSubmit(e)}
          name="edit"
          noValidate
        >
          <h1 className="profile__title">Привет, {fields?.name}!</h1>
          <div className="profile__name">
            <label className="profile__caption">Имя</label>
            <input
              id="name"
              type="text"
              name="name"
              disabled={disabled}
              placeholder=""
              min-length="2"
              max-length="40"
              value={fields.name ?? ""}
              required
              onChange={(e) => handleChange(e)}
              className="profile__input"
            />
          </div>
          <span className="profile__input-error">{errors.name}</span>
          <div className="profile__email">
            <label className="profile__caption">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              disabled={disabled}
              placeholder=""
              min-length="2"
              max-length="40"
              value={fields.email ?? ""}
              required
              onChange={(e) => handleChange(e)}
              className="profile__input"
            />
          </div>
          <span className="profile__input-error">{errors.email}</span>
          {disabled ? (
            <div className="profile__buttons">
              <p className={textInfo}>Данные были сохранены</p>
              <button
                type="button"
                onClick={(e) => {
                  setDisabled(false);
                  e.preventDefault();
                }}
                className="profile__redit"
              >
                Редактировать
              </button>
              <Link
                to="/"
                onClick={onExitClick}
                className="profile__exit"
              >
                Выйти из аккаунта
              </Link>
            </div>
          ) : (
            <div className="profile__buttons profile__buttons-save">
              <button
                id="submit"
                type="submit"
                value="Submit"
                disabled={!isValid || buttonDisabled}
                onClick={() => {
                  setTimeout(() => {
                    setIsInfo(false);
                  }, 5000);
                  setIsInfo(true);
                }}
                className="profile__save"
              >
                Сохранить
              </button>
            </div>
          )}
        </form>
      </section>
    </main>
  );
}

export default Profile;
