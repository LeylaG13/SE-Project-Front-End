import React from "react";

const HintBox = ({
  turnChanged, //+
  whoseTurn, //+
  moves, //+
  hint, //+
  setMoves, //+
  setHint, //+
  setMessages, //+
  messages, //+
  setLastID, //+
  setSocketSentCounter, //+
  lastID, //+
}) => {
  const handleMoves = (e) => {
    console.log("handleMoves", Number(e.target.value));
    setMoves(Number(e.target.value));
  };

  const handleHint = (e) => {
    console.log("handleHint");
    setHint(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    var updated_hint = hint.concat(" ");
    updated_hint = updated_hint.concat(moves);
    updated_hint = updated_hint.toLocaleUpperCase();

    setMessages([
      ...messages,
      { id: lastID + 1, msg: updated_hint, team: whoseTurn },
    ]);
    setLastID(lastID + 1);
    setSocketSentCounter((prev) => prev + 1);
  };

  return (
    <div className="hintbox container">
      {turnChanged ? (
        whoseTurn ? (
          <p className="teams-turn">Team Blue's turn now</p>
        ) : (
          <p className="teams-turn">Tema Red's turn now</p>
        )
      ) : null}
      <form className="hintform ui form" onSubmit={handleSubmit}>
        <div className="field form-field">
          <label htmlFor="hint" className="preg">
            Hint:
          </label>
          <input
            className="hint"
            value={hint}
            type="text"
            id="hint"
            name="hint"
            onChange={handleHint}
          />
        </div>
        <div className="field form-field">
          <label htmlFor="moves" className="preg">
            Moves:{" "}
          </label>
          <input
            className="moves"
            value={moves}
            placeholder={1}
            min={1}
            type="number"
            id="moves"
            name="moves"
            onChange={handleMoves}
          />
        </div>
        <button className="ui inverted white button large form-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default HintBox;
