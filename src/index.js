// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

//importar bootstrap
import "bootstrap/dist/css/bootstrap.css";

//importar estilos globales
import "./global.css";

//import el componente badge
// import Badge from "./components/Badge";

// import BadgeNew from "./pages/BadgeNew";
// import Badges from "./pages/Badges";
import App from "./components/App";

// const element = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
