import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { FalseImg, TrueImg } from "../../images";
import { api } from "../../utils/MainApi";
import * as auth from "../../utils/MainApi";
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

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then((userData) => {
          setEmail(userData.email);
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
      api
        .getUserProfile()
        .then((userData) => {
          setCurrentUser(userData);
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

  const handleLogin = (email) => {
    setEmail(email);
    setLoggedIn(true);
  };

  const handleUpdateUser = ({ name, email }) => {
    // api
    //   .updateUserProfile(name, email)
    //   .then((userData) => {
    //     setCurrentUser(userData);
    //     closeAllPopups();
    //   })
    //   .catch((err) => {
    //     console.log(
    //       `Возникла ошибка при получении данных пользователя: ${err}`
    //     );
    //   });
  };

  const openInfoTooltip = (status) => {
    setIsInfoTooltipOpen(true);
    setIsSuccessInfoTooltipStatus(status);
  };

  const handleNavigationClick = () => {
    setIsNavigationPopupOpen(true);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="layout">
          <div className="layout__container">
            <Header onNavigationClick={handleNavigationClick} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRouteElement
                    element={Profile}
                    loggedIn={loggedIn}
                    email={email}
                    onUpdateUser={handleUpdateUser}
                    onExitClick={handleExitClick}
                  />
                }
              />
              <Route
                path="/movies"
                element={
                  <ProtectedRouteElement loggedIn={loggedIn} element={Movies} />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRouteElement
                    element={SavedMovies}
                    loggedIn={loggedIn}
                  />
                }
              />
              <Route path="/adaptive" element={<Adaptive />} />
              <Route path="/static" element={<Static />} />
              <Route
                path="/signup"
                element={<Register onInfoAuth={openInfoTooltip} />}
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
