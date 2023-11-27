import { Routes, Route, Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__h2">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
      </div>
      <div className="footer__info">
        <caption className="footer__caption">© 2023</caption>
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
}

export default Footer;
