import { Link } from "react-router-dom";
import { Arrow } from "../../../images";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="student__sites">
      <h3 className="student__portfolio">Портфолио</h3>
      <ul className="student__ul">
        <li className="student__li">
          <Link target="_blank" to="/static" className="student__link">
            <h4 className="student__info">Статичный сайт</h4>
            <img className="student__arrow" src={Arrow} alt="Стрелка" />
          </Link>
        </li>
        <li className="student__li">
          <Link target="_blank" to="/adaptive" className="student__link">
            <h4 className="student__info">Адаптивный сайт</h4>
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
            <h4 className="student__info">Одностраничное приложение</h4>
            <img className="student__arrow" src={Arrow} alt="Стрелка" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
