import "./AboutProject.css";

const AboutProject = () => {
  return (
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
          <h2 className="project__h2">На выполнение диплома ушло 5 недель</h2>
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
  );
};

export default AboutProject;
