import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Menu from "../components/Menu";
import { LoginContext } from "../context/LoginContext";

import "../styles/Home.css";
import "../style.css";

import spy1 from "../media/sp1.png";
import spy2 from "../media/sp2.png";

const Home = ({ gameId, setGameId }) => {
  const { value1, value2, value3, value4 } = useContext(LoginContext);

  const [logedIn, setLogedIn] = value1;
  const [token, setToken] = value2;
  const [link, setLink] = useState("");

  var auth = `Token ${token}`;

  var strlink = "/gamepage/";
  // var roomnumber = Math.floor(Math.random() * 1000000);
  // strlink = strlink.concat(roomnumber);
  //  = (roomnumber = Math.floor(Math.random() * 1000000));
  // setGamePageId(roomnumber);
  // strlink = strlink.concat(roomnumber);

  const onLogOutClick = (e) => {
    setLogedIn(false);
  };

  useEffect(() => {
    if (gameId === "") {
      axios
        .post(
          `http://127.0.0.1:8000/api/gameroom-create`,
          { Status: "Start" },
          {
            headers: {
              Authorization: auth,
              // "Token a49e0e454ef9b7a9011a3c0b0d7a3a46152a9465",
            },
            mode: "cors",
          }
        )
        .then((resp) => {
          console.log(resp.data);
          setGameId(resp.data.id);
          strlink = strlink.concat(resp.data.id);
          console.log(strlink);
          setLink(strlink);
          // console.log(resp.data.id);
          // setstatsData(resp.data);
          // console.log(resp.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  // useEffect(() => {
  //   setGamePageId(roomnumber);
  // });
  // console.log(strlink);
  // const onCreateRoomClick = (e) => {

  //   roomnumber = Math.floor(Math.random() * 1000000);
  //   setGamePageId(roomnumber);

  //   roomnumber = str.concat(roomnumber);
  // };
  // useEffect(() => {
  //   var strlink = "/gamepage/";
  //   var roomnumber = Math.floor(Math.random() * 1000000);
  //   strlink = strlink.concat(roomnumber);
  //   setGamePageId(strlink);
  //   setLink(strlink);
  // }, [click]);

  return (
    <div>
      <div className="test">
        <Menu />

        <div className="container">
          <div className="row firstrow">
            <div className="col-md-12">
              <h1>Codenames Online</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="image-box1">
                <img id="sp1" src={spy1} alt="spy one" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="first row">
                <div className="col-md-12">
                  <Link
                    to={logedIn === true ? `/gamepage/${gameId}` : `/signin`}
                    className="button"
                    // onClick={(e) => {
                    //   setClicked(click + 1);
                    // }}
                    // onClick={(e) => onCreateRoomClick(e)}
                  >
                    Create Room
                  </Link>
                </div>
              </div>
              {!logedIn ? (
                <div className="row">
                  <div className="col-md-6">
                    <Link to="/signin" className="button">
                      Log In
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <Link to="/signup" className="button">
                      Sign Up
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="col-md-12">
                  <Link
                    to="#"
                    className="button"
                    onClick={(e) => onLogOutClick(e)}
                  >
                    Log out{" "}
                  </Link>
                </div>
              )}
            </div>
            <div className="col-md-3">
              <div className="image-box2">
                <img src={spy2} alt="spy two" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
