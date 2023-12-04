import "./MoviesCardList.css";

const MoviesCardList = ({ children }) => {
  return (
    <section>
      <ul className="movies__cards">{children}</ul>
    </section>
  );
};

export default MoviesCardList;
