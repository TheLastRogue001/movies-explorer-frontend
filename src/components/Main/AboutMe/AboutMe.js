import { MeAvatar as Student } from '../../../images'
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <h2 className="student__title">Студент</h2>
      <div className="student__container">
        <div className="student__text">
          <h2 className="student__h2">Александр</h2>
          <h3 className="student__h3">Фронтенд-разработчик, 23 лет</h3>
          <caption className="student__caption">
            Я родился и живу в Москве, закончил техникум РЭУ им.Плеханова. Я
            люблю играть в видеоигры, слушать музыку, смотреть сериалы и кодить.
            С начала 2022 года работаю в IT "Леруа Мерлен", также я повышаю свою
            квалификацию до middle-frontend developer.
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
    </div>
  );
};

export default AboutMe;
