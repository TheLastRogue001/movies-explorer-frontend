import { IconProfile, Logo, Menu } from "../../images";
import { Routes, Route, Link } from "react-router-dom";
import "./Header.css";

const getHeader = (onNavigationClick) => {
  return (
    <header className="header header_movies">
      <div className="header__container">
        <Link
          className="header__main"
          onClick={() => {
            localStorage.removeItem("jwt");
          }}
          to="/"
        >
          <img className="header__logo" alt="Логотип" src={Logo} />
        </Link>
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
        <img alt="Меню" className="header__menu" src={Menu} />
      </label>
      <input
        className="header__checkbox"
        type="checkbox"
        name="menu"
        id="info-header"
        onClick={onNavigationClick}
      />
      <Link
        to="/profile"
        className="header__components header__components-profile"
      >
        <h2 className="header__h2 header__h2-profile">Аккаунт</h2>
        <div className="header__img-profile">
          <img src={IconProfile} className="header__img" alt="Профиль" />
        </div>
      </Link>
    </header>
  );
};

function Header({ onNavigationClick, loggedIn }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          loggedIn ? (
            <header className="header header__movies_loggedin">
              <div className="header__container">
                <Link
                  className="header__main"
                  onClick={() => {
                    localStorage.removeItem("jwt");
                  }}
                  to="/"
                >
                  <img className="header__logo" alt="Логотип" src={Logo} />
                </Link>
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
                <img alt="Меню" className="header__menu" src={Menu} />
              </label>
              <input
                className="header__checkbox"
                type="checkbox"
                name="menu"
                id="info-header"
                onClick={onNavigationClick}
              />
              <Link
                to="/profile"
                className="header__components header__components-profile_loggedin"
              >
                <h2 className="header__h2 header__h2-profile">Аккаунт</h2>
                <div className="header__img-profile">
                  <img
                    src={IconProfile}
                    className="header__img"
                    alt="Профиль"
                  />
                </div>
              </Link>
            </header>
          ) : (
            <header className="header header-main">
              <img className="header__logo" alt="Логотип" src={Logo} />
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
          )
        }
      />
      <Route path="/profile" element={getHeader(onNavigationClick)} />
      <Route path="/movies" element={getHeader(onNavigationClick)} />
      <Route path="/saved-movies" element={getHeader(onNavigationClick)} />
    </Routes>
  );
}

export default Header;
