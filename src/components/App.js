import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ProfileProvider } from "../context/ProfileContext";
import { LoginProvider } from "../context/LoginContext";
import { GameProvider } from "../context/GameContext";
import { CardsProvider } from "../context/CardsContext";

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
  // const [token, setToken] = useState("");
  // const [user, setUser] = useState({});
  const [gamePageId, setGamePageId] = useState("");

  return (
    <BrowserRouter>
      <Switch>
        <LoginProvider>
          <Route
            exact
            path="/"
            component={() => <Home setGamePageId={setGamePageId} />}
          />
          <Route path="/about" component={About} />
          <Route exact path="/leaderboard" component={Rank} />
          <Route path="/signup" component={Register} />
          {/* <Route path="/signin" component={Login} /> */}
          <Route
            path="/signin"
            // component={() => <Login setToken={setToken} setUser={setUser} />}
            component={Login}
          />
          <Route
            path="/gamepage/:id"
            component={GamePage}
            // component={() => <GamePage gamePageId={gamePageId} />}
          />
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
        </LoginProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
