import React from "react";
import "../style.css";
import Row from "./Row";
import Menu from "../components/Menu";

// var data = [{}];
// for (var i = 0; i < 10; i++) {
//   data[i] = {
//     number: i,
//     name: "Name",
//     total: Math.floor(Math.random() * 1000),
//     wins: Math.floor(Math.random() * 1000),
//     losses: Math.floor(Math.random() * 100),
//     rank: "queen",
//     score: Math.floor(Math.random() * 1000),
//   };
// }
const data = [
  {
    number: 0,
    name: "Name",
    total: 631,
    wins: 440,
    losses: 13,
    rank: "queen",
    score: 749,
  },
  {
    number: 1,
    name: "Name",
    total: 456,
    wins: 250,
    losses: 21,
    rank: "queen",
    score: 779,
  },
  {
    number: 2,
    name: "Name",
    total: 816,
    wins: 659,
    losses: 33,
    rank: "queen",
    score: 795,
  },
  {
    number: 3,
    name: "Name",
    total: 793,
    wins: 747,
    losses: 39,
    rank: "queen",
    score: 38,
  },
  {
    number: 4,
    name: "Name",
    total: 40,
    wins: 336,
    losses: 63,
    rank: "queen",
    score: 89,
  },
  {
    number: 5,
    name: "Name",
    total: 560,
    wins: 516,
    losses: 25,
    rank: "queen",
    score: 88,
  },
  {
    number: 6,
    name: "Name",
    total: 800,
    wins: 462,
    losses: 1,
    rank: "queen",
    score: 435,
  },
  {
    number: 7,
    name: "Name",
    total: 197,
    wins: 246,
    losses: 78,
    rank: "queen",
    score: 613,
  },
  {
    number: 8,
    name: "Name",
    total: 234,
    wins: 933,
    losses: 55,
    rank: "queen",
    score: 52,
  },
  {
    number: 9,
    name: "Name",
    total: 93,
    wins: 98,
    losses: 39,
    rank: "queen",
    score: 535,
  },
];

console.log(data);
const Rank = () => {
  const table_body = (data) => {
    data.map((element, i) => {
      console.log("mewo", element.wins);
      return (
        <tr key={i}>
          <td>{element.number}</td>
          <td>{element.name}</td>
          <td>{element.total}</td>
          <td>{element.wins}</td>
          <td>{element.losses}</td>
          <td>{Math.floor((element.wins * 100) / element.total)}</td>
          <td> {element.rank}</td>
          <td>{element.score} </td>
        </tr>
      );
    });
  };
  var meow = table_body(data);
  return (
    <div>
      <Menu />
      <h1> Leader Board</h1>
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
          <tbody>
            {/* {meow} */}
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Hello</td>
              <td>500</td>
              <td>500</td>
              <td>0</td>
              <td> Queen</td>
              <td>2000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <Row
        number={1}
        name="Monica"
        total={582}
        wins={549}
        losses={33}
        rank="Queen"
        score={1867}
      /> */}
    </div>
  );
};
export default Rank;
