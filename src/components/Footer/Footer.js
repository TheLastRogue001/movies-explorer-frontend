import { Routes, Route, Link } from "react-router-dom";
import "./Footer.css";

const getFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__h2">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
      </div>
      <div className="footer__info">
        <label className="footer__label">© 2023</label>
        <div className="footer__links">
          <a
            className="footer__link"
            target="_blank"
            href="https://practicum.yandex.ru/"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            target="_blank"
            href="https://github.com/TheLastRogue001"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

function Footer() {
  return (
    <Routes>
      <Route path="/" element={getFooter()} />
      <Route path="/movies" element={getFooter()} />
      <Route path="/saved-movies" element={getFooter()} />
    </Routes>
  );
}

export default Footer;
