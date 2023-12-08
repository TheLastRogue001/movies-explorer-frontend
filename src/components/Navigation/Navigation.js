import React, { useState } from "react";
import { IconProfile } from "../../images";
import { Link } from "react-router-dom";
import "./Navigation.css";
// import * as auth from "../utils/auth";

function Navigation({ isOpen, onClose }) {
  const [isClickMain, setIsClickMain] = useState(false);
  const [isClickMovies, setIsClickMovies] = useState(false);
  const [isClickSavedMovies, setIsClickSavedMovies] = useState(false);

  const linkMain = `popup__link ${isClickMain ? "popup__link_active" : ""}`;
  const linkMovies = `popup__link ${isClickMovies ? "popup__link_active" : ""}`;
  const linkSavedMovies = `popup__link ${
    isClickSavedMovies ? "popup__link_active" : ""
  }`;

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_size">
        <div className="popup__links">
          <Link
            onClick={() => {
              setIsClickMain(true);
              setIsClickMovies(false);
              setIsClickSavedMovies(false);
              onClose();
            }}
            className={linkMain}
            to="/"
          >
            Главная
          </Link>
          <Link
            onClick={() => {
              setIsClickMovies(true);
              setIsClickMain(false);
              setIsClickSavedMovies(false);
              onClose();
            }}
            className={linkMovies}
            to="/movies"
          >
            Фильмы
          </Link>
          <Link
            onClick={() => {
              setIsClickSavedMovies(true);
              setIsClickMain(false);
              setIsClickMovies(false);
              onClose();
            }}
            className={linkSavedMovies}
            to="/saved-movies"
          >
            Сохранённые фильмы
          </Link>
        </div>
        <Link
          onClick={() => {
            setIsClickSavedMovies(false);
            setIsClickMain(false);
            setIsClickMovies(false);
            onClose();
          }}
          className="popup__profile"
          to="/profile"
        >
          <h2 className="popup__profile-title">Аккаунт</h2>
          <div className="popup__img-profile">
            <img src={IconProfile} className="popup__img" alt="Профиль" />
          </div>
        </Link>
        <button
          onClick={onClose}
          aria-label="Close"
          type="button"
          className="popup__close"
        ></button>
      </div>
    </div>
  );
}

export default Navigation;
