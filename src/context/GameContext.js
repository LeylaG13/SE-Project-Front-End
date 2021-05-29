import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [gameObj, setGameObj] = useState({
    players: null,
    moves: 0,
    hint: '',
    whoseTurn: null, // team id
    gameOver: false, 
  });

  
  const nextTurn = () => {
    let currentPlayer = this.getPlayerObject(this.props.game.whoseTurn);
    if (currentPlayer === this.props.players[this.props.players.length - 1]) {
      let readyNextPlayer = this.props.players[0];
      return this.props.nextTurn(readyNextPlayer.id);
    } else {
      let playerIndex = this.props.players.findIndex((player) => {
        return player === currentPlayer;
      });
      let readyNextPlayer = this.props.players[playerIndex + 1];
      return this.props.nextTurn(readyNextPlayer.id);
    }
  };

  const endPlayerTurn = () => {
    console.log("ending turn");
    nextTurn();
  };

  const checkMoves = () => {
    if (gameObj.moves === 0) {
      endPlayerTurn();
    } else {
      console.log(`${gameObj.moves} left for team ${gameObj.whoseTurn}}`);
    }
  };

  return (
    <GameContext.Provider value={[gameObj, setGameObj]}>
      {props.children}
    </GameContext.Provider>
  );
};
