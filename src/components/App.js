import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import { ProfileProvider } from "../context/ProfileContext";
import { GameProvider } from "../context/GameContext";
import { CardsProvider } from "../context/CardsContext";
import { LoginContext } from "../context/LoginContext";

import "../style.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../registration/Register";
import Login from "../Login/Login";
import Rank from "../ranking/Rank";
import GamePage from "../gamepage/GamePage";
import Profile from "../profile/Profile";
import Menu from "./Menu";
import ProfileEdit from "../profile/ProfileEdit";
import Draft from "./Draft";

const App = () => {
  const { value1, value2, value3 } = useContext(LoginContext);
  const [logedIn, setLogedIn] = value1;
  const [user, setUser] = value3;

  useEffect(() => {
    axios
      .get("http://localhost:8000/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && !logedIn) {
          setLogedIn(true);
          setUser(response.data.user);
        } else {
          if (!response.data.logged_in && logedIn) {
            setLogedIn(false);
            setUser({});
          }
        }
      });
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/leaderboard" component={Rank} />
        <Route path="/signup" component={Register} />
        {/* <Route path="/signin" component={Login} /> */}
        <Route path="/signin" component={() => <Login />} />
        <Route path="/gamepage" component={GamePage} />
        <ProfileProvider>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/edit" component={ProfileEdit} />
        </ProfileProvider>
        <Route path="/menu" component={Menu} />
        <GameProvider>
          <CardsProvider>
            <Route path="/draft" component={Draft} />
          </CardsProvider>
        </GameProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
