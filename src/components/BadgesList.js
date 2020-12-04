import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";

class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No se encontraron Badges</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create New Bagde
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
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
    );
  }
}

export default BadgesList;
