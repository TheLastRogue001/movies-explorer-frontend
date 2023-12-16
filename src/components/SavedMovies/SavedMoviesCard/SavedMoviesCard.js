import React from "react";
import { apiMain } from "../../../utils/MainApi";
import "./SavedMoviesCard.css";

const SavedMoviesCard = ({
  movies,
  setFilteredMovies,
  filteredMovies,
  setSavedMovies,
}) => {
  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${hours}ч ${minutes}м`;
  }

  const handleClickRemove = () => {
    for (let removeMovies of filteredMovies)
      if (removeMovies._id === movies._id)
        apiMain
          .deleteMovies(removeMovies._id)
          .then((removeMovies) => {
            const movies = filteredMovies.filter(
              (item) => item._id !== removeMovies._id
            );
            setFilteredMovies(movies);
            setSavedMovies(movies);
          })
          .catch((err) => {
            console.log(`Возникла ошибка при удалении карточки: ${err}`);
          });
  };

  return (
    <li className="movies__card">
      <a href={movies?.trailerLink} rel="noreferrer" target="_blank">
        <img src={movies?.image} alt="Фильм" className="movies__img" />
      </a>
      <div className="movies__info">
        <div className="movies__content">
          <h2 className="movies__title">{movies?.nameRU || movies?.nameEN}</h2>
          <button
            type="button"
            aria-label="Удалить"
            onClick={handleClickRemove}
            className="movies__remove"
          />
        </div>
      </div>
      <label className="movies__time">
        {toHoursAndMinutes(movies?.duration)}
      </label>
    </li>
  );
};

export default SavedMoviesCard;
