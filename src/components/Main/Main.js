import React from "react";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import "./Main.css";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";

const Main = () => {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <section id="student" className="student">
        <AboutMe />
        <Portfolio />
      </section>
    </main>
  );
};

export default Main;
