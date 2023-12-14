import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "./MoviesCard/MoviesCard";
import "./Movies.css";

function Movies({ movies, isMoviesLoaded, onRemoveMovies }) {
  const width = window.innerWidth;
  let movesCount = 12;
  if (width <= 768) movesCount = 8;
  if (width <= 480) movesCount = 5;
  const [short, setShort] = useState(localStorage.getItem("short"));
  const [search, setSearch] = useState(localStorage.getItem("search"));
  const [buttonElse, setButtonElse] = useState(true);
  const [limitMovies, setLimitMovies] = useState(1);

  let [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearchMovies = (e) => {
    setSearch(e.target.value);
    if (search.length === 1) localStorage.setItem("search", "");
  };

  const handleCheckbox = (e) => {
    setShort(e.target.checked);
    if (short) setButtonElse(true);
  };

  const handleSearchButton = () => {
    let filtered = movies;

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

    setFilteredMovies(filtered);
  };

  useEffect(() => {
    setSearch(localStorage.getItem("search"));
    setShort(localStorage.getItem("short"));
    handleSearchButton();
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
      >
        <SearchForm
          onChange={handleSearchMovies}
          search={search}
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
            onClick={() => {
              if (
                filteredMovies.length - limitMovies * movesCount <
                limitMovies
              )
                setButtonElse(false);
              if (filteredMovies.length === 0) setButtonElse(true);
              setLimitMovies(limitMovies + 1);
            }}
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
