import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";

//custom Hook
//este se usara para empaquetar todo lo referente al filtrado de los badges
function useSearchBadges(badges) {
  //hook
  //este hook se utilizara para tomar el valor del input mediante el evento onChange
  //y pasarselo al value
  //use state devuelve los valor state y setState estos se pueden renombrar
  // en este caso seran query para referirse a lo que se escribe en el input
  //

  const [query, setQuery] = React.useState("");

  //para manejar los resultados de las busquedas en el fltro de busquedas
  const [filteredBadges, setfilteredBadges] = React.useState(badges);

  //funcion para el filtrado de los badges
  //se esta utilizando un hook de react que se llama useMemo
  //este guardara las coincidencias de lo que se este filtrando,
  //cuando sea por primera vez, para en una siguiente busqueda no calcular
  //nuevamentes esas mismas coincidencias sino las nuevas
  // es decir, si buscas algo que ya se habia buscado react no tiene que volver
  //repetir esa busqueda porque ya la tiene hecha solo la regresa

  //useMemo recibe como primer argumento, una función
  //el segundo argumento sera un arreglo con dos posiciones
  //la lista de coincidencias que ya tenga memorizada, el query que se esta buscando
  React.useMemo(() => {
    const results = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setfilteredBadges(results);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            className="form-control"
            type="text"
            value={query} //toma el valor del query
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No se encontraron Badges</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create New Bagde
        </Link>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="BadgesList">
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            className="form-control"
            type="text"
            value={query} //toma el valor del query
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <ul className="list-unstyled">
          {filteredBadges.map((badge) => {
            return (
              <li key={badge.id}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <div className="BadgesListItem">
                    <Gravatar
                      className="BadgesListItem__avatar"
                      // src={badge.avatarUrl}
                      email={badge.email}
                      alt="Avatar"
                    />
                    <div className="BadgesListItem__info">
                      <p>
                        <b>
                          {badge.firstName} {badge.lastName}{" "}
                        </b>
                        <br />
                        {badge.jobTitle} <br />
                        <i className="fab fa-twitter"></i>
                        <a
                          target="Blank_"
                          rel="noopener"
                          href={`https://twitter.com/${badge.twitter}`}
                        >
                          @{badge.twitter}
                        </a>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default BadgesList;
