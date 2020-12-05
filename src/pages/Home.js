import React from "react";
import "./styles/Home.css";
import HomeLogo from "../images/platziconf-logo.svg";
import HomeImg from "../images/astronauts.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div className="Home__container">
        <div className="row Home__row">
          <div className="col-md-12 col-lg-4 Home__col">
            <img className="img-fluid" src={HomeLogo} alt="Logo" />
            <h3>Print your Badge</h3>
            <Link to="/badges" className="btn btn-primary">
              Start
            </Link>
          </div>
          <div className="col-md-12 col-lg-8">
            <img className="img-fluid" src={HomeImg} alt="Banner" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
