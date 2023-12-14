import React, { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { apiMain } from "../../utils/MainApi";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import SavedMoviesCard from "../SavedMovies/SavedMoviesCard/SavedMoviesCard";
import "./SavedMovies.css";

function SavedMovies({
  savedMovies,
  onRemoveMovies,
  setSavedMovies,
  isMoviesLoaded,
}) {
  const [savedShort, setSavedShort] = useState(
    localStorage.getItem("saved-short")
  );
  const [savedSearch, setSavedSearch] = useState(
    localStorage.getItem("saved-search") ?? ""
  );

  let [filteredMovies, setFilteredMovies] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  const handleSearchMovies = (e) => {
    e.preventDefault();
    setSavedSearch(e.target.value);
    if (savedSearch.length === 1) localStorage.setItem("saved-search", "");
  };

  const handleCheckbox = (e) => {
    setSavedShort(e.target.checked);
  };

  const handleSearchButton = (e) => {
    e.preventDefault();
    let filtered = savedMovies;

    if (savedSearch) {
      const s = savedSearch.toLowerCase();
      filtered = filtered.filter(
        (moviesSearch) =>
          moviesSearch.nameRU.toLowerCase().includes(s) ||
          moviesSearch.nameEN.toLowerCase().includes(s)
      );
      localStorage.setItem("saved-search", savedSearch);
    }

    if (savedShort) {
      filtered = filtered.filter((moviesShort) => moviesShort.duration < 40);
      localStorage.setItem("saved-short", savedShort);
    }

    if (savedShort === false) localStorage.removeItem("saved-short");

    setFilteredMovies(filtered);
  };

  useEffect(() => {
    let filtered = savedMovies;
    setFilteredMovies(filtered);
  }, [savedMovies, savedSearch, savedShort]);

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

    setSavedSearch(localStorage.getItem("saved-search"));
    setSavedShort(localStorage.getItem("saved-short"));
  }, []);

  return (
    <main className="movies">
      <form onSubmit={handleSearchButton} className="movies__form" name="search">
        <SearchForm
          onChange={handleSearchMovies}
          search={savedSearch}
          onClick={handleSearchButton}
        />
        <div className="movies__switch">
          <FilterCheckbox isOn={savedShort} handleToggle={handleCheckbox} />
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
