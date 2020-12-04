import React from "react";
import "./styles/NotFound.css";
import NotFoundImg from "../images/404 Error-rafiki.svg";

function NotFound() {
  return (
    <React.Fragment>
      <div className="NotFounf__container">
        <img
          className="NotFound__img img-fluid"
          src={NotFoundImg}
          alt="Not Found"
        />
        <div className="NotFound__title">
          <h1>404: Not Found</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
