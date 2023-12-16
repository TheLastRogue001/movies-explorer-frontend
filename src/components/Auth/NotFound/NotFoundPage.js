import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NotFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    localStorage.removeItem("jwt");
  }, []);

  return (
    <main className="not-found">
      <section className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <label className="not-found__caption">Страница не найдена</label>
        <button
          type="button"
          onClick={() => {
            if (token) localStorage.setItem("jwt", token);
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
