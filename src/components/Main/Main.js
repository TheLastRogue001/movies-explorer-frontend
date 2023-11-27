import React from "react";
import Arrow from "../../images/arrow.svg";
import Praktikum from "../../images/icon-praktikum.svg";
import Student from "../../images/photo_2022-09-24_16-20-04.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Adaptive from "../../website/adaptive";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Header />
      <main className="content">
        <section className="praktikum">
          <div className="praktikum__components">
            <img src={Praktikum} className="praktikum__logo" alt="Praktikum" />
            <h1 className="praktikum__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
          </div>
          <div className="praktikum__links">
            <a className="praktikum__link" href="#project">
              О проекте
            </a>
            <a className="praktikum__link" href="#tehnology">
              Технологии
            </a>
            <a className="praktikum__link" href="#student">
              Студент
            </a>
          </div>
        </section>
        <section id="project" className="project">
          <h2 className="project__title">О проекте</h2>
          <div className="project__container">
            <div className="project__text">
              <h2 className="project__h2">Дипломный проект включал 5 этапов</h2>
              <caption className="project__caption">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </caption>
            </div>
            <div className="project__text">
              <h2 className="project__h2">
                На выполнение диплома ушло 5 недель
              </h2>
              <caption className="project__caption">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </caption>
            </div>
          </div>
          <div className="project__progress">
            <div className="project__back-end">
              <caption className="project__one-week">1 неделя</caption>
              <caption className="project__info">Back-end</caption>
            </div>
            <div className="project__front-end">
              <caption className="project__four-week">4 недели</caption>
              <caption className="project__info">Front-end</caption>
            </div>
          </div>
        </section>
        <section id="tehnology" className="tehnology">
          <h2 className="tehnology__title">Технологии</h2>
          <div className="tehnology__text">
            <h2 className="tehnology__h2">7 технологий</h2>
            <caption className="tehnology__caption">
              На курсе веб-разработки мы освоили технологии, которые применили в
              дипломном проекте.
            </caption>
          </div>
          <div className="tehnology__dev">
            <caption className="tehnology__item">HTML</caption>
            <caption className="tehnology__item">CSS</caption>
            <caption className="tehnology__item">JS</caption>
            <caption className="tehnology__item">React</caption>
            <caption className="tehnology__item">Git</caption>
            <caption className="tehnology__item">Express.js</caption>
            <caption className="tehnology__item">mongoDB</caption>
          </div>
        </section>
        <section id="student" className="student">
          <h2 className="student__title">Студент</h2>
          <div className="student__container">
            <div className="student__text">
              <h2 className="student__h2">Александр</h2>
              <h3 className="student__h3">Фронтенд-разработчик, 23 лет</h3>
              <caption className="student__caption">
                Я родился и живу в Москве, закончил техникум РЭУ им.Плеханова. Я
                люблю играть в видеоигры, слушать музыку, смотреть сериалы и
                кодить. С начала 2022 года работаю в IT "Леруа Мерлен", также я
                повышаю свою квалификацию до middle-frontend developer.
              </caption>
              <a
                href="https://github.com/TheLastRogue001"
                className="student__github"
              >
                Github
              </a>
            </div>
            <img className="student__img" src={Student} alt="Student" />
          </div>
          <div className="student__sites">
            <h2 className="student__portfolio">Портфолио</h2>
            <Link to="/static" className="student__link">
              <caption className="student__info">Статичный сайт</caption>
              <img src={Arrow} alt="Arrow" />
            </Link>
            <Link to="/adaptive" className="student__link">
              <caption className="student__info">Адаптивный сайт</caption>
              <img src={Arrow} alt="Arrow" />
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="student__link"
              href="http://fox.nomoredomainsrocks.ru/"
            >
              <caption className="student__info">
                Одностраничное приложение
              </caption>
              <img src={Arrow} alt="Arrow" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
