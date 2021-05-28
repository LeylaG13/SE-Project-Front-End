import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../components/Menu";
import { Redirect } from "react-router-dom";
import "../style.css";
import "./register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState(0);
  const [success, setSuccess] = useState(0);
  const [click, setClick] = useState(0);

  // var click = 0;
  useEffect(() => {
    if (Object.keys(email).length !== 0) {
      axios
        .post("http://127.0.0.1:8000/api/signup", {
          username: username,
          email: email,
          password: password,
        })
        .then(
          (response) => {
            // setSuccess(1);
            // setEmail(response.data.user.email); // jst in case if response from server is smth different
            console.log(response);
            <Redirect to="/" />;
          },
          (error) => {
            setError(1);
            console.log(error);
          }
        );
    }
  }, [click]);

  // const onRegisterClick = (e) => {
  //   // e.preventDefault();
  //   setClick(1);
  //   // await timeout(1000);
  //   // setData({
  //   //   username: username,
  //   //   email: email,
  //   //   password: password,
  //   // });
  //   // console.log(data);
  // };
  const onClick = (event) => {
    event.preventDefault();
    // click = 1;
    setClick(1);
  };

  return (
    <div>
      <Menu />
      <h1 id="firsth1"> Register</h1>
      <div>
        <div id="registerdiv">
          {success === 1 ? (
            <h3>
              Succesfully registered, please check email " {email} " for
              confirmation link{" "}
            </h3>
          ) : null}
          {errors === 1 ? (
            <h3> Oops something went wrong please try again....</h3>
          ) : null}

          <form>
            <div>
              <label htmlFor="email" className="preg">
                Email
              </label>
              <input
                type="email"
                id="idemail"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="username" className="preg">
                Username
              </label>
              <input
                type="text"
                id="idusername"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
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
                value={password}
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
