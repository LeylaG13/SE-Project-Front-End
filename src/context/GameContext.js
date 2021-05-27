import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [gameObj, setGameObj] = useState({
    // players: null,
    // moves: 0,
    // hint: '',
    // whoseTurn: null, // team id
    // gameOver: false, 
    moves: 0, // when pressing send in hint and moves, send just moves
    turnsLeft: null, // send turnsLeft-1
    clickedCard: null, // card id
    points: 0,
    operatives: 0,
    spymasters: 0,
    whoseTurn: 0, // calculate if the moves is zero and change the value of whoseTurn in front end and send the backedn the whose turn of the other team
    messages: [],
    gameOver: false,
    
  });

   // hint
      // moves during the turn
      // the clicked card
      // points changed
      // moves until the game ends
      // operative numbers
      // spymaster numbers

  
  // const nextTurn = () => {
  //   let currentPlayer = this.getPlayerObject(this.props.game.whoseTurn);
  //   if (currentPlayer === this.props.players[this.props.players.length - 1]) {
  //     let readyNextPlayer = this.props.players[0];
  //     return this.props.nextTurn(readyNextPlayer.id);
  //   } else {
  //     let playerIndex = this.props.players.findIndex((player) => {
  //       return player === currentPlayer;
  //     });
  //     let readyNextPlayer = this.props.players[playerIndex + 1];
  //     return this.props.nextTurn(readyNextPlayer.id);
  //   }
  // };

  // const endPlayerTurn = () => {
  //   console.log("ending turn");
  //   nextTurn();
  // };

  // const checkMoves = () => {
  //   if (gameObj.moves === 0) {
  //     endPlayerTurn();
  //   } else {
  //     console.log(`${gameObj.moves} left for team ${gameObj.whoseTurn}}`);
  //   }
  // };

  return (
    <GameContext.Provider value={[gameObj, setGameObj]}>
      {props.children}
    </GameContext.Provider>
  );
};
