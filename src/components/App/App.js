import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { FalseImg, TrueImg } from "../../images";
import { apiMain } from "../../utils/MainApi";
import { apiMovies } from "../../utils/MoviesApi";
import Login from "../Auth/Login/Login";
import NotFoundPage from "../Auth/NotFound/NotFoundPage";
import Profile from "../Auth/Profile/Profile";
import Register from "../Auth/Register/Register";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Navigation from "../Navigation/Navigation";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import SavedMovies from "../SavedMovies/SavedMovies";
import Adaptive from "../web/adaptive/index";
import Static from "../web/statics/index";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = useState(false);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const [isSuccessInfoTooltipStatus, setIsSuccessInfoTooltipStatus] =
    useState(false);

  const [isMoviesLoaded, setIsMoviesLoaded] = useState(false);

  const [movies, setMovies] = useState([]);

  const [savedMovies, setSavedMovies] = useState([]);

  const [newMovies, setNewMovies] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      apiMain
        .checkToken(token)
        .then((userData) => {
          navigate("/movies", { replace: true });
        })
        .then(() => {
          setLoggedIn(true);
        })
        .catch((e) => {
          localStorage.removeItem("jwt");
          console.log(`Ошибка: ${e}`);
        });
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      apiMain
        .getUserProfile(token)
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(`Ошибка данных: ${err}`);
        });
      setIsMoviesLoaded(false);
      apiMovies
        .getInitialMovies()
        .then((initialCards) => {
          setMovies(initialCards);
          setIsMoviesLoaded(true);
        })
        .catch((err) => {
          console.log(`Ошибка данных: ${err}`);
        });
    }
  }, [loggedIn]);

  const closeAllPopups = () => {
    setIsNavigationPopupOpen(false);
    setIsInfoTooltipOpen(false);
  };

  const handleExitClick = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleUpdateUser = ({ name, email }) => {
    apiMain
      .updateUserProfile(name, email)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(
          `Возникла ошибка при получении данных пользователя: ${err}`
        );
      });
  };

  const handleMoviesLike = (
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) => {
    apiMain
      .createMovies(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN
      )
      .then((newMovies) => {
        setNewMovies(newMovies);
      })
      .catch((err) => {
        console.log(`Возникла ошибка с лайками: ${err}`);
      });
  };

  const openInfoTooltip = (status) => {
    setIsInfoTooltipOpen(true);
    setIsSuccessInfoTooltipStatus(status);
  };

  const handleRemoveMovies = (id) => {
    apiMain
      .deleteMovies(id)
      .then(() => {
        setSavedMovies((movies) =>
          movies.filter((movieItem) => id !== movieItem._id)
        );
      })
      .catch((err) => {
        console.log(`Возникла ошибка при удалении карточки: ${err}`);
      });
  };

  const handleNavigationClick = () => {
    setIsNavigationPopupOpen(true);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="layout">
          <div className="layout__container">
            <Header
              loggedIn={loggedIn}
              onNavigationClick={handleNavigationClick}
            />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRouteElement
                    element={Profile}
                    loggedIn={loggedIn}
                    onUpdateUser={handleUpdateUser}
                    onExitClick={handleExitClick}
                  />
                }
              />
              <Route
                path="/movies"
                element={
                  <ProtectedRouteElement
                    movies={movies}
                    savedMovies={savedMovies}
                    newMovies={newMovies}
                    loggedIn={loggedIn}
                    onRemoveMovies={handleRemoveMovies}
                    isMoviesLoaded={isMoviesLoaded}
                    onMoviesLike={handleMoviesLike}
                    setSavedMovies={setSavedMovies}
                    element={Movies}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRouteElement
                    element={SavedMovies}
                    savedMovies={savedMovies}
                    onRemoveMovies={handleRemoveMovies}
                    isMoviesLoaded={isMoviesLoaded}
                    setSavedMovies={setSavedMovies}
                    loggedIn={loggedIn}
                  />
                }
              />
              <Route path="/adaptive" element={<Adaptive />} />
              <Route path="/static" element={<Static />} />
              <Route
                path="/signup"
                element={
                  <Register
                    handleLogin={handleLogin}
                    onInfoAuth={openInfoTooltip}
                  />
                }
              />
              <Route
                path="/signin"
                element={
                  <Login
                    handleLogin={handleLogin}
                    onInfoAuth={openInfoTooltip}
                  />
                }
              />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
            <InfoTooltip
              isOpen={isInfoTooltipOpen}
              onClose={closeAllPopups}
              title={
                isSuccessInfoTooltipStatus
                  ? "Вы успешно зарегистрировались!"
                  : "Что-то пошло не так! Попробуйте ещё раз."
              }
              src={isSuccessInfoTooltipStatus ? TrueImg : FalseImg}
            />
            <Navigation
              isOpen={isNavigationPopupOpen}
              onClose={closeAllPopups}
            />
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
