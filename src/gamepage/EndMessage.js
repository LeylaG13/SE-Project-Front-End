import React from "react";
import { useHistory, Link } from "react-router-dom";

import "./EndMessageStyle.css";

const EndMessage = ({ pointsBlue, pointsRed }) => {
  let history = useHistory();
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
        <Link
          // onClick={(e) => {
          //   onClicked(e);
          // }}
          // href = "/"
          to="/"
          className="ui inverted huge white button"
        >
          {" "}
          Go to Home Page{" "}
        </Link>
      </div>
    </div>
  );
};

export default EndMessage;
