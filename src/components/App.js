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
import { connection } from "websocket";

const App = () => {
  const { value1, value2, value3 } = useContext(LoginContext);
  const [logedIn, setLogedIn] = value1;
  const [token, setToken] = value2;
  const [user, setUser] = value3;

  const [ws, setWs] = useState(null);

  let timeout = 250; // 250ms

  useEffect(() => {
    connect();

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

  const connect = () => {
    var ws = new WebSocket("ws://localhost:3000/ws");
    var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
        console.log("connected websocket main component");

        // this.setState({ ws: ws });
        setWs(ws);

        timeout = 250; // reset timer to 250 on open of websocket connection 
        clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    // websocket onclose event listener
    ws.onclose = e => {
        console.log(
            `Socket is closed. Reconnect will be attempted in ${Math.min(
                10000 / 1000,
                (timeout + timeout) / 1000
            )} second.`,
            e.reason
        );

        timeout = timeout + timeout; //increment retry interval
        connectInterval = setTimeout(check, Math.min(10000, timeout)); //call check function after timeout
    };

    // websocket onerror event listener
    ws.onerror = err => {
        console.error(
            "Socket encountered error: ",
            err.message,
            "Closing socket"
        );

        ws.close();
    };
};

/**
 * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
 */
const check = () => {
    if (!ws || ws.readyState === WebSocket.CLOSED) connect(); //check if websocket instance is closed, if so call `connect` function.
};


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/leaderboard" component={Rank} />
        <Route path="/signup" component={Register} />
        {/* <Route path="/signin" component={Login} /> */}
        <Route path="/signin" component={() => <Login />} />
        <Route path="/gamepage" component={()=> <GamePage websocket={ws}/>} />
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
