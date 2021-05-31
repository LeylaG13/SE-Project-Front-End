import React from "react";

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
}) => {
  const onClickTeam = (playertype, color) => {
    console.log("onClickTeam");
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
