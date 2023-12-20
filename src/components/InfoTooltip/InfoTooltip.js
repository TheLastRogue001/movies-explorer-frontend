import React from "react";

function InfoTooltip({ isOpen, onClose, title, src }) {
  return (
    <div className={`popup popup_auth ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__info">
        <img className="popup__img-info" alt="Info" src={src} />
        <h2 className="popup__title popup__title_font-size">{title}</h2>
        <button
          onClick={onClose}
          aria-label="Close"
          type="button"
          className="popup__close popup__close_info"
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
