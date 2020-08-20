import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TrelloBoard extends Component {
  render() {
    return (
      <>
        <div className="container padding">
          <div className="dashboard_list">
            <ul>
              <li>
                <Link to="#">
                  <i className="fab fa-trello"></i>Boards
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-trello"></i>Templates
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-home"></i>Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
