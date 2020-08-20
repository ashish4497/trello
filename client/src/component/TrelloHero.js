import React, { Component } from "react";
import { Link } from "react-router-dom";
import Herocontainer from "./Herocontainer";

class TrelloHero extends Component {
  render() {
    return (
      <>
        <div className="trello_header ">
          <nav className="flex padding ">
            <div className="left_side">
              <ul className="flex">
                <li className="bg-box">
                  <Link to="#">
                    <i className="fas fa-home"></i>
                  </Link>
                </li>
                <li className="bg-box">
                  <Link to="#">
                    <i className="fab fa-trello"></i>
                    <span className="text"> Boards</span>
                  </Link>
                </li>
                <li className="bg-box">
                  <input type="text" className="search-box" />
                </li>
              </ul>
            </div>
            <div className="header_logo">
              <Link to="#">
                <i className="fab fa-trello"></i> Boards
              </Link>
            </div>
            <div className="right_side">
              <ul className="flex">
                <li className="bg-box">
                  <Link to="#">
                    <i className="fas fa-plus"></i>
                  </Link>
                </li>
                <li className="bg-box">
                  <Link to="#">
                    <i className="fab fa-bell"></i> Boards
                  </Link>
                </li>
                <li className="bg-box">
                  <Link to="#">
                    <i className="fas fa-user"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="trello_hero_container">
          <div className="container padding">
            <Herocontainer />
          </div>
        </div>
      </>
    );
  }
}

export default TrelloHero;
