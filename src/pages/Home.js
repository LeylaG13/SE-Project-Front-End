import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { LoginContext } from "../context/LoginContext";

import "../styles/Home.css";
import "../style.css";

import spy1 from "../media/sp1.png";
import spy2 from "../media/sp2.png";

const Home = ({ setGamePageId }) => {
  const { value1, value2, value3 } = useContext(LoginContext);
  const [logedIn, setLogedIn] = value1;
  const [click, setClicked] = useState(0);
  const [link, setLink] = useState("");
  var strlink = "/gamepage/";
  var roomnumber = Math.floor(Math.random() * 1000000);
  strlink = strlink.concat(roomnumber);
  //  = (roomnumber = Math.floor(Math.random() * 1000000));
  // setGamePageId(roomnumber);
  // strlink = strlink.concat(roomnumber);

  const onLogOutClick = (e) => {
    setLogedIn(false);
  };

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
                    to={logedIn === true ? strlink : `/signin`}
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
