import React, { useContext, useEffect } from "react";
import { GameContext } from "../context/GameContext";
import { CardsContext } from "../context/CardsContext";
import "./draft.css";

const Draft = () => {
  const [gameObj, setGameObj] = useContext(GameContext);
  const [cards, setCards] = useContext(CardsContext);

  let team1 = 0,
    team2 = 0;
  let teams = [team1, team2];

  useEffect(() => {
    console.log(gameObj);
    console.log(teams);
  });

  // const decreaseMoves = () => {
  //   let moves = gameObj.moves - 1;
  //   setGameObj({ moves: moves });
  // }

  const handleChange = (e) => {
    let newState = Object.assign({}, gameObj); // creating a copy of the state
    newState[e.target.name] = e.target.value; // changing the value we want
    setGameObj(newState); // passing it to state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Hint and number of possible moves sent to agents from spymaster"
    );
    let newState = Object.assign({}, gameObj); // creating a copy of the state
    newState.whoseTurn = 0; // changing the value we want
    setGameObj(newState); // passing it to state
    // startTurn();
  };

  const handleClick = (card) => {
    let newState = Object.assign({}, gameObj);
    if (newState.moves === 0) {
      console.log("turn finished");
    } else {
      newState.moves -= 1;
      console.log(newState.whoseTurn);
      if (card.team === newState.whoseTurn) {
        teams[card.team] += 50;
        console.log("here1");
      } else if (card.team === 3) {
        console.log("neutral card");
      } else if (card.team === 4) {
        console.log("here2");
        teams[newState.whoseTurn] -= 100;
        newState.gameOver = true;
      } else {
        console.log("here3");
        if (newState.whoseTurn === 0) {
          teams[1] += 100;
          newState.moves = 0;
          console.log("here4");
        } else {
          teams[0] += 100;
          newState.moves = 0;
          console.log("here5");
        }
      }
      setGameObj(newState); // passing it to state
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="hint"
          type="text"
          value={gameObj.hint}
          onChange={handleChange}
        />
        <input
          name="moves"
          type="number"
          value={gameObj.moves}
          onChange={handleChange}
        />
        <button>send</button>
      </form>

      {cards.map((card) => {
        return (
          <div
            className="card"
            key={card.id}
            onClick={(card) => handleClick(card)}
          >
            <h6>{card.word}</h6>
          </div>
        );
      })}
    </>
  );
};

export default Draft;
