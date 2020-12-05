import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgeDetails.css";
import logo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

//custom hooks
//los custom hooks siempre usan la palabra use en su definicion
function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
}

function BadgeDetails(props) {
  //hooks
  //useState devuelve dos argumentos que seran recibidos
  //en los corchetes, ya que regresa un arreglo
  // este estado se inicializa con el argumento que se le pasa a useState
  // const [count, setCount] = React.useState(0)
  const [count, setCount] = useIncreaseCount(4);
  const badge = props.badge;
  // const count = 3;
  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col-6 BadgeDetails__buttons">
            <h2>Actions</h2>
            <div>
              <button
                onClick={() => {
                  //se estado usando el hook para cambiar este estado
                  //no usa el estado del componente class
                  setCount(count + 1);
                }}
                className="btn btn-primary mr-4 mb-4"
              >
                Increase Count: {count}
              </button>
            </div>
            <div>
              <Link
                className="btn btn-primary mb-4"
                to={`/badges/${badge.id}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>

              {/* Crear un modal usando portales con ReactDOM.createPortal 
                el portal se crea en un nodo html aparte al del app en el archivo
                index.html de public 
                createProtal recibe dos argumentos
                el primer es que se va a renderizar
                el segundo es donde se va a renderizar
                ReactDOM.createPortal(que, donde)*/}
              {/* {ReactDOM.createPortal(
    <h1>Hola, soy un Modal</h1>,
    document.getElementById("modal")
  );} */}

              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
