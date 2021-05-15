import React from "react";
import "../style.css";
import "./ranking.css";

function Row({ number, name, total, wins, losses, rank, score }) {
  return (
    <div class="rowdiv ui grid">
      <div class="one wide column">
        <h3 class="hrow"> #{number}</h3>
      </div>
      <div class="two wide column">
        {" "}
        <h3 class="hrow">{name}</h3>
      </div>
      <div class="two wide column">
        <h3 class="hrow"> {total}</h3> {/* total */}
      </div>
      <div class="two wide column">
        <h3 class="hrow"> {wins}</h3> {/* wins*/}
      </div>
      <div class="two wide column">
        <h3 class="hrow"> {losses}</h3> {/* losses*/}
      </div>
      <div class="two wide column">
        <h3 class="hrow"> {Math.floor((wins * 100) / total)}%</h3>{" "}
        {/* win rate*/}
      </div>
      <div class="two wide column">
        <h3 class="hrow"> {rank}</h3> {/* rank */}
      </div>
      <div class="two wide column">
        <h3 class="hrow"> {score}</h3> {/* score*/}
      </div>
    </div>
  );
}
export default Row;
