import React from "react";
//import React {Component} from "react";
//tambien se puede importan component en la misma instruccion junto react

//importar estilos css para el componente
import "./styles/Badge.css";

//importar una imagen para utilizarla en el componente
import confLogo from "../images/badge-header.svg";
import Gravatar from "../components/Gravatar";

class Badge extends React.Component {
  render() {
    //todo componente debe tener el metodo render
    return (
      //this.props es el objeto donde se encuentran las propiedades que se le pasan al componente
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>

          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
