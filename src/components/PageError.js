import React from "react";
import "./styles/PageError.css";
import imgError from "../images/500 Internal Server Error-bro.svg";

function PageError(props) {
  return (
    <div className="PageError">
      <img className="PageError__img img-fluid" src={imgError} alt="Error" />
      {props.error.message}
    </div>
  );
}

export default PageError;
