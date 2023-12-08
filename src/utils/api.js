class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserProfile() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  updateUserProfile(name, email) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => this._checkResponse(res));
  }
}

export const api = new Api({ baseUrl: "https://api.diplom0908.nomoredomainsrocks.ru" });
