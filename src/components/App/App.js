import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Adaptive from "../web/adaptive/index";
import Static from "../web/statics/index";
import Login from "../Auth/Login/Login";
import NotFoundPage from "../Auth/NotFound/NotFoundPage";
import Register from "../Auth/Register/Register";
// import { api } from "../utils/api";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
// import ProtectedRouteElement from "./ProtectedRoute";
import Profile from "../Auth/Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const closePopup = () => {
    setIsNavigationPopupOpen(false);
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
              <Route path="/profile" element={<Profile />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/saved-movies" element={<SavedMovies />} />
              <Route path="/adaptive" element={<Adaptive />} />
              <Route path="/static" element={<Static />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
            <Navigation isOpen={isNavigationPopupOpen} onClose={closePopup} />
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
