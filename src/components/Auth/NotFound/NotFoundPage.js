import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <main className="not-found">
      <section className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <caption className="not-found__caption">Страница не найдена</caption>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
          className="not-found__link"
          to="/"
        >
          Назад
        </button>
      </section>
    </main>
  );
}

export default NotFoundPage;
