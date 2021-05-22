import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Modal from '../components/Modal'

import "../styles/Home.css";
import "../style.css";

import spy1 from "../media/sp1.png";
import spy2 from "../media/sp2.png";

export default function Home() {
  const [show, setShow] = useState(false);
  
  const showModal = () => {
    setShow(true);
  }

  const hideModal = () => {
    setShow(false);
    
  }
  return (
    <div>
      <div className="test">
        <Menu />
        <Modal show={show} handleClose={hideModal} className="modal">
          <p>Gameroom Link</p>
          <Link to="/gamepage" className="button">Start the Game</Link>
        </Modal>
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
                  <button className="button" onClick={showModal}>
                    Create Room
                  </button>
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
