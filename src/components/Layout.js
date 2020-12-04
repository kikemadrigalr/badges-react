import React from "react";
import Navbar from "../components/Navbar";

//Layout recibe los elementos que va a mostrar pertenecientes a otras rutas u otros componentes
//como props especificamente en props.children
function Layout(props) {
  // const children = props.children;
  return (
    //React.Fragment permite hacer las inserciones de los elementos que devuelve react
    //en lugar de devolver div contenedores vacios
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
