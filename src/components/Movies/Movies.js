import React, { useState, useEffect, useContext } from "react";
import SearchForm from "./SearchForm/SearchForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { apiMovies } from "../../utils/MoviesApi";
import { apiMain } from "../../utils/MainApi";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "./MoviesCard/MoviesCard";
import "./Movies.css";

function Movies({
  movies,
  setMovies,
  setIsMoviesLoaded,
  isMoviesLoaded,
  onRemoveMovies,
}) {
  const [width, setWidth] = useState(0);
  const [errors, setErrors] = useState("");
  const [isValid, setIsValid] = useState(false);
  let movesCount = 12;
  // if (width <= 768) movesCount = 8;
  // if (width <= 480) movesCount = 5;
  const [likedMovies, setLikeMovies] = useState([]);
  const [short, setShort] = useState(localStorage.getItem("short"));
  const [search, setSearch] = useState(localStorage.getItem("search"));
  const [buttonElse, setButtonElse] = useState(true);
  const [limitMovies, setLimitMovies] = useState(1);

  let [filteredMovies, setFilteredMovies] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  const handleSetMovies = (movies) => {
    setMovies(movies);
    setIsMoviesLoaded(true);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    if (width <= 768) movesCount = 8;
    if (width <= 480) movesCount = 5;
  });

  const handleSearchMovies = (e) => {
    setSearch(e.target.value);
    setErrors(e.target.validationMessage);
    setIsValid(e.target.closest("form").checkValidity());
    if (search?.length === 1) localStorage.setItem("search", "");
  };

  const handleCheckbox = (e) => {
    setShort(e.target.checked);
    if (short) setButtonElse(true);
  };

  const handleSearchButton = () => {
    const initialMovies = apiMovies
      .getInitialMovies()
      .then((initialMovies) => {
        localStorage.setItem("movies", JSON.stringify(initialMovies));
        handleSetMovies(initialMovies);
      })
      .catch((err) => {
        console.log(`Ошибка данных: ${err}`);
      });
    const savedMovies = apiMain
      .getMovies()
      .then((moviesData) => {
        const movies = moviesData
          .filter((item) => item.owner === currentUser?._id)
          .map((movies) => {
            if (movies.owner === currentUser?._id) {
              return movies;
            }
          });
        setLikeMovies(movies);
      })
      .catch((err) => {
        console.log(`Ошибка данных: ${err}`);
      });

    Promise.all([savedMovies, initialMovies]).finally(() => {
      let filtered = initialMovies;

      setButtonElse(true);

      if (search) {
        const text = search.toLowerCase();
        filtered = filtered.filter(
          (moviesSearch) =>
            moviesSearch.nameRU.toLowerCase().includes(text) ||
            moviesSearch.nameEN.toLowerCase().includes(text)
        );
        localStorage.setItem("search", search);
      }

      if (short) {
        filtered = filtered.filter((moviesShort) => moviesShort.duration < 40);
        setButtonElse(false);
        localStorage.setItem("short", short);
      }

      if (short === false) localStorage.removeItem("short");

      if (filtered.length - limitMovies * movesCount < limitMovies)
        setButtonElse(false);

      if (search === "") {
        setErrors("Нужно ввести ключевое слово!");
        setShort(false);
        filtered = [];
      }

      setFilteredMovies(filtered ?? []);
    });
  };

  const handleAddButton = () => {
    if (filteredMovies.length - limitMovies * movesCount < limitMovies)
      setButtonElse(false);
    if (filteredMovies.length === 0) setButtonElse(true);
    setLimitMovies(limitMovies + 1);
    if (movesCount === 5) setLimitMovies(limitMovies + 0.4);
  };

  useEffect(() => {
    setSearch(localStorage.getItem("search"));
    setShort(localStorage.getItem("short"));
    let movies = [];
    try {
      movies = JSON.parse(localStorage.getItem("movies"));
      if (Array.isArray(movies)) {
        setFilteredMovies(movies);
        handleSetMovies(movies);
      }
    } catch {}
  }, []);

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
          search={search}
          errors={errors}
          onClick={(e) => {
            e.preventDefault();
            handleSearchButton();
          }}
        />
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
        {filteredMovies
          .slice(0 * movesCount, limitMovies * movesCount)
          .map((info, key) => (
            <MoviesCard key={key} onRemoveMovies={onRemoveMovies} info={info} />
          ))}
      </MoviesCardList>
      <section className="movies__continue">
        {buttonElse ? (
          <button
            onClick={handleAddButton}
            type="button"
            className="movies__next"
          >
            Ещё
          </button>
        ) : (
          <></>
        )}
      </section>
    </main>
  );
}

export default Movies;
