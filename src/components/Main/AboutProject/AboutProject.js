import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section id="project" className="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__container">
        <div className="project__text">
          <h2 className="project__h2">Дипломный проект включал 5 этапов</h2>
          <p className="project__p">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__text">
          <h2 className="project__h2">На выполнение диплома ушло 5 недель</h2>
          <p className="project__p">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__progress">
        <div className="project__back-end">
          <label className="project__one-week">1 неделя</label>
          <h3 className="project__info">Back-end</h3>
        </div>
        <div className="project__front-end">
          <label className="project__four-week">4 недели</label>
          <h3 className="project__info">Front-end</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
