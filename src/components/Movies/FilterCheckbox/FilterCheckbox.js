import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ isOn, handleToggle }) => {
  return (
    <div>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="movies__checkbox"
        id="movies__checkbox"
        placeholder="Радио кнопка"
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#06D6A0" }}
        className="movies__label"
        htmlFor="movies__checkbox"
      >
        <span className="movies__button" />
      </label>
    </div>
  );
};

export default FilterCheckbox;
