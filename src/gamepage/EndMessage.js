import React from "react";
import "./EndMessageStyle.css";

const EndMessage = ({ pointsBlue, pointsRed }) => {
  var sign_blue = pointsBlue > 0 ? "+" : "";
  var sign_red = pointsRed > 0 ? "+" : "";
  return (
    <div id="forbackground">
      <h1> The Game Has Ended</h1>
      <div id="boxdiv">
        <h2 id="blue">
          Blue Team scored: {sign_blue}
          {pointsBlue} points
        </h2>
        <h2 id="red">
          Red Team scored: {sign_red}
          {pointsRed} points
        </h2>
        <button class="ui inverted huge white button"> Go to Home Page </button>
      </div>
    </div>
  );
};

export default EndMessage;
