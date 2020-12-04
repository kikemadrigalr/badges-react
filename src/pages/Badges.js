import React, { Component } from "react";
import "./styles/Badges.css";
import confLogo from "../images/platziconf-logo.svg";
// import Navbar from "../components/Navbar";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import PageLoading from "../components/PageLoading";
// import MiniLoader from "../components/MiniLoader";
import PageError from "../components/PageError";

//importar el archivo api, para manejar las peticiones http
import api from "../api";

class Badges extends Component {
  // state = {
  //   data: [
  //     {
  //       id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
  //       firstName: "Freda",
  //       lastName: "Grady",
  //       email: "Leann_Berge@gmail.com",
  //       jobTitle: "Legacy Brand Director",
  //       twitter: "FredaGrady22221-7573",
  //       avatarUrl:
  //         "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
  //     },
  //     {
  //       id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
  //       firstName: "Major",
  //       lastName: "Rodriguez",
  //       email: "Ilene66@hotmail.com",
  //       jobTitle: "Human Research Architect",
  //       twitter: "ajorRodriguez61545",
  //       avatarUrl:
  //         "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
  //     },
  //     {
  //       id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
  //       firstName: "Daphney",
  //       lastName: "Torphy",
  //       email: "Ron61@hotmail.com",
  //       jobTitle: "National Markets Officer",
  //       twitter: "DaphneyTorphy96105",
  //       avatarUrl:
  //         "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
  //     },
  //   ],
  // };

  // El constructor el es lugar o metodo indicado para
  //inicializar estado
  //es el primer metodo en ejecutarse al presentarse el componente
  //el componentes recibe props y con esto se inicializa la superclase
  constructor(props) {
    super(props);
    console.log("Paso 1: Constructo");

    //i nicializando estado en el constrcutor
    this.state = {
      loading: true, //para manejar el estado de la peticion
      error: null, //para manejar los errores en caso de que exista
      data: [], //inicializando el estado de los datos
    };
  }

  //ComponentDidMount es el lugar indicado para hacer peticiones http
  componentDidMount() {
    this.fetchData();

    //this.intervalId = setInterval(this.fetchData, 5000);
  }

  fetchData = async () => {
    //cuando se lance una peticion el estado sera cargando y no exitira error
    //si en algun momento sucedio un error o el loading cambio aqui se regresa a sus estados originales para lanzar la peticion
    this.setState({ loading: true, error: null });

    try {
      // const data = [];
      const data = await api.badges.list();

      //se cambia el estado loading a false para indicar que la peticion se realizó
      //y data a data que ya se tiene un arreglo con la data
      this.setState({ loading: false, data: data });
    } catch (error) {
      //en caso de error se cambia el estado loading a false, porque se supone se realizo la peticion
      // error cambia a error porque se produjo un error y se esta manejando
      this.setState({ loading: false, error: error });
    }
  };

  //este metodo se ejecuta cuando se actualiza el componente }
  //por algun cambio en el estado
  //recibe dos parametros, que son las props previas y el stado previo
  //a la actualizaion
  componentDidUpdate(prevProps, prevState) {
    console.log("Paso 5: ComponentDidUpdate");
    console.log({ prevProps: prevProps, prevState: prevState });
    console.log({ props: this.props, state: this.state });
  }

  //este metodo se ejecuta justo antes de que el componente sea desmontado
  //antes de que salga de escena
  //se utiliza para hacer limpiezas en la memoria, detener timeouts o intervalos
  componentWillUnmount() {
    console.log("Paso 6: componentWillUnmount");
    // clearTimeout(this.timeoutId);
    // clearTimeout(this.intervalId);
  }

  //el metodo render es el metodo donde se define el componente
  //yb es el metodo que se ejecuta justo luego del constructor,
  //es el que se encarga de mostrar el componente y
  //mostrar la actualizaciones cuando cambia el estado
  render() {
    //cuando el estado es cargando se muestra el mensaje
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    console.log("Paso 2/4: Render");
    return (
      <React.Fragment>
        {/* <Navbar /> */}

        {/* Hero */}
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        {/* Button Add Badge */}
        <div className="Badges__container">
          <div className="Badges__buttons">
            {/* <a href="/badges/new" className="btn btn-primary">
              New Badge
            </a> */}
            {/* al trabajar con react-router los elementos a se cambian por link
            esto cambia el comportamiento por default del elemento a y utiliza un prop to para
            especificar la ruta a la que se dirge */}
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        {/* Lista de Badges */}
        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
          {/* {this.state.loading && <MiniLoader />} */}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
