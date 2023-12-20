import React, { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { apiMain } from "../../utils/MainApi";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import SavedMoviesCard from "../SavedMovies/SavedMoviesCard/SavedMoviesCard";
import "./SavedMovies.css";

function SavedMovies({ isMoviesLoaded }) {
  const [savedShort, setSavedShort] = useState(false);
  const [savedSearch, setSavedSearch] = useState("");
  const [errors, setErrors] = useState("");
  const [nothingMovies, setNothingMovies] = useState(false);

  let [filteredMovies, setFilteredMovies] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  const handleSearchMovies = (e) => {
    setSavedSearch(e.target.value);
    setErrors(e.target.validationMessage);
  };

  const handleCheckbox = (e) => {
    setSavedShort(e.target.checked);
  };

  const handleSearchButton = () => {
    let movies = [];
    movies = JSON.parse(localStorage.getItem("saved-movies"));
    let filtered = movies;
    setNothingMovies(false);

    if (savedSearch) {
      const text = savedSearch.toLowerCase();
      filtered = filtered.filter(
        (moviesSearch) =>
          moviesSearch.nameRU.toLowerCase().includes(text) ||
          moviesSearch.nameEN.toLowerCase().includes(text)
      );
      if (filtered.length === 0) setNothingMovies(true);
    }

    if (savedShort) {
      filtered = filtered.filter((moviesShort) => moviesShort.duration < 40);
      if (filtered.length === 0) setNothingMovies(true);
    }

    if (savedSearch === "") {
      filtered = movies;
      setSavedShort(false);
    }

    if (savedSearch === null) {
      filtered = movies;
      setSavedShort(false);
    }

    setFilteredMovies(filtered ?? []);
  };

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
        setNothingMovies(false);
        setFilteredMovies(movies);
        localStorage.setItem("saved-movies", JSON.stringify(movies));
      })
      .catch((err) => {
        console.log(`Ошибка данных: ${err}`);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setNothingMovies(false);
      let movies = [];
      movies = JSON.parse(localStorage.getItem("saved-movies"));
      let filtered = movies ? movies : [];

      if (savedShort) {
        filtered = filtered.filter((moviesShort) => {
          return moviesShort.duration < 40;
        });
        if (filtered.length === 0) setNothingMovies(true);
      }

      if (savedSearch) {
        const text = savedSearch.toLowerCase();
        filtered = filtered.filter(
          (moviesSearch) =>
            moviesSearch.nameRU.toLowerCase().includes(text) ||
            moviesSearch.nameEN.toLowerCase().includes(text)
        );
        if (filtered.length === 0) setNothingMovies(true);
      }

      setFilteredMovies(filtered ?? []);
    }, 200);
  }, [savedShort]);

  return (
    <main className="movies">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchButton();
        }}
        className="movies__form"
        name="search"
        noValidate
      >
        <SearchForm
          onChange={handleSearchMovies}
          search={savedSearch}
          errors={errors}
          onClick={(e) => {
            e.preventDefault();
            handleSearchButton();
          }}
        />
        <div className="movies__switch">
          <FilterCheckbox isOn={savedShort} handleToggle={handleCheckbox} />
          <h3 className="movies__h3">Короткометражки</h3>
        </div>
      </form>
      <MoviesCardList>
        {!isMoviesLoaded ? <Preloader /> : null}
        {nothingMovies && isMoviesLoaded ? (
          <h2 className="movies__not-found">Ничего не найдено!</h2>
        ) : null}
        {filteredMovies.map((movies) => (
          <SavedMoviesCard
            key={movies.movieId}
            filteredMovies={filteredMovies}
            setFilteredMovies={setFilteredMovies}
            movies={movies}
          />
        ))}
      </MoviesCardList>
    </main>
  );
}

export default SavedMovies;
