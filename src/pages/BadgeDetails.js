import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgeDetails.css";
import logo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function BadgeDetails(props) {
  const badge = props.badge;
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
