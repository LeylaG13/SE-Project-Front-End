import React from "react";

import Menu from "../components/Menu";
import "./Profile.css";
import avatarImage1 from "../media/avatar1.png";

import {
  AreaChart,
  linearGradient,
  XAxis,
  YAxis,
  CartesianAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const Profile = () => {
  // const data = [
  //   { quarter: 1, earnings: 13000 },
  //   { quarter: 2, earnings: 16500 },
  //   { quarter: 3, earnings: 14250 },
  //   { quarter: 4, earnings: 19000 },
  // ];

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
                  <h1>Sarkhan</h1> {/* DYNAMIC */}
                </div>
              </div>
            </div>
            <div className="row email">
              <div className="col">
                <div className="">
                  <h2>sarkhanjafarli12@gmail.com</h2> {/* DYNAMIC */}
                </div>
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
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
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
            {/* <div className="stats-games">
            <h4>Total Games</h4>
            <ul>
              <li>241</li>
            </ul>
            <h4>Losses</h4>
            <ul>
              <li>239 </li>
            </ul>
            <h4>Wins</h4>
            <ul>
              <li>2 </li>
            </ul>
          </div>
          <div className="stats-user">
            <h4>Points</h4>
            <h4>Rank</h4>
            <h4>Leaderboard Place</h4>
          </div> */}
            {/* <VictoryBar
            data={data}
            // data accessor for x values
            x="quarter"
            // data accessor for y values
            y="earnings"
          /> */}
          </div>
          {/* DYNAMIC */}

          {/* <div className="col-md-2 friends-list shape">
            <h3>Friends (231)</h3>
            <div className="friends-list-entry">Leyla</div>
            <div className="friends-list-entry">Mahira</div>
            <div className="friends-list-entry">Laman</div>
            <div className="friends-list-entry">Maryam</div>
            {/* <div className="button friends-list-button">
            More
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
