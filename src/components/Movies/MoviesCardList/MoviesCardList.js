import "./MoviesCardList.css";

const MoviesCardList = ({ children }) => {
  return (
    <section className="movies__container">
      <ul className="movies__cards">{children}</ul>
    </section>
  );
};

export default MoviesCardList;
