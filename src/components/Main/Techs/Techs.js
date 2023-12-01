import "./Techs.css";

const Techs = () => {
  return (
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
  );
};

export default Techs;
