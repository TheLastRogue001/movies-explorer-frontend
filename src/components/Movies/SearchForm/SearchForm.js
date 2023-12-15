import { RightArrow } from "../../../images";
import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onChange, onClick, search, errors }) => {
  return (
    <div className="movies__search-component">
      <div className="movies__search">
        <input
          required
          type="text"
          name="search"
          id="search"
          value={search ? search : ""}
          onChange={onChange}
          placeholder="Фильм"
          className="movies__input"
        />
        <button
          type="button"
          onClick={onClick}
          className="movies__button-arrow"
        >
          <img alt="Стрелка" src={RightArrow} />
        </button>
      </div>
      <span className="movies__input-error">{errors}</span>
    </div>
  );
};

export default SearchForm;
