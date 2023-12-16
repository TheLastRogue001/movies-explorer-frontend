import React, { useContext, useEffect, useState } from "react";
import { apiMain } from "../../../utils/MainApi";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

import "./MoviesCard.css";

const MoviesCard = ({
  info,
  setAllMovies,
  setFilteredMovies,
  filteredMovies,
}) => {
  const [likedMovies, setLikedMovies] = useState([]);
  const [createMovies, setCreateMoves] = useState({});

  const currentUser = useContext(CurrentUserContext);

  function isLiked(item) {
    for (const linked of likedMovies) {
      if (linked.movieId === item.id) {
        return true;
      }
    }
    return false;
  }

  const moviesLikeButton = `movies__like ${
    isLiked(info) ? "movies__like_active" : ""
  }`;

  useEffect(() => {
    apiMain.getMovies().then((moviesData) => {
      const movies = moviesData
        .filter((item) => item.owner === currentUser?._id)
        .map((movies) => {
          if (movies.owner === currentUser?._id) {
            return movies;
          }
        });
      setLikedMovies(movies);
    });
  }, [createMovies]);

  const thumbnail = `https://api.nomoreparties.co/${info?.image.formats.thumbnail.url}`;
  const image = `https://api.nomoreparties.co/${info?.image.url}`;

  const handleLikeClick = () => {
    if (isLiked(info)) {
      for (let linked of likedMovies)
        if (info.id === linked.movieId) {
          apiMain
            .deleteMovies(linked._id)
            .then((removeMovies) => {
              const movies = filteredMovies.filter(
                (item) => item._id !== removeMovies._id
              );
              console.log(movies);
              setFilteredMovies(movies);
              setAllMovies(movies);
              setLikedMovies(movies);
            })
            .catch((err) => {
              console.log(`Возникла ошибка при удалении карточки: ${err}`);
            });
        }
    }
    if (isLiked(info) === false) {
      apiMain
        .createMovies(
          info.country,
          info.director,
          info.duration,
          info.year,
          info.description,
          image,
          info.trailerLink,
          thumbnail,
          info.id,
          info.nameRU,
          info.nameEN
        )
        .then((newMovies) => {
          setCreateMoves(newMovies);
        })
        .catch((err) => {
          console.log(`Возникла ошибка с лайками: ${err}`);
        });
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
