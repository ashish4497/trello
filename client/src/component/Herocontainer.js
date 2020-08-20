import React, { Component } from "react";
import TrelloBoard from "./TrelloBoard";
import TrelloRecentViews from "./TrelloRecentViews";

export default class Herocontainer extends Component {
  render() {
    return (
      <div className="grid-col-2 container padding">
        <div className="col-1">
          <TrelloBoard />
        </div>
        <div className="col-2">
          <TrelloRecentViews />
        </div>
      </div>
    );
  }
}
