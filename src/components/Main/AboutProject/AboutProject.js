import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section id="project" className="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__container">
        <div className="project__text">
          <p className="project__label">Дипломный проект включал 5 этапов</p>
          <p className="project__p">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__text">
          <p className="project__label">На выполнение диплома ушло 5 недель</p>
          <p className="project__p">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__progress">
        <div className="project__back-end">
          <p className="project__one-week">1 неделя</p>
          <p className="project__info">Back-end</p>
        </div>
        <div className="project__front-end">
          <p className="project__four-week">4 недели</p>
          <p className="project__info">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
