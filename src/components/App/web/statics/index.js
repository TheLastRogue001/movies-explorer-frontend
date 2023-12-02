import {
  CardsAttention,
  CardsCompetence,
  CardsInterliving,
  CardsQuestion,
  CardsRecall,
  Feynman,
  HeaderImage,
  KhanBook,
  LogoPlaceFooter,
  LogoPlaceHeader,
  TikTok,
  VKColorWhite,
  YouTube,
  ResorcesArzamas,
  ResorcesN1,
  ResorcesPolka,
  ResorcesStrelka,
} from "./images";
import "./pages/index.css";

const Static = () => {
  return (
    <div className="page-static">
      <header className="header-static">
        <img
          className="logo logo_place_header"
          alt="Яндекс.Практикум"
          src={LogoPlaceHeader}
        />
        <h1 className="header__title">Научиться учиться</h1>
        <p className="header__subtitle">
          Какие современные и эффективные подходы к обучению вы можете
          использовать в своей жизни?
          <a href="#" target="_blank" className="header__connect">
            ⠀Узнать →
          </a>
        </p>
        <img
          className="header__main-illustration"
          alt="А надо было учиться"
          src={HeaderImage}
        />
        <div className="header__square-pic rotation"></div>
      </header>
      <main className="content">
        <section className="description">
          <div className="two-columns">
            <h2 className="two-columns__brief">Главные проблемы в обучении</h2>
            <div className="two-columns__main-text">
              <p className="two-columns__paragraph">
                Ни в школе, ни в институте нас не учат тому, как правильно
                изучать материал. Мы готовимся к экзаменам и учим билеты. Мы
                тренируемся решать однообразные задачи, чтобы лучше сдать тест,
                но часто в итоге это не дает нам реального знания. Зубрежка
                быстро выветривается и не приносит пользы.
              </p>
              <p className="two-columns__paragraph">
                <span className="two-columns__span-accent">Вывод:</span>
                учиться тоже нужно уметь, но почему-то этому мало где учат. Что
                с этим делать?
              </p>
              <p className="two-columns__paragraph">
                Конкретные техники и упражнения помогают изменить подход к
                обучению, сделать его эффективным и захватывающим. Эти же
                техники применяются на примере обучения в Практикуме.
              </p>
            </div>
          </div>
        </section>
        <section className="techniques">
          <h2 className="section-title">Техники обучения</h2>
          <p className="section-subtitle">Пять практик от Барбары Оакли</p>
          <div className="cards">
            <div className="cards__item">
              <img
                className="cards__image"
                alt="Два вида внимания"
                src={CardsAttention}
              />
              <h3 className="cards__title">Два вида внимания</h3>
              <p className="cards__description">
                Глубокие знания возникают, если чередовать сфокусированное и
                рассеянное мышление.
              </p>
            </div>
            <div className="cards__item">
              <img
                className="cards__image"
                alt="Вспоминайте изученное"
                src={CardsRecall}
              />
              <h3 className="cards__title">Recall</h3>
              <p className="cards__description">
                Вспоминайте изученное — это позволит соединить разрозненные
                порции памяти.
              </p>
            </div>
            <div className="cards__item">
              <img
                className="cards__image"
                alt="Интерливинг"
                src={CardsInterliving}
              />
              <h3 className="cards__title">Интерливинг</h3>
              <p className="cards__description">
                Изучайте несколько навыков одновременно, они обогащают друг
                друга.
              </p>
            </div>
            <div className="cards__item">
              <img className="cards__image" alt="Вопросы" src={CardsQuestion} />
              <h3 className="cards__title">Вопросы</h3>
              <p className="cards__description">
                Слушая преподавателя, придумывайте хороший вопрос, который вас
                действительно волнует.
              </p>
            </div>
            <div className="cards__item">
              <img
                className="cards__image"
                alt="Иллюзия компентентности"
                src={CardsCompetence}
              />
              <h3 className="cards__title">Иллюзия компетентности</h3>
              <p className="cards__description">
                Повторите про себя, запишите, расскажите другу: вам только
                кажется, что вы владеете новой темой.
              </p>
            </div>
          </div>
        </section>
        <section className="video">
          <h2 className="section-title">Видео нa TED</h2>
          <p className="section-subtitle">
            Для тех, кто любит прокрастинировать
          </p>
          <div className="video__iframes">
            <iframe
              className="video__iframe"
              src="https://www.youtube.com/embed/arj7oStGLkU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              className="video__iframe"
              src="https://www.youtube.com/embed/5MgBikgcWnY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        <section className="oakley">
          <div className="two-columns">
            <h2 className="two-columns__brief">История Барбары Оакли.</h2>
            <div className="two-columns__main-text">
              <p className="two-columns__paragraph">
                С детства Барбаре не давалась математика. Она считала себя
                законченным гуманитарием, причём далеко не самым умным. В армии
                она изучала русский язык, чтобы получить надбавку, да так
                успешно, что её выдвинули в командиры. Но для продвижения по
                службе нужно было сдавать математику. И тогда Барбара придумала
                свой подход к точным наукам. Оказалось, если вам что-то «плохо
                даётся», ваши добытые трудом знания гораздо глубже, чем у тех,
                кому всё ясно с первого взгляда.
              </p>
            </div>
          </div>
        </section>
        <section className="feynman">
          <h2 className="feynman__title">Метод Фейнмана</h2>
          <p className="feynman__subtitle">Выучить и не забыть.</p>
          <a className="feynman__link" target="_blank" href="#">
            Подробнее →
          </a>
          <img className="feynman__img" alt="Фейнман" src={Feynman} />
        </section>
        <section className="digits">
          <h2 className="section-title">Цифры и факты</h2>
          <p className="section-subtitle">Про учёбу и мозг</p>
          <div className="table">
            <div className="table__cell">
              <h3 className="table__heading">86 миллиардов</h3>
              <p className="table__text">Число нейронов в мозге человека</p>
            </div>
            <div className="table__cell">
              <h3 className="table__heading">2.1 миллиарда</h3>
              <p className="table__text">
                Число нуждающихся в повышении квалификации
              </p>
              <p className="table__text">Всемирный Банк, 2017</p>
            </div>
            <div className="table__cell">
              <h3 className="table__heading">1000 терабайт</h3>
              <p className="table__text">Объём памяти человека</p>
            </div>
            <div className="table__cell">
              <h3 className="table__heading">500 триллионов</h3>
              <p className="table__text">
                Число ответственных за обучение нервных синапсов у взрослого
                человека
              </p>
            </div>
            <div className="table__cell">
              <h3 className="table__heading">420 миллионов</h3>
              <p className="table__text">
                Число взрослых людей моложе 25 лет, не имеющих образования для
                трудоустройства
              </p>
              <p className="table__text">Всемирный Банк, 2017</p>
            </div>
            <div className="table__cell">
              <h3 className="table__heading">17–20 лет</h3>
              <p className="table__text">Пик обучаемости</p>
            </div>
            <div className="table__cell">
              <h3 className="table__heading">1885 год</h3>
              <p className="table__text">Открытие кривой забывания</p>
            </div>
            <div className="table__cell">
              <h3 className="table__heading">1889 год</h3>
              <p className="table__text">Открытие условного рефлекса</p>
            </div>
          </div>
        </section>
        <section className="khan">
          <div className="khan__container">
            <p className="khan__author">Салман Хан</p>
            <h2 className="khan__title">Весь мир — школа</h2>
            <p className="khan__quote">
              Страсть и новаторство Сала Хана меняют процесс обучения миллионов
              студентов по всему миру. Книгу «Весь мир — школа» нужно прочитать
              всем, кто занимается образованием — так учащиеся повсюду смогут
              получить навыки и знания, которые приносят успех в школе, карьере
              и жизни.
            </p>
            <p className="khan__quote-author">Джордж Лукас</p>
            <p className="khan__quote-author-subline">Кинорежиссер, продюсер</p>
            <div className="khan__book-container">
              <img
                className="khan__book-pic"
                alt="Весь мир — школа"
                src={KhanBook}
              />
              <a className="khan__buy-link" target="_blank" href="#">
                Купить книгу →
              </a>
            </div>
          </div>
        </section>
        <section className="kaufman">
          <h2 className="section-title section-title_theme_dark">
            Принципы обучения
          </h2>
          <p className="section-subtitle section-subtitle_theme_dark">
            от Джоша Кауфмана
          </p>
          <div className="table table_theme_dark">
            <div className="table__cell table__cell_theme_dark">
              <h3 className="table__heading table__heading_theme_dark">1</h3>
              <p className="table__text table__text_theme_dark">
                Выберите привлекательный проект.
              </p>
            </div>
            <div className="table__cell table__cell_theme_dark">
              <h3 className="table__heading table__heading_theme_dark">2</h3>
              <p className="table__text table__text_theme_dark">
                Сосредоточьтесь на каком-то одном навыке.
              </p>
            </div>
            <div className="table__cell table__cell_theme_dark">
              <h3 className="table__heading table__heading_theme_dark">3</h3>
              <p className="table__text table__text_theme_dark">
                Определите целевой уровень мастерства.
              </p>
            </div>
            <div className="table__cell table__cell_theme_dark">
              <h3 className="table__heading table__heading_theme_dark">4</h3>
              <p className="table__text table__text_theme_dark">
                Разбейте навык на элементы.
              </p>
            </div>
            <div className="table__cell table__cell_theme_dark">
              <h3 className="table__heading table__heading_theme_dark">5</h3>
              <p className="table__text table__text_theme_dark">
                Приготовьте всё необходимое для занятий.
              </p>
            </div>
            <div className="table__cell table__cell_theme_dark">
              <h3 className="table__heading table__heading_theme_dark">6</h3>
              <p className="table__text table__text_theme_dark">
                Устраните препятствия для занятий.
              </p>
            </div>
            <div className="table__cell table__cell_theme_dark">
              <h3 className="table__heading table__heading_theme_dark">7</h3>
              <p className="table__text table__text_theme_dark">
                Выделите специальное время для занятий.
              </p>
            </div>
            <div className="table__cell table__cell_theme_dark">
              <h3 className="table__heading table__heading_theme_dark">8</h3>
              <p className="table__text table__text_theme_dark">
                Создайте быстрые петли обратной связи.
              </p>
            </div>
            <div className="table__cell table__cell_theme_dark">
              <h3 className="table__heading table__heading_theme_dark">9</h3>
              <p className="table__text table__text_theme_dark">
                Занимайтесь по расписанию, короткими интенсивными интервалами.
              </p>
            </div>
            <div className="table__cell table__cell_theme_dark">
              <h3 className="table__heading table__heading_theme_dark">10</h3>
              <p className="table__text table__text_theme_dark">
                Уделяйте внимание количеству и скорости.
              </p>
            </div>
          </div>
          <div className="kaufman__triangle rotation"></div>
        </section>
        <section className="resources">
          <h2 className="section-title">Полезные ресурсы</h2>
          <p className="section-subtitle">
            Больше материалов о техниках и лайфхаках обучения
          </p>
          <div className="resources__logo-zone">
            <a href="#" target="_blank">
              <img
                className="resources__link"
                src={ResorcesArzamas}
                alt="Арзамас"
              />
            </a>
            <a href="#" target="_blank">
              <img className="resources__link" src={ResorcesN1} alt="Н+1" />
            </a>
            <a href="#" target="_blank">
              <img
                className="resources__link"
                src={ResorcesStrelka}
                alt="Стрелка"
              />
            </a>
            <a href="#" target="_blank">
              <img
                className="resources__link"
                src={ResorcesPolka}
                alt="Полка"
              />
            </a>
          </div>
        </section>
      </main>
      <footer className="footer-static">
        <div className="footer__columns">
          <div className="footer__column footer__column_content_copyright">
            <img
              src={LogoPlaceFooter}
              alt="Яндекс.Практикум"
              className="logo logo_place_footer"
            />
            <p className="footer__author">&copy; Шевельков Александр</p>
          </div>
          <nav className="footer__column footer__column_content_info">
            <h4 className="footer__column-heading">О Практикуме</h4>
            <ul className="footer__column-links">
              <li>
                <a href="#" target="_blank" className="footer__column-link">
                  Главная
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="footer__column-link">
                  Концепция
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="footer__column-link">
                  Наставники
                </a>
              </li>
            </ul>
          </nav>
          <nav className="footer__column footer__column_content_social">
            <h4 className="footer__column-heading">Соцсети</h4>
            <ul className="footer__column-links">
              <li>
                <a
                  href="https://www.youtube.com/"
                  className="footer__column-link"
                >
                  <img
                    src={YouTube}
                    alt="Ютуб"
                    className="footer__social-icon"
                  />
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://vk.com/" className="footer__column-link">
                  <img
                    src={VKColorWhite}
                    alt="ВКонтакте"
                    className="footer__social-icon"
                  />
                  ВКонтакте
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/"
                  className="footer__column-link"
                >
                  <img
                    src={TikTok}
                    alt="ТикТок"
                    className="footer__social-icon"
                  />
                  TikTok
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Static;
