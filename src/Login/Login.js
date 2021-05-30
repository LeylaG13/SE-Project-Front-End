import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import Menu from "../components/Menu";

const Login = () => {
  var user_local = {};
  // var token = "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [click, setClick] = useState(0);
  let history = useHistory();

  const { value1, value2, value3, value4 } = useContext(LoginContext);
  const [logedIn, setLogedIn] = value1;
  const [token, setToken] = value2;
  const [user, setUser] = value3;
  const [used_id, setUserId] = value4;

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
            setUserId(response.data.user.id);
            setLogedIn(true);

            history.push("/");

            // <Redirect to="/" />;
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
    // return <Redirect to="/" />;
    setClick(1); // return <Redirect to="/" />;
  };

  return (
    <div>
      <Menu />
      <h1 id="firsth1"> Sign In</h1>
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
