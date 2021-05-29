import React, { useState, useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import Avatar from "avataaars";
import Menu from "../components/Menu";
import "./Profile.css";
import avatarImage1 from "../media/avatar1.png";
import avatars from "./avatars/avatars";

import {
  AreaChart,
  linearGradient,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import { Link } from "react-router-dom";

const Profile = () => {
  // const data = [
  //   { quarter: 1, earnings: 13000 },
  //   { quarter: 2, earnings: 16500 },
  //   { quarter: 3, earnings: 14250 },
  //   { quarter: 4, earnings: 19000 },
  // ];
  const [avatar, setAvatar] = useState(0);
  const [user, setUser] = useContext(ProfileContext);
  const [edit, setEdit] = useState(0);
  console.log(user);

  const data = [
    {
      name: "January",
      wins: 4000,
      losses: 2400,
      amt: 2400,
    },
    {
      name: "February",
      wins: 3000,
      losses: 1398,
      amt: 2210,
    },
    {
      name: "March",
      wins: 2000,
      losses: 9800,
      amt: 2290,
    },
    {
      name: "April",
      wins: 2780,
      losses: 3908,
      amt: 2000,
    },
    {
      name: "May",
      wins: 1890,
      losses: 4800,
      amt: 2181,
    },
    {
      name: "June",
      wins: 2390,
      losses: 3800,
      amt: 2500,
    },
    {
      name: "July",
      wins: 3490,
      losses: 4300,
      amt: 2100,
    },
  ];

  const onClickRight = () => {
    if (avatar < 19) {
      setAvatar(avatar + 1);
    } else {
      setAvatar(0);
    }
    console.log(avatar);
  };

  const onClickEdit = () => {
    if (edit === 1) {
      setEdit(0);
    } else {
      setEdit(1);
    }
  };
  const onClickLeft = () => {
    if (avatar > 0) {
      setAvatar(avatar - 1);
    } else if (avatar == 0) {
      setAvatar(19);
    } else {
      setAvatar(0);
    }
    console.log(avatar);
  };

  const handleChange = (event) => {
    let newState = Object.assign({}, user); // creating a copy of the state
    newState[event.target.name] = event.target.value; // changing the value we want
    setUser(newState); // passing it to state
    console.log(event.target.value);
  };

  const complete = (e) => {
    e.preventDefault();

    // send to backend
  };
  var avatar_edit_buttons = (
    <div class="ui buttons">
      <button
        className="ui tiny circular icon button avatar_button"
        onClick={onClickLeft}
      >
        <i class="left arrow icon"></i>
      </button>
      <button
        className="ui tiny circular icon button avatar_button"
        onClick={onClickRight}
      >
        <i class="right arrow icon"></i>
      </button>
    </div>
  );

  var final = (
    <div>
      <div className="row name">
        <div className="col">
          <div>
            <h1>{user.name}</h1> {/* DYNAMIC */}
          </div>
        </div>
      </div>
      <div className="row email">
        <div className="col">
          <div className="">
            <h2>{user.email}</h2> {/* DYNAMIC */}
          </div>
        </div>
      </div>
      <div className="row description">
        <div className="col">
          <div className="">
            <p>Score: 54913 points</p>
          </div>
        </div>
      </div>
    </div>
  );

  var editable = (
    <div>
      <div className="row name">
        <div className="col">
          <div>
            <input
              name="name"
              className="name-edit"
              value={user.name}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row email">
        <div className="col">
          <div className="">
            <h2>{user.email}</h2> {/* DYNAMIC */}
          </div>
        </div>
      </div>{" "}
    </div>
  );

  return (
    <div id="whole_page_div">
      <Menu />
      <div className="container">
        <div className="row" id="firstrow">
          <div className="col-md-4 col-s-12 avatar shape">
            <div className="row">
              <div className="col avatar-image">
                {avatars[avatar]}
                {edit === 1 ? avatar_edit_buttons : null}
                {/* <img src={avatarImage1} alt="user avatar" /> DYNAMIC */}
              </div>
            </div>

            {edit === 1 ? editable : final}
            <div className="row">
              <div className="col">
                <button className="edit-button" onClick={(e) => onClickEdit()}>
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7 stats shape">
            <div className="stats-title">
              <h3>User Stats</h3>
            </div>

            <AreaChart
              className="chart"
              width={400}
              height={200}
              data={data}
              margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9933ff" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#9933ff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff0066" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ff0066" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fill: "white" }} />
              <YAxis tick={{ fill: "white" }} />
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <Tooltip />
              <Area
                type="monotone"
                dataKey="wins"
                stroke="#9933ff"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="losses"
                stroke="#ff0066"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
            <div className="figures">
              <div className="figure-wrappers">
                <div>
                  <h6>Wins</h6>
                  <p>{user.wins}</p>
                </div>
                <div>
                  <h6>Losses</h6>
                  <p>{user.losses}</p>
                </div>
                <div>
                  <h6>Total games</h6>
                  <p>{user.total}</p>
                </div>
              </div>
              <div className="figure-wrappers">
                <div>
                  <h6>Total Points</h6>
                  <p>{user.total}</p>
                </div>
                <div>
                  <h6>Title</h6>
                  <p>{user.total}</p>
                </div>
                <div>
                  <h6>Rank</h6>
                  <p>{user.total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
