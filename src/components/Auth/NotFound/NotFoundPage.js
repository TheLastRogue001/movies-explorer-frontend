import { Link, useNavigate } from "react-router-dom";
import "./NotFoundPage.css";
// import * as auth from "../utils/auth";

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <caption className="not-found__caption">Страница не найдена</caption>
      <Link className="not-found__link" to="/">Назад</Link>
    </div>
  );
}

export default NotFoundPage;
