import React, { useEffect, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import axios from "axios";

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
  teamRedId,
  teamBlueId,
}) => {
  const onClickTeam = (playertype, color) => {
    console.log("onClickTeam");
    setPlayer(playertype);
    setTeam(color);
    setDisabled("disabled");
    if (playertype === "Spymaster" && color === "Blue") {
      setNumBlueSpy(numBlueSpy + 1);
      // numBlueSpy+=1;
    } else if (playertype === "Spymaster" && color === "Red") {
      setNumRedSpy(numRedSpy + 1);
    } else if (playertype === "Operative" && color === "Red") {
      setNumberRedOperative(numRedOperative + 1);
    } else if (playertype === "Operative" && color === "Blue") {
      setNumBlueOperatives(numBlueOperative + 1);
    }
    setSocketSentCounter((prev) => prev + 1);
    // setMoves(prev => prev-1);
    // console.log(player, team);
    // sendToSocket();
  };
  const { value1, value2, value3, value4 } = useContext(LoginContext);

  const [token, setToken] = value2;
  const [user_id, setUserId] = value4;
  var auth = `Token ${token}`;
  useEffect(() => {
    var team_id = "";
    if (team === "Blue") {
      team_id = teamBlueId;
    } else if (team === "Red") {
      team_id = teamRedId;
    }
    // console.log("I AM IN THIS FUNCTION");

    if (team === "Blue" || team === "Red") {
      axios
        .post(
          `http://127.0.0.1:8000/api/player-create`,
          {
            type: player,
            user: user_id,
            team: team_id,
          },
          {
            headers: {
              Authorization: auth,
              // "Token a49e0e454ef9b7a9011a3c0b0d7a3a46152a9465",
            },
            mode: "cors",
          }
        )
        .then((resp) => {
          console.log("created player", resp);
          // setGameId(resp.data.id);
          // console.log(resp.data.id);
          // setstatsData(resp.data);
          // console.log(resp.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [player, team]);

  return (
    <div className="buttons">
      <div className="left">
        <button
          className={`redbutton ui ${
            player === "Spymaster" && team === "Blue" ? "" : `inverted`
          } small blue button  ${disabled}`}
          onClick={(e) => onClickTeam("Spymaster", "Blue")}
        >
          Join as Spymaster
        </button>
        <button
          className={`redbutton  ui ${
            player === "Operative" && team === "Blue" ? "" : `inverted`
          } small blue button ${disabled}`}
          id="rightbutton"
          onClick={(e) => onClickTeam("Operative", "Blue")}
        >
          Join as Operative
        </button>
      </div>

      <div className="right">
        <button
          className={`bluebutton  ui ${
            player === "Spymaster" && team === "Red" ? "" : `inverted`
          } small pink button ${disabled}`}
          onClick={(e) => onClickTeam("Spymaster", "Red")}
        >
          Join as Spymaster
        </button>
        <button
          className={`bluebutton  ui ${
            player === "Operative" && team === "Red" ? "" : `inverted`
          } small pink button ${disabled}`}
          onClick={(e) => onClickTeam("Operative", "Red")}
        >
          Join as Operative
        </button>
      </div>
    </div>
  );
};

export default Buttons;
