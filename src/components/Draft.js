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
    if (e.target.name === "moves") {
      newState[e.target.name] = Number(e.target.value); // changing the value we want
    } else {
      newState[e.target.name] = e.target.value; // changing the value we want
    }
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

  const checkMoves = () => {
    if (gameObj.moves === 0) {
      return true;
    } else {
      return false;
    }
  };


  // card.team = 0,1; 0- blue, 1 - red
  const handleClick = (card) => {
      let newState = Object.assign({}, gameObj);
      newState.moves -= 1;
      console.log("whoseTurn: ",newState.whoseTurn);
      
      if (card.team === newState.whoseTurn) { // check if the playing team chose their own card
        teams[card.team] += 50;
        console.log(`team ${newState.whoseTurn} got`);
      } else if (card.team === 2) {
        console.log("neutral card");
      } else if (card.team === 3) {
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
    
    if (checkMoves()) { 
      // endPlayerTurn();
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
