import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Adaptive from "../../website/adaptive";
import Static from "../../website/statics";
// import { api } from "../utils/api";
import Main from "../Main/Main";
// import ProtectedRouteElement from "./ProtectedRoute";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="layout">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/adaptive" element={<Adaptive />} />
            <Route path="/static" element={<Static />} />
            {/* <Route
              path="/signup"
              element={<Register onInfoAuth={openInfoTooltip} />}
            />
            <Route
              path="/signin"
              element={
                <Login handleLogin={handleLogin} onInfoAuth={openInfoTooltip} />
              }
            /> */}
            {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
