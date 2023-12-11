// export const BASE_URL = "http://localhost:3000";
export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

class ApiMovies {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  getInitialMovies(token) {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
  }
}

export const apiMovies = new ApiMovies({
  baseUrl: BASE_URL,
});
