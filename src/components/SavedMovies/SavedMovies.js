import React, { useState } from "react";
import { Movie, StoryMovie, BlackMovie } from "../../images";
import SearchForm from "../Movies/SearchForm/SearchForm";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import "./SavedMovies.css";
// import * as auth from "../utils/auth";

function SavedMovies() {
  const [short, setShort] = useState(false);
  const [remove, setRemove] = useState(true);
  return (
    <div className="movies">
      <SearchForm />
      <div className="movies__switch">
        <FilterCheckbox isOn={short} handleToggle={() => setShort(!short)} />
        <h3 className="movies__h3">Короткометражки</h3>
      </div>
      <MoviesCardList>
        <MoviesCard remove={remove} Movie={Movie} />
        <MoviesCard remove={remove} Movie={StoryMovie} />
        <MoviesCard remove={remove} Movie={BlackMovie} />
      </MoviesCardList>
    </div>
  );
}

export default SavedMovies;
