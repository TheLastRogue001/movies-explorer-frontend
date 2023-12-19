import React, { useState, useEffect, useContext } from "react";
import SearchForm from "./SearchForm/SearchForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { apiMain } from "../../utils/MainApi";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "./MoviesCard/MoviesCard";
import "./Movies.css";

function Movies({ setIsMoviesLoaded, isMoviesLoaded }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [errors, setErrors] = useState("");
  let movesCount = 12;
  if (width <= 1000) movesCount = 8;
  if (width <= 768) movesCount = 8;
  if (width <= 480) movesCount = 5;
  const [likedMovies, setLikeMovies] = useState([]);
  const [short, setShort] = useState(parseLocalStorageBoolean("short"));
  const [search, setSearch] = useState(localStorage.getItem("search"));
  const [buttonElse, setButtonElse] = useState(false);
  const [limitMovies, setLimitMovies] = useState(1);
  const [nothingMovies, setNothingMovies] = useState(false);

  let [filteredMovies, setFilteredMovies] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  const handleSearchMovies = (e) => {
    setSearch(e.target.value);
    setErrors(e.target.validationMessage);
    if (search?.length === 1) localStorage.setItem("search", "");
  };

  function parseLocalStorageBoolean(pre) {
    return localStorage.getItem(pre) === "true";
  }

  const handleCheckbox = (e) => {
    setShort(e.target.checked);
  };

  const getMoviesData = () => {
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
        setLikeMovies(movies);
      })
      .catch((err) => {
        console.log(`Ошибка данных: ${err}`);
      });
  };

  const handleSearchButton = () => {
    let movies = [];
    movies = JSON.parse(localStorage.getItem("movies"));
    let filtered = movies ? movies : [];
    setButtonElse(true);
    setFilteredMovies([]);
    setNothingMovies(false);
    getMoviesData();

    if (search) {
      const text = search.toLowerCase();
      filtered = filtered.filter(
        (moviesSearch) =>
          moviesSearch.nameRU.toLowerCase().includes(text) ||
          moviesSearch.nameEN.toLowerCase().includes(text)
      );
      if (filtered.length === 0) setNothingMovies(true);
      localStorage.setItem("search", search);
    }

    if (short) {
      filtered = filtered.filter((moviesShort) => {
        if (moviesShort.duration < 40) localStorage.setItem("short", short);
        return moviesShort.duration < 40;
      });
      setButtonElse(false);
    }

    if (short === false) localStorage.setItem("short", false);

    if (filtered.length - limitMovies * movesCount < limitMovies)
      setButtonElse(false);

    if (search === "") {
      setErrors("Нужно ввести ключевое слово!");
      setButtonElse(false);
      filtered = [];
    }

    if (search === null) {
      setErrors("Нужно ввести ключевое слово!");
      setButtonElse(false);
      filtered = [];
    }

    setFilteredMovies(filtered ?? []);
    setIsMoviesLoaded(true);
  };

  const handleAddButton = () => {
    if (filteredMovies.length - limitMovies * movesCount < limitMovies)
      setButtonElse(false);
    if (filteredMovies.length === 0) setButtonElse(true);
    if (width > 1280) setLimitMovies(limitMovies + 0.25);
    if (width <= 1280) setLimitMovies(limitMovies + 0.25);
    if (width <= 1136) setLimitMovies(limitMovies + 0.17);
    if (width <= 1000) setLimitMovies(limitMovies + 0.25);
    if (width <= 768) setLimitMovies(limitMovies + 0.25);
    if (width <= 480) setLimitMovies(limitMovies + 0.4);
  };

  useEffect(() => {
    setIsMoviesLoaded(false);
    setSearch(localStorage.getItem("search"));
    setShort(parseLocalStorageBoolean("short"));
    let movies = [];
    try {
      movies = JSON.parse(localStorage.getItem("movies"));
      if (Array.isArray(movies)) {
        setFilteredMovies(movies);
      }
    } catch {}
    filteredMovies.length = 1;
    setButtonElse(false);
    setTimeout(() => {
      if (localStorage.getItem("movies")) handleSearchButton();
      setIsMoviesLoaded(true);
    }, 230);

    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    let movies = [];
    movies = JSON.parse(localStorage.getItem("movies"));
    let filtered = movies ? movies : [];

    if (short) {
      filtered = filtered.filter((moviesShort) => {
        if (moviesShort.duration < 40) localStorage.setItem("short", short);
        return moviesShort.duration < 40;
      });
      if (filtered.length === 0) setNothingMovies(true);
      setButtonElse(false);
    }

    if (search) {
      const text = search.toLowerCase();
      filtered = filtered.filter(
        (moviesSearch) =>
          moviesSearch.nameRU.toLowerCase().includes(text) ||
          moviesSearch.nameEN.toLowerCase().includes(text)
      );
      if (filtered.length === 0) setNothingMovies(true);
      localStorage.setItem("search", search);
    }

    if (short === false) localStorage.setItem("short", false);

    setFilteredMovies(filtered ?? []);
  }, [short]);

  return (
    <main className="movies">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsMoviesLoaded(false);
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
            setIsMoviesLoaded(false);
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
        {nothingMovies && isMoviesLoaded ? (
          <h2 className="movies__not-found">Ничего не найдено!</h2>
        ) : null}
        {filteredMovies
          .slice(0 * movesCount, limitMovies * movesCount)
          .map((info) => (
            <MoviesCard
              key={info.id}
              likedMovies={likedMovies}
              setLikeMovies={setLikeMovies}
              info={info}
            />
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
