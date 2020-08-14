import React, { Component } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Hero}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
