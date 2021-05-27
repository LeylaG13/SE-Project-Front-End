import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Menu from "../components/Menu";

import { LoginContext } from "../context/LoginContext";

import './login.css'

export const validateInput = (str="") => str.includes("@"); // email validation

const Login = () => {
  var user_local = {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setError] = useState(0);
  // const [success, setSuccess] = useState(0);
  const [click, setClick] = useState(0);

  const { value1, value2, value3 } = useContext(LoginContext);
  const [logedIn, setLogedIn] = value1;
  const [token, setToken] = value2;
  const [user, setUser] = value3;
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
            user_local.id = response.data.user.id;
            user_local.username = response.data.user.username;
            user_local.email = response.data.user.email;
            setUser(user_local);
            setToken(response.data.token);
            setLogedIn(true);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [click]);

  if(logedIn){
    console.log('Redirecting..')
    return <Redirect to='/' />
  }

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
              <label htmlFor="email" className="preg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            {email && click && !validateInput(email) ? <p>Invalide Email</p>: null}

            <div>
              <label htmlFor="password" className="preg">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              className="ui big inverted button"
              onClick={(e) => onClick(e)}
            >Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
