import {
  HeaderLogo,
  LeadPolka,
  PhotoGridArisa,
  PhotoGridBaikal,
  PhotoGridBaikal2,
  PhotoGridElbrus,
  PhotoGridErgaki,
  PhotoGridKamchatka1,
  PhotoGridKamchatka2,
  PhotoGridKondratiev,
  PhotoGridSochi,
  PhotoGridTrain,
  PhotoGridTulsi,
  PhotoGridTuman,
  PlaceAltai,
  PlaceKarelia,
  PlaceKolsky,
  PlaceKosa,
  PlaceWinterBaikal,
} from "./images";
import "./pages/index.css";

const Adaptive = () => {
  return (
    <div>
      <header className="header-adaptive">
        <img className="header__logo-adaptive" src={HeaderLogo} alt="Россия" />
        <div className="header__lang">
          <a className="header__lang-link header__lang-link_active" href="#">
            Ru
          </a>
          <a className="header__lang-link" href="#">
            En
          </a>
        </div>
      </header>
      <main className="content">
        <section className="lead">
          <h1 className="lead__title">Путешествия по России</h1>
          <p className="lead__subtitle">
            Настоящая страна не в выпусках новостей, а здесь.
          </p>
          <img
            className="lead__image"
            src={LeadPolka}
            alt="Путешествие по России"
          />
          <p className="lead__caption">ваша полка — верхняя</p>
        </section>
        <section className="intro">
          <h2 className="intro__title">Чего мы там не видели?</h2>
          <p className="intro__text">
            По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только
            36% планируют провести отпуск в родной стране. Мол, чего мы тут,
            дома, не видели? На самом деле, Россия — это целая вселенная с
            ласковым морем юга, густыми лесами Саян и суровыми льдами плато
            Путорана. А ещё увидеть все эти красоты можно без миллионов на
            счету, загранпаспорта и многочасовых перелетов. Как, например, Вера
            Башмакова — смелая молодая мама, которая взяла в охапку троих детей,
            усадила их в свою «Ладу» и проехала 20 тысяч километров по родной
            стране. Мы выбрали и описали некоторые интересные места, достойные
            вашего отпуска.
          </p>
          <ul className="intro__list">
            <li>
              <span className="intro__span-accent">Часовых поясов</span> 11
            </li>
            <li>
              <span className="intro__span-accent">
                Объектов природного наследия ЮНЕСКО
              </span>
              12
            </li>
            <li>
              <span className="intro__span-accent">
                Объектовкультурного наследия ЮНЕСКО
              </span>
              16
            </li>
            <li>
              <span className="intro__span-accent">Природных заповедников</span>
              105
            </li>
            <li>
              <span className="intro__span-accent">Аэропортов</span> 241
            </li>
          </ul>
        </section>
        <section className="photo-grid">
          <img src={PhotoGridTrain} alt="Поезд" className="photo-grid__item" />
          <img src={PhotoGridTulsi} alt="Тула" className="photo-grid__item" />
          <img src={PhotoGridTuman} alt="Туман" className="photo-grid__item" />
          <img src={PhotoGridSochi} alt="Сочи" className="photo-grid__item" />
          <img src={PhotoGridArisa} alt="Ариса" className="photo-grid__item" />
          <img
            src={PhotoGridBaikal}
            alt="Байкал"
            className="photo-grid__item"
          />
          <img
            src={PhotoGridElbrus}
            alt="Эльбрус"
            className="photo-grid__item"
          />
          <img
            src={PhotoGridKondratiev}
            alt="Кондратьев"
            className="photo-grid__item"
          />
          <img
            src={PhotoGridKamchatka1}
            alt="Камчатка"
            className="photo-grid__item"
          />
          <img
            src={PhotoGridKamchatka2}
            alt="Камчатка 2"
            className="photo-grid__item"
          />
          <img
            src={PhotoGridBaikal2}
            alt="Байкал 2"
            className="photo-grid__item"
          />
          <img
            src={PhotoGridErgaki}
            alt="Ергаки"
            className="photo-grid__item"
          />
        </section>
        <section className="places">
          <div className="place">
            <h2 className="place__title">Куршская коса</h2>
            <img src={PlaceKosa} alt="Коса" className="place__image" />
            <div className="place__website">
              <h3 className="place__url-heading">URL</h3>
              <a className="place__link" href="http://park-kosa.ru">
                park-kosa.ru
              </a>
            </div>
            <div>
              <p className="place__paragraph">
                Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два
                водных горизонта — спокойного Куршского залива с одной стороны и
                подёрнутого рябью волн Балтийского моря с другой. Уникальная
                природная зона на краю российского анклава.
              </p>
              <p className="place__paragraph">
                На этом Калининградская область не заканчивается. Для
                путешественника и исследователя там же по соседству — самая
                западная точка России, Балтийская коса, — и немецкое наследие
                россыпи небольших приморских городов. Атмосфера здешних мест
                исключает суету, окуная в спокойствие природы и запах стального,
                прохладного моря.
              </p>
            </div>
          </div>
          <div className="place">
            <h2 className="place__title">Кольский</h2>
            <img src={PlaceKolsky} alt="Кольский" className="place__image" />
            <div className="place__website">
              <h3 className="place__url-heading">URL</h3>
              <a
                className="place__link"
                href="https://yourshot.nationalgeographic.com/photos/?keywords=kolskiy"
              >
                National Geographic
              </a>
            </div>
            <div>
              <p className="place__paragraph">
                Почти весь полуостров находится за Полярным кругом. Саамская
                тундра, от которой на юг — тайга, а на север — Ледовитый океан,
                прикидывающийся Баренцевым морем.
              </p>
              <p className="place__paragraph">
                Возможно, вы смотрели Звягинцева и даже слышали историю
                арктического фестиваля в Териберке. Возможно, слово «Хибины» не
                осталось под снегом школьных воспоминаний об уроках географии.
                Возможно, вы не интересовались пронизывающей земную кору
                сверхглубокой скважиной, а от апатитов вас давно накрывает
                апатия. Но ваша мечта увидеть северное сияние начинает сбываться
                с билетом в Мурманск.
              </p>
            </div>
          </div>
          <div className="place">
            <h2 className="place__title">Алтай</h2>
            <img src={PlaceAltai} alt="Алтай" className="place__image" />
            <div className="place__website">
              <h3 className="place__url-heading">URL</h3>
              <a
                className="place__link"
                href="https://www.youtube.com/watch?v=7ZEsoV7kWAQ"
              >
                YouTube
              </a>
            </div>
            <div>
              <p className="place__paragraph">
                Алтай — одно из красивейших мест в России. В первую очередь
                из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные
                соснами, горные реки и озёра. А если вы откроете в автомобиле
                окна, сможете познакомиться с невидимым чудом здешних мест —
                горным воздухом.
              </p>
              <p className="place__paragraph">
                Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом.
                Так вы увидите всё разнообразие местной флоры и фауны. По лесам
                Алтая бродят лоси, над хребтами летают орлы, а на равнинах
                пасутся косули. И знаменитые манулы — тоже обитатели Алтайского
                края.
              </p>
            </div>
          </div>
          <div className="place">
            <h2 className="place__title">Зимний Байкал</h2>
            <img
              src={PlaceWinterBaikal}
              alt="Зимний Байкал"
              className="place__image"
            />
            <div className="place__website">
              <h3 className="place__url-heading">URL</h3>
              <a className="place__link" href="https://vk.com/baikalmile">
                https://vk.com/baikalmile
              </a>
            </div>
            <div>
              <p className="place__paragraph">
                Всем известен Байкал как крупнейшее озеро в мире. Многие также
                знают, что это самый большой источник пресной воды и одно из
                красивейших мест в России.
              </p>
              <p className="place__paragraph">
                Конечно, это всё так. Но Байкал ещё идеальное место
                для соревнований по скийорингу. Это такой вид спорта, когда
                лыжник привязывает себя к мотоциклу, и тандем старается развить
                как можно бóльшую скорость на льду. В марте 2019 года на
                фестивале «Байкальская миля» был поставлен мировой рекорд —
                197.011 км/ч.
              </p>
            </div>
          </div>
          <div className="place">
            <h2 className="place__title">Карелия</h2>
            <img src={PlaceKarelia} alt="Карелия" className="place__image" />
            <div className="place__website">
              <h3 className="place__url-heading">URL</h3>
              <a className="place__link" href="http://vodlozero.ru">
                http://vodlozero.ru/
              </a>
            </div>
            <p className="place__paragraph">
              Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу
              сибирская лиственница не растёт западнее Водлозера. Зато здесь она
              вымахивает на 30 метров — леса карельских национальных парков
              из-за непроходимых болот никогда не знали топора. Некоторым соснам
              уже больше чем полтысячелетия. Прикоснитесь к живому существу,
              видевшему солнце раньше, чем увидал его Иван Грозный. В
              девственном лесу на сотню километров не встретишь тропы. А на
              редких тропинках деревья в паре метров от земли помечены
              медвежьими когтями. Чтобы все знали, кто тут хозяин.
            </p>
          </div>
        </section>
        <section className="cover">
          <a
            className="cover__background"
            href="https://stampsy.com/na-elektrichkakh-do-baikala"
          >
            <h2 className="cover__title">До Байкала «на собаках»</h2>
            <p className="cover__subtitle">
              По мотивам учебной темы о Транссибе — путешествие от столицы до
              Байкала на электричках.
            </p>
          </a>
        </section>
      </main>
      <footer className="footer-adaptive">
        <nav>
          <ul className="footer__links-adaptive">
            <li>
              <a
                href="https://yandex.ru/maps"
                className="footer__link-adaptive"
              >
                Карты
              </a>
            </li>
            <li>
              <a
                href="https://yandex.ru/pogoda"
                className="footer__link-adaptive"
              >
                Погода
              </a>
            </li>
            <li>
              <a
                href="https://rasp.yandex.ru"
                className="footer__link-adaptive"
              >
                Расписание
              </a>
            </li>
            <li>
              <a
                href="https://calendar.yandex.ru"
                className="footer__link-adaptive"
              >
                Календарь
              </a>
            </li>
            <li>
              <a
                href="https://travel.yandex.ru"
                className="footer__link-adaptive"
              >
                Путешествия
              </a>
            </li>
          </ul>
        </nav>
        <p className="footer__copyright">© 2023. Шевельков А.С.</p>
      </footer>
    </div>
  );
};

export default Adaptive;
