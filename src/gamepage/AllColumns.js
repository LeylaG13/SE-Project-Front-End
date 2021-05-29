import React from "react";
import Column from "./Column";

const Columns = ({
  whoseTurn,
  allCards,
  team,
  numbers,
  setChosenCard,
  player,
  cardsDisabled,
}) => {
  return (
    <>
      <Column
        whoseTurn={whoseTurn}
        allCards={allCards}
        team={team}
        numbers={numbers}
        setChosenCard={setChosenCard}
        player={player}
        cardsDisabled={cardsDisabled}
        number={0}
      />
      <Column
        whoseTurn={whoseTurn}
        allCards={allCards}
        team={team}
        numbers={numbers}
        setChosenCard={setChosenCard}
        player={player}
        cardsDisabled={cardsDisabled}
        number={5}
      />
      <Column
        whoseTurn={whoseTurn}
        allCards={allCards}
        team={team}
        numbers={numbers}
        setChosenCard={setChosenCard}
        player={player}
        cardsDisabled={cardsDisabled}
        number={10}
      />
      <Column
        whoseTurn={whoseTurn}
        allCards={allCards}
        team={team}
        numbers={numbers}
        setChosenCard={setChosenCard}
        player={player}
        cardsDisabled={cardsDisabled}
        number={15}
      />
      <Column
        whoseTurn={whoseTurn}
        allCards={allCards}
        team={team}
        numbers={numbers}
        setChosenCard={setChosenCard}
        player={player}
        cardsDisabled={cardsDisabled}
        number={20}
      />
    </>
  );
};

export default Columns;
