import "./NavTab.css";

const NavTab = () => {
  return (
    <nav>
      <ul className="praktikum__links">
        <li>
          <a className="praktikum__link" href="#project">
            О проекте
          </a>
        </li>
        <li>
          <a className="praktikum__link" href="#tehnology">
            Технологии
          </a>
        </li>
        <li>
          <a className="praktikum__link" href="#student">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
