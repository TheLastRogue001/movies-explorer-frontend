import React, { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { apiMain } from "../../utils/MainApi";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import SavedMoviesCard from "../SavedMovies/SavedMoviesCard/SavedMoviesCard";
import "./SavedMovies.css";

function SavedMovies({
  savedMovies,
  onRemoveMovies,
  setSavedMovies,
  isMoviesLoaded,
}) {
  const [short, setShort] = useState(false);
  const [search, setSearch] = useState("");

  let [filteredMovies, setFilteredMovies] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  const handleSearchMovies = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckbox = (e) => {
    setShort(e.target.checked);
  };

  useEffect(() => {
    let filtered = savedMovies;

    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(
        (moviesSearch) =>
          moviesSearch.nameRU.toLowerCase().includes(s) ||
          moviesSearch.nameEN.toLowerCase().includes(s)
      );
    }

    if (short) {
      filtered = filtered.filter((moviesShort) => moviesShort.duration < 40);
    }

    setFilteredMovies(filtered);
  }, [savedMovies, search, short]);

  useEffect(() => {
    apiMain
      .getMovies()
      .then((moviesData) => {
        const movies = moviesData
          .filter((item) => item.owner === currentUser?._id)
          .map((movies) => {
            if (movies.owner === currentUser?._id) {
              return movies;
            }
          });
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(`Ошибка данных: ${err}`);
      });
  }, []);

  return (
    <main className="movies">
      <form className="movies__form" name="search">
        <SearchForm onChange={handleSearchMovies} onClick={() => {}} />
        <div className="movies__switch">
          <FilterCheckbox isOn={short} handleToggle={handleCheckbox} />
          <h3 className="movies__h3">Короткометражки</h3>
        </div>
      </form>
      <MoviesCardList>
        {!isMoviesLoaded ? <Preloader /> : null}
        {filteredMovies.length === 0 && isMoviesLoaded ? (
          <h2 className="movies__not-found">Ничего не найдено!</h2>
        ) : null}
        {filteredMovies.map((movies, index) => (
          <SavedMoviesCard
            key={index}
            onClickRemove={onRemoveMovies}
            movies={movies}
          />
        ))}
      </MoviesCardList>
    </main>
  );
}

export default SavedMovies;
