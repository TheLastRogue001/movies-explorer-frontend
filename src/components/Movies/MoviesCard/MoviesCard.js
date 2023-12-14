import React, { useEffect, useState } from "react";
import "./MoviesCard.css";

const MoviesCard = ({ info, onMoviesLike, newMovies, onRemoveMovies }) => {
  const [IsLiked, setIsLiked] = useState(false);
  const moviesLikeButton = `movies__like ${
    IsLiked ? "movies__like_active" : ""
  }`;

  // useEffect(() => {
  //   window.localStorage.setItem("like", IsLiked);
  // }, [IsLiked]);

  // useEffect(() => {
  //   setIsLiked(window.localStorage.getItem("like"));
  // }, []);

  const thumbnail = `https://api.nomoreparties.co/${info?.image.formats.thumbnail.url}`;
  const image = `https://api.nomoreparties.co/${info?.image.url}`;

  const handleLikeClick = () => {
    setIsLiked(!IsLiked);
    if (!IsLiked) {
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
    }
    if (IsLiked) {
      onRemoveMovies(newMovies._id);
    }
  };

  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${hours}ч ${minutes}м`;
  }

  return (
    <li className="movies__card">
      <a href={info?.trailerLink} rel="noreferrer" target="_blank">
        <img src={image} alt="Фильм" className="movies__img" />
      </a>
      <div className="movies__info_like">
        <h2 className="movies__title">{info?.nameRU || info?.nameEN}</h2>
        <div className="movies__content">
          <button
            type="button"
            aria-label="Нравится"
            onClick={handleLikeClick}
            className={moviesLikeButton}
          />
        </div>
        <label className="movies__time_like">
          {toHoursAndMinutes(info?.duration)}
        </label>
      </div>
    </li>
  );
};

export default MoviesCard;
