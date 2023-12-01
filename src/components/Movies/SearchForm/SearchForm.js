import { RightArrow } from "../../../images";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="movies__search">
      <input placeholder="Фильм" className="movies__input" />
      <button className="movies__button-arrow">
        <img src={RightArrow} />
      </button>
    </div>
  );
};

export default SearchForm;
