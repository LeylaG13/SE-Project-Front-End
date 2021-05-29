import React from "react";
import Card from "./Card";
import "./GamePage.css";

const Column = ({
  number,
  whoseTurn,
  allCards,
  numbers,
  setChosenCard,
  player,
  cardsDisabled,
  team,
}) => {
  return (
    <div className="two wide column">
      <Card
        whoseTurn={whoseTurn}
        team={team}
        word={allCards[number].word}
        color={allCards[number].color}
        number={numbers[number]}
        setChosenCard={setChosenCard}
        player={player}
        is_open={allCards[number].is_open}
        disabled={cardsDisabled}
      />
      <Card
        whoseTurn={whoseTurn}
        team={team}
        disabled={cardsDisabled}
        word={allCards[number + 1].word}
        color={allCards[number + 1].color}
        number={numbers[number + 1]}
        setChosenCard={setChosenCard}
        player={player}
        is_open={allCards[number + 1].is_open}
        disabled={cardsDisabled}
      />
      <Card
        whoseTurn={whoseTurn}
        team={team}
        disabled={cardsDisabled}
        word={allCards[number + 2].word}
        color={allCards[number + 2].color}
        number={numbers[number + 2]}
        setChosenCard={setChosenCard}
        player={player}
        is_open={allCards[number + 2].is_open}
      />
      <Card
        whoseTurn={whoseTurn}
        team={team}
        disabled={cardsDisabled}
        word={allCards[number + 3].word}
        color={allCards[number + 3].color}
        number={numbers[number + 3]}
        setChosenCard={setChosenCard}
        player={player}
        is_open={allCards[number + 3].is_open}
      />
      <Card
        whoseTurn={whoseTurn}
        team={team}
        disabled={cardsDisabled}
        word={allCards[number + 4].word}
        color={allCards[number + 4].color}
        number={numbers[number + 4]}
        setChosenCard={setChosenCard}
        player={player}
        is_open={allCards[number + 4].is_open}
      />
    </div>
  );
};

export default Column;
