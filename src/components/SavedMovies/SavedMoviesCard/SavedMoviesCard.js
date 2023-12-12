import React, { useState } from "react";
import "./SavedMoviesCard.css";

const SavedMoviesCard = ({ movies, onClickRemove }) => {
  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${hours}ч ${minutes}м`;
  }

  const handleClickRemove = () => {
    onClickRemove(movies?._id);
  };

  return (
    <li className="movies__card">
      <a href={movies?.trailerLink} rel="noreferrer" target="_blank">
        <img src={movies?.image} alt="Фильм" className="movies__img" />
      </a>
      <div className="movies__info">
        <h2 className="movies__title">{movies?.nameRU || movies?.nameEN}</h2>
        <div className="movies__content">
          <button
            type="button"
            aria-label="Удалить"
            onClick={handleClickRemove}
            className="movies__remove"
          />
        </div>
        <label className="movies__time">
          {toHoursAndMinutes(movies?.duration)}
        </label>
      </div>
    </li>
  );
};

export default SavedMoviesCard;