import "./Techs.css";

const Techs = () => {
  return (
    <section id="tehnology" className="tehnology">
      <h2 className="tehnology__title">Технологии</h2>
      <div className="tehnology__text">
        <h3 className="tehnology__h3">7 технологий</h3>
        <p className="tehnology__p">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="tehnology__dev">
        <li className="tehnology__item">HTML</li>
        <li className="tehnology__item">CSS</li>
        <li className="tehnology__item">JS</li>
        <li className="tehnology__item">React</li>
        <li className="tehnology__item">Git</li>
        <li className="tehnology__item">Express.js</li>
        <li className="tehnology__item">mongoDB</li>
      </ul>
    </section>
  );
};

export default Techs;
