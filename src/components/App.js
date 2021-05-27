import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import { ProfileProvider, ProfileContext } from "../context/ProfileContext";
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
import { connection } from "websocket";

const App = () => {
  const { value1, value2, value3 } = useContext(LoginContext);
  const [logedIn, setLogedIn] = value1;
  const [token, setToken] = value2;
  const [user, setUser] = value3;

  // const [ws, setWs] = useState(null);

  // let timeout = 250; // 250ms

  // useEffect(() => {
  //   // connect();

  //   axios  
  //     .get("http://localhost:8000/logged_in", { withCredentials: true })
  //     .then((response) => {
  //       if (response.data.logged_in && !logedIn) {
  //         setLogedIn(true);
  //         setUser(response.data.user);
  //         setToken(response.data.token); // token
  //       } else {
  //         if (!response.data.logged_in && logedIn) {
  //           setLogedIn(false);
  //           setUser({});
  //         }
  //       }
  //     });
  // }, []);




  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/leaderboard" component={Rank} />
        <Route path="/signup" component={Register} />
        {/* <Route path="/signin" component={Login} /> */}
        <Route path="/signin" component={() => <Login />} />
        <GameProvider>
          <CardsProvider>
            <Route path="/gamepage" component={(ws)=> <GamePage websocket={ws}/>} />
          </CardsProvider>
        </GameProvider>
        <ProfileProvider>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/edit" component={ProfileEdit} />
        </ProfileProvider>
        <Route path="/menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
