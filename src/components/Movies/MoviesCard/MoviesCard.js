import React, { useState } from "react";
import "./MoviesCard.css";

const MoviesCard = ({ info, remove, onMoviesLike }) => {
  const [IsLiked, setIsLiked] = useState(false);
  const moviesLikeButton = `movies__like ${
    IsLiked ? "movies__like_active" : ""
  }`;

  const thumbnail = `https://api.nomoreparties.co/${info?.image.formats.thumbnail.url}`;
  const image = `https://api.nomoreparties.co/${info?.image.url}`;

  const handleLikeClick = () => {
    console.log(info);
    setIsLiked(!IsLiked);
    onMoviesLike(
      info.country,
      info.director,
      info.duration,
      info.year,
      info.description,
      image,
      info.trailerLink,
      thumbnail,
      info.id,
      info.nameEn,
      info.nameRU
    );
  };

  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${hours}ч ${minutes}м`;
  }

  const getButton = () => {
    if (remove) {
      return (
        <button type="button" aria-label="Удалить" className="movies__remove" />
      );
    }
    return (
      <button
        type="button"
        aria-label="Нравится"
        onClick={handleLikeClick}
        className={moviesLikeButton}
      />
    );
  };
  return (
    <li className="movies__card">
      <a href={info?.trailerLink} target="_blank">
        <img src={image} alt="Фильм" className="movies__img" />
      </a>
      <div className="movies__info">
        <h2 className="movies__title">{info?.nameRU || info?.nameEN}</h2>
        <div className="movies__content">{getButton()}</div>
        <label className="movies__time">
          {toHoursAndMinutes(info?.duration)}
        </label>
      </div>
    </li>
  );
};

export default MoviesCard;
