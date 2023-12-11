import React, { useState } from "react";
import { BlackMovie, Movie, StoryMovie } from "../../images";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import "./Movies.css";

function Movies({ movies, onMoviesLike }) {
  const [short, setShort] = useState(false);
  const [buttonElse, setButtonElse] = useState(true);
  let [nowMovies, setNowMovies] = useState(13);
  let moviesLength = 0;

  return (
    <main className="movies">
      <form className="movies__form" name="search">
        <SearchForm />
        <div className="movies__switch">
          <FilterCheckbox isOn={short} handleToggle={() => setShort(!short)} />
          <h3 className="movies__h3">Короткометражки</h3>
        </div>
      </form>
      <MoviesCardList>
        {movies
          .filter(() => {
            ++moviesLength;
            if (moviesLength >= nowMovies) return false;
            return true;
          })
          .map((info) => (
            <MoviesCard onMoviesLike={onMoviesLike} info={info} />
          ))}
      </MoviesCardList>
      <section className="movies__continue">
        {buttonElse ? (
          <button
            onClick={() => {
              if (moviesLength <= nowMovies) setButtonElse(false);
              setNowMovies(nowMovies + 13);
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
