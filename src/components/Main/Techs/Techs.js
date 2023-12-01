import "./Techs.css";

const Techs = () => {
  return (
    <section id="tehnology" className="tehnology">
      <h2 className="tehnology__title">Технологии</h2>
      <div className="tehnology__text">
        <h2 className="tehnology__h2">7 технологий</h2>
        <p className="tehnology__p">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className="tehnology__dev">
        <label className="tehnology__item">HTML</label>
        <label className="tehnology__item">CSS</label>
        <label className="tehnology__item">JS</label>
        <label className="tehnology__item">React</label>
        <label className="tehnology__item">Git</label>
        <label className="tehnology__item">Express.js</label>
        <label className="tehnology__item">mongoDB</label>
      </div>
    </section>
  );
};

export default Techs;
