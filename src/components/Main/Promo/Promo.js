import { IconPraktikum as Praktikum } from "../../../images";
import NavTab from "../NavTab/NavTab";
import "./Promo.css";

const Promo = () => {
  return (
    <section className="praktikum">
      <div className="praktikum__components">
        <img src={Praktikum} className="praktikum__logo" alt="Praktikum" />
        <h1 className="praktikum__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
      <NavTab />
    </section>
  );
};

export default Promo;
