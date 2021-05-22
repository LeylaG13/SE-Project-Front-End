import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Menu from "../components/Menu";

import { LoginContext } from "../context/LoginContext";


const Login = (setToken, setUser) => {
  var user = {};
  var token = "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setError] = useState(0);
  // const [success, setSuccess] = useState(0);
  const [click, setClick] = useState(0);

  const [logedIn, setLogedIn] = useContext(LoginContext);
  // var click = 0;
  useEffect(() => {
    if (Object.keys(email).length !== 0) {
      axios
        .post("http://127.0.0.1:8000/api/signin", {
          email: email,
          password: password,
        })
        .then(
          (response) => {
            console.log(response.data);
            user.id = response.data.user.id;
            user.username = response.data.user.username;
            user.email = response.data.user.email;
            token = response.data.token;
            setUser(user);
            setToken(token);
            setLogedIn(true);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [click]);

  const onClick = (event) => {
    // click = 1;
    event.preventDefault();
    setClick(1);
  };

  return (
    <div>
      <Menu />
      <h1> Sign In</h1>
      <div>
        <div id="registerdiv">
          <form>
            <div>
              <label htmlFor="email" className="preg">
                Email
              </label>
              <input
                type="email"
                id="idemail"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="password" className="preg">
                Password
              </label>
              <input
                type="password"
                id="idpassword"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              className="ui big inverted button"
              onClick={(e) => onClick(e)}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
