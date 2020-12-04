import React from "react";
import "./styles/Navbar.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <header className="Navbar">
        <div className="container-fluid">
          <Link to="/" className="Navbar__brand">
            <img src={logo} className="Navbar__brand-logo" alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </header>
    );
  }
}

export default Navbar;
