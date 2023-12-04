import { Link } from "react-router-dom";
import { Arrow } from "../../../images";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="student__sites">
      <h2 className="student__portfolio">Портфолио</h2>
      <ul className="student__ul">
        <li className="student__li">
          <Link target="_blank" to="/static" className="student__link">
            <h3 className="student__info">Статичный сайт</h3>
            <img className="student__arrow" src={Arrow} alt="Стрелка" />
          </Link>
        </li>
        <li className="student__li">
          <Link target="_blank" to="/adaptive" className="student__link">
            <h3 className="student__info">Адаптивный сайт</h3>
            <img className="student__arrow" src={Arrow} alt="Стрелка" />
          </Link>
        </li>
        <li className="student__li">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="student__link"
            href="http://fox.nomoredomainsrocks.ru/"
          >
            <h3 className="student__info">Одностраничное приложение</h3>
            <img className="student__arrow" src={Arrow} alt="Стрелка" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
