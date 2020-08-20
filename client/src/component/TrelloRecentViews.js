import React, { Component } from "react";

export default class TrelloRecentViews extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="recent_view  padding">
            <h2>Recently View</h2>
            <div className="view_board">
              <h4>new board</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}
