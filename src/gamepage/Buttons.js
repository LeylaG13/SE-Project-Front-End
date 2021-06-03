import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

var team_glob = 0;
var red_id = "";
var blue_id = "";

const Buttons = ({
  player,
  team,
  disabled,
  setPlayer,
  setTeam,
  setDisabled,
  setNumBlueSpy,
  setNumBlueOperatives,
  setNumRedSpy,
  setNumberRedOperative,
  setSocketSentCounter,
  numBlueSpy,
  numBlueOperative,
  numRedOperative,
  numRedSpy,
  playerId,
  setPlayerId,
  gameId,
}) => {
  const [teamBlueId, setTeamBlueId] = useState();
  const [teamRedId, setTeamRedId] = useState();
  const { value1, value2, value3, value4 } = useContext(LoginContext);
  const [token, setToken] = value2;
  const [user, setUser] = value3;
  const [user_id, setUserId] = value4;
  const [localGameId, setLocalGameId] = useState(gameId);

  useEffect(() => {
    var res = gameId;

    if (localGameId === 0 || localGameId === "") {
      var str = window.location.href;
      res = str.slice(31);
      setLocalGameId(res);
      // console.log("BUTTONS LOCAL ID");
    } else {
      if (team_glob === 0) {
        axios
          .post(
            `http://127.0.0.1:8000/api/team-create`,
            { color: "Blue", status: "None", game: res },
            {
              headers: {
                Authorization: `Token ${token}`,
              },
              mode: "cors",
            }
          )
          .then((resp) => {
            console.log("BLUE TEAM", resp.data);
            setTeamBlueId(resp.data.id);
            blue_id = resp.data.id;
          })
          .catch((error) => {
            console.error(error);
          });

        //////creating team red
        axios
          .post(
            `http://127.0.0.1:8000/api/team-create`,
            { color: "Red", status: "None", game: res },
            {
              headers: {
                Authorization: `Token ${token}`,
              },
              mode: "cors",
            }
          )
          .then((resp) => {
            console.log("RED TEAM", resp.data);
            setTeamRedId(resp.data.id);
            red_id = resp.data.id;
          })
          .catch((error) => {
            console.error(error);
          });
        team_glob++;
      }
    }
    console.log("IN USE EEFFECR RED", teamRedId);
  }, []);

  console.log(teamRedId);
  console.log(teamBlueId);

  const onClickTeam = (playertype, color) => {
    // console.log("onClickTeam");
    setPlayer(playertype);
    setTeam(color);
    setDisabled("disabled");
    if (playertype === "spymaster" && color === "blue") {
      setNumBlueSpy(numBlueSpy + 1);
      // numBlueSpy+=1;
    } else if (playertype === "spymaster" && color === "red") {
      setNumRedSpy(numRedSpy + 1);
    } else if (playertype === "operative" && color === "red") {
      setNumberRedOperative(numRedOperative + 1);
    } else if (playertype === "operative" && color === "blue") {
      setNumBlueOperatives(numBlueOperative + 1);
    }
    setSocketSentCounter((prev) => prev + 1);
    // setMoves(prev => prev-1);
    // console.log(player, team);
    // sendToSocket();
  };

  useEffect(() => {
    console.log(teamBlueId);
    console.log(teamRedId);
    if (
      playerId === 0 ||
      (playerId === "" &&
        player !== "" &&
        player !== 0 &&
        team !== 0 &&
        team !== "")
    ) {
      var playerType = "";
      var team_id = "";
      if (team === "blue") {
        // team_id = teamBlueId;
        team_id = blue_id;
      } else {
        team_id = red_id;
        // team_id = teamRedId;
      }

      if (player === "spymaster") {
        playerType = "Spymaster";
      } else {
        playerType = "Operative";
      }

      axios
        .post(
          "http://127.0.0.1:8000/api/player-create",
          { type: playerType, user: user_id, team: team_id },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
            mode: "cors",
          }
        )
        .then((resp) => {
          console.log("Created player", resp.data);
          setPlayerId(resp.data.id);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [player, team, teamBlueId, teamRedId]);

  console.log(teamRedId);
  console.log(teamBlueId);
  return (
    <div className="buttons">
      <div className="left">
        <button
          className={`redbutton ui ${
            player === "spymaster" && team === "blue" ? "" : `inverted`
          } small blue button  ${disabled}`}
          onClick={(e) => onClickTeam("spymaster", "blue")}
        >
          Join as spymaster
        </button>
        <button
          className={`redbutton  ui ${
            player === "operative" && team === "blue" ? "" : `inverted`
          } small blue button ${disabled}`}
          id="rightbutton"
          onClick={(e) => onClickTeam("operative", "blue")}
        >
          Join as operative
        </button>
      </div>

      <div className="right">
        <button
          className={`bluebutton  ui ${
            player === "spymaster" && team === "red" ? "" : `inverted`
          } small pink button ${disabled}`}
          onClick={(e) => onClickTeam("spymaster", "red")}
        >
          Join as spymaster
        </button>
        <button
          className={`bluebutton  ui ${
            player === "operative" && team === "red" ? "" : `inverted`
          } small pink button ${disabled}`}
          onClick={(e) => onClickTeam("operative", "red")}
        >
          Join as operative
        </button>
      </div>
    </div>
  );
};

export default Buttons;
