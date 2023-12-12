import { RightArrow } from "../../../images";
import "./SearchForm.css";

const SearchForm = ({ onChange, onClick }) => {
  return (
    <div className="movies__search">
      <input
        onChange={onChange}
        required
        placeholder="Фильм"
        className="movies__input"
      />
      <button type="button" onClick={onClick} className="movies__button-arrow">
        <img alt="Стрелка" src={RightArrow} />
      </button>
    </div>
  );
};

export default SearchForm;
