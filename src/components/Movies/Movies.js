import React, { useState } from "react";
import { BlackMovie, Movie, StoryMovie } from "../../images";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import "./Movies.css";

function Movies() {
  const [short, setShort] = useState(false);

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
        <MoviesCard Movie={Movie} />
        <MoviesCard isLiked={true} Movie={BlackMovie} />
        <MoviesCard Movie={StoryMovie} />
        <MoviesCard Movie={Movie} />
        <MoviesCard isLiked={true} Movie={BlackMovie} />
        <MoviesCard Movie={StoryMovie} />
        <MoviesCard Movie={Movie} />
        <MoviesCard isLiked={true} Movie={BlackMovie} />
        <MoviesCard Movie={StoryMovie} />
        <MoviesCard Movie={Movie} />
        <MoviesCard isLiked={true} Movie={BlackMovie} />
        <MoviesCard Movie={StoryMovie} />
        <MoviesCard Movie={Movie} />
        <MoviesCard isLiked={true} Movie={BlackMovie} />
        <MoviesCard Movie={StoryMovie} />
        <MoviesCard Movie={Movie} />
        <MoviesCard isLiked={true} Movie={BlackMovie} />
        <MoviesCard Movie={StoryMovie} />
      </MoviesCardList>
      <section className="movies__continue">
        <button type="button" className="movies__next">
          Ещё
        </button>
      </section>
    </main>
  );
}

export default Movies;
