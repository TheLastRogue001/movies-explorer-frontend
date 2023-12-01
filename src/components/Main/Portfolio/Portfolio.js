import { Link } from "react-router-dom";
import { Arrow } from "../../../images";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="student__sites">
      <h2 className="student__portfolio">Портфолио</h2>
      <Link target="_blank" to="/static" className="student__link">
        <caption className="student__info">Статичный сайт</caption>
        <img className="student__arrow" src={Arrow} alt="Arrow" />
      </Link>
      <Link target="_blank" to="/adaptive" className="student__link">
        <caption className="student__info">Адаптивный сайт</caption>
        <img className="student__arrow" src={Arrow} alt="Arrow" />
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="student__link"
        href="http://fox.nomoredomainsrocks.ru/"
      >
        <caption className="student__info">Одностраничное приложение</caption>
        <img className="student__arrow" src={Arrow} alt="Arrow" />
      </a>
    </div>
  );
};

export default Portfolio;
