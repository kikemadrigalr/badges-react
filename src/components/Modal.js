import React from "react";
import ReactDOM from "react-dom";
//ReactDom para hacer udo del metodo createPortal

import "./styles/Modal.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          <i className="fas fa-times"></i>
        </button>
        {/* Este es un modal generico, 
      el usar children permitira acceder a su contenido
      haciendo composicion para crear un componente especializado 
      partiendo de uno generico */}
        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
