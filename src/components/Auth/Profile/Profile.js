import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import "./Profile.css";

function Profile({ onExitClick, onUpdateUser, onInfoProfile }) {
  const [disabled, setDisabled] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const currentUser = useContext(CurrentUserContext);

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
    setDisabled(true);

    onUpdateUser({
      name: fields.name,
      email: fields.email,
    });

    resetForm();
  };

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
              placeholder={fields.name ?? ""}
              min-length="2"
              max-length="40"
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
              placeholder={fields.email ?? ""}
              min-length="2"
              max-length="40"
              required
              onChange={(e) => handleChange(e)}
              className="profile__input"
            />
          </div>
          <span className="profile__input-error">{errors.email}</span>
          {disabled ? (
            <div className="profile__buttons">
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
                to="/signin"
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
                disabled={!isValid}
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
