import "./MoviesCard.css";

const MoviesCard = ({ Movie, isLiked, remove }) => {
  const moviesLikeButton = `movies__like ${
    isLiked ? "movies__like_active" : ""
  }`;
  const getButton = () => {
    if (remove) {
      return (
        <button type="button" aria-label="Удалить" className="movies__remove" />
      );
    }
    return (
      <button
        type="button"
        aria-label="Нравится"
        className={moviesLikeButton}
      />
    );
  };
  return (
    <li className="movies__card">
      <img src={Movie} alt="Фильм" className="movies__img" />
      <div className="movies__info">
        <h2 className="movies__title">33 слова о дизайне</h2>
        <div className="movies__content">{getButton()}</div>
        <label className="movies__time">1ч 47м</label>
      </div>
    </li>
  );
};

export default MoviesCard;
