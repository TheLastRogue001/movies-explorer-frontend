import React, { useState } from "react";
import { BlackMovie, Movie, StoryMovie } from "../../images";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import "./Movies.css";
// import * as auth from "../utils/auth";

function Movies() {
  const [short, setShort] = useState(false);

  return (
    <div className="movies">
      <SearchForm />
      <div className="movies__switch">
        <FilterCheckbox isOn={short} handleToggle={() => setShort(!short)} />
        <h3 className="movies__h3">Короткометражки</h3>
      </div>
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
      </MoviesCardList>
      <div className="movies__continue">
        <button className="movies__next">Ещё</button>
      </div>
    </div>
  );
}

export default Movies;
