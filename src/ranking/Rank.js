import React, { useState, useEffect, useContext } from "react";
import "../style.css";
import "./ranking.css";
import axios from "axios";
import Menu from "../components/Menu";
import { LoginContext } from "../context/LoginContext";

const Rank = () => {
  const [data, setData] = useState([]);
  const { value1, value2, value3 } = useContext(LoginContext);
  const [token, setToken] = value2;
  var auth = `Token ${
    token !== "" ? token : `a49e0e454ef9b7a9011a3c0b0d7a3a46152a9465`
  } `;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/leaderboard", {
        headers: {
          Authorization: auth,
        },
        mode: "cors",
      })
      .then((resp) => {
        // console.log(resp.data);
        setData(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  var table_body = [];
  // console.log(data);
  if (data.length !== 0) {
    table_body = data.map((element, i) => {
      return (
        <tr>
          <th>{i}</th>
          <th>{element.username}</th>
          <th>{element.games_won + element.games_lost}</th>
          <th>{element.games_won}</th>
          <th>{element.games_lost}</th>
          <th>{element.rank}</th>
          <th>{element.score}</th>
        </tr>
      );
    });
  }
  return (
    <div>
      <Menu />
      <h1 id="firsth1"> Leader Board</h1>
      <div id="table_div">
        <table className="ui selectable inverted celled table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Total</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Rank</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{table_body}</tbody>
        </table>
      </div>
    </div>
  );
};
export default Rank;
