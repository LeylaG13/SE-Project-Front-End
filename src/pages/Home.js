import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import "../styles/Home.css";
import "../style.css";

import spy1 from "../media/sp1.png";
import spy2 from "../media/sp2.png";

export default function Home() {
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
                  <Link to="/gamepage" className="button">
                    Create Room
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Link to="/login" className="button">
                    Log In
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="/signup" className="button">
                    Sign Up
                  </Link>
                </div>
              </div>
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
}
