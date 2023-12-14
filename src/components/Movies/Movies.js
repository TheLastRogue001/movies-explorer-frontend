import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "./MoviesCard/MoviesCard";
import "./Movies.css";

function Movies({
  movies,
  onMoviesLike,
  newMovies,
  isMoviesLoaded,
  onRemoveMovies,
}) {
  const width = window.innerWidth;
  let movesCount = 12;
  if (width <= 768) movesCount = 8;
  if (width <= 480) movesCount = 5;
  const [short, setShort] = useState(localStorage.getItem("short"));
  const [search, setSearch] = useState("");
  const [buttonElse, setButtonElse] = useState(true);
  const [limitMovies, setLimitMovies] = useState(movesCount);

  let [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearchMovies = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckbox = (e) => {
    setShort(e.target.checked);
    if (short) setButtonElse(true);
  };

  useEffect(() => {
    let filtered = movies.slice();

    if (search) {
      const text = search.toLowerCase();
      filtered = filtered.filter(
        (moviesSearch) =>
          moviesSearch.nameRU.toLowerCase().includes(text) ||
          moviesSearch.nameEN.toLowerCase().includes(text)
      );
      if (search === "") localStorage.setItem("search", "");
      localStorage.setItem("search", search);
    }

    if (short) {
      filtered = filtered.filter((moviesShort) => moviesShort.duration < 40);
      setButtonElse(false);
      localStorage.setItem("short", short);
    }

    if (short === false) localStorage.removeItem("short");

    filtered = filtered.slice(0, limitMovies);

    setFilteredMovies(filtered);
  }, [movies, search, short, limitMovies]);

  useEffect(() => {
    setSearch(localStorage.getItem("search"));
    setShort(localStorage.getItem("short"));
  }, []);

  return (
    <main className="movies">
      <form className="movies__form" name="search">
        <SearchForm
          onChange={handleSearchMovies}
          search={search}
          onClick={() => {}}
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
        {filteredMovies.map((info, index) => (
          <MoviesCard
            key={index}
            newMovies={newMovies}
            onRemoveMovies={onRemoveMovies}
            onMoviesLike={onMoviesLike}
            info={info}
          />
        ))}
      </MoviesCardList>
      <section className="movies__continue">
        {buttonElse ? (
          <button
            onClick={() => {
              if (filteredMovies.length < limitMovies) setButtonElse(false);
              setLimitMovies(limitMovies + movesCount);
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
