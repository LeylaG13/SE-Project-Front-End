import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

import Menu from "../components/Menu";
import "./Profile.css";
import avatarImage1 from "../media/avatar1.png";

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

  const [user, setUser] = useContext(ProfileContext);
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

  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-s-12 avatar shape">
            <div className="row">
              <div className="col avatar-image">
                <img src={avatarImage1} alt="user avatar" /> {/* DYNAMIC */}
              </div>
            </div>
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
                  <p>{user.description}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                
                  <Link className="edit-button" to="/profile/edit">Edit</Link>
                
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
                  <p >{user.wins}</p>
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