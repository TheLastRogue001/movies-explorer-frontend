import Logo from "../../images/logo.svg";
import Menu from "../../images/menu.svg";
import Profile from "../../images/icon-profile.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./Header.css";

const getHeader = () => {
  return (
    <header className="header header__movies">
      <div className="header__container">
        <img className="header__logo" alt="Movies" src={Logo} />
        <div className="header__pages">
          <Link className="header__link" to="/movies">
            Фильмы
          </Link>
          <Link className="header__link" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        </div>
      </div>
      <label className="header__label" htmlFor="info-header">
        <img alt="Menu" className="header__menu" src={Menu} />
      </label>
      <input
        className="header__checkbox"
        type="checkbox"
        name="menu"
        id="info-header"
      />
      <Link
        to="/profile"
        className="header__components header__components-profile"
      >
        <caption className="header__caption header__caption-profile">
          Аккаунт
        </caption>
        <div className="header__img-profile">
          <img src={Profile} className="header__img" alt="profile" />
        </div>
      </Link>
    </header>
  );
};

function Header() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <header className="header header-main">
            <img className="header__logo" alt="Movies" src={Logo} />
            <div className="header__components">
              <Link
                to="/signup"
                // onClick={onExitClick}
                className="header__caption header__signup"
              >
                Регистрация
              </Link>
              <Link
                to="/signin"
                // onClick={onExitClick}
                className="header__caption header__signin"
              >
                Войти
              </Link>
            </div>
          </header>
        }
      />
      <Route path="/profile" element={getHeader()} />
      <Route path="/movies" element={getHeader()} />
      <Route path="/saved-movies" element={getHeader()} />
    </Routes>
  );
}

export default Header;
