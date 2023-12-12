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
  const [short, setShort] = useState(false);
  const [search, setSearch] = useState("");
  const [buttonElse, setButtonElse] = useState(true);
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [limitMovies, setLimitMovies] = useState(12);

  let [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearchMovies = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckbox = (e) => {
    setShort(e.target.checked);
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
    }

    if (short) {
      filtered = filtered.filter((moviesShort) => moviesShort.duration < 40);
    }

    setFilteredMovies(filtered.slice(0, limitMovies));
  }, [movies, search, short, limitMovies]);

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
              // if (filteredMovies.length < limitMovies) setButtonElse(false);
              setLimitMovies(limitMovies + 12);
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
