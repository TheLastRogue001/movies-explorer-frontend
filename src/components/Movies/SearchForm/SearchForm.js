import { RightArrow } from "../../../images";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="movies__search">
      <input required placeholder="Фильм" className="movies__input" />
      <button type="submit" className="movies__button-arrow">
        <img alt="Стрелка" src={RightArrow} />
      </button>
    </div>
  );
};

export default SearchForm;
