import { RightArrow } from "../../../images";
import "./SearchForm.css";

const SearchForm = ({ onChange, onClick, search }) => {
  return (
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
      <button type="button" onClick={onClick} className="movies__button-arrow">
        <img alt="Стрелка" src={RightArrow} />
      </button>
    </div>
  );
};

export default SearchForm;
