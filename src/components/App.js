import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../style.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../registration/Register";
import Rank from "../ranking/Rank";
import GamePage from "../gamepage/GamePage";
import Profile from "../profile/Profile";
import Menu from "./Menu";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/leaderboard" component={Rank} />
          <Route path="/signup" component={Register} />
          <Route path="/gamepage" component={GamePage} />
          <Route path="/profile" component={Profile} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </BrowserRouter>
    );
  }
}
