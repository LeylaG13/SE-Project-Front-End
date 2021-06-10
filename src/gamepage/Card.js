import React, { useState, useEffect } from "react";
import "./GamePage.css";

import icon1 from "../media/cards/icon1.png";
import icon2 from "../media/cards/icon2.png";
import ch1 from "../media/cards/ch1.png";
import ch2 from "../media/cards/ch2.png";
import ch3 from "../media/cards/ch3.png";
import ch4 from "../media/cards/ch4.png";
import ch5 from "../media/cards/ch5.png";
import ch6 from "../media/cards/ch6.png";
import ch7 from "../media/cards/ch7.png";
import ch8 from "../media/cards/ch8.png";
import ch9 from "../media/cards/ch9.png";
import ch10 from "../media/cards/ch10.png";
import ch11 from "../media/cards/ch11.png";
import ch12 from "../media/cards/ch12.png";
import ch13 from "../media/cards/ch13.png";
import ch14 from "../media/cards/ch14.png";
import ch15 from "../media/cards/ch15.png";
import ch16 from "../media/cards/ch16.png";
import ch17 from "../media/cards/ch17.png";
import ch18 from "../media/cards/ch18.png";
import ch19 from "../media/cards/ch19.png";
import ch20 from "../media/cards/ch20.png";
import ch21 from "../media/cards/ch21.png";
import ch22 from "../media/cards/ch22.png";
import ch23 from "../media/cards/ch23.png";
import ch24 from "../media/cards/ch24.png";
import ch25 from "../media/cards/ch25.png";

const images = [
  ch1,
  ch2,
  ch3,
  ch4,
  ch5,
  ch6,
  ch7,
  ch8,
  ch9,
  ch10,
  ch11,
  ch12,
  ch13,
  ch14,
  ch15,
  ch16,
  ch17,
  ch18,
  ch19,
  ch20,
  ch21,
  ch22,
  ch23,
  ch24,
  ch25,
];

const Card = ({
  word,
  color,
  number,
  setChosenCard,
  is_open,
  player,
  disabled,
  whoseTurn,
  team,
}) => {
  useEffect(() => {}, [is_open]);

  const [click, setClick] = useState(0);
  var card = { word: word, color: color };
  var word_class;
  if (player === "spymaster") {
    word_class = `words ${color}_word`;
  } else {
    word_class = "words";
  }
  var word_side = (
    <div
      className={word_class}
      onClick={(e) => {
        if (
          (whoseTurn === 0 && team === "red") ||
          (whoseTurn === 1 && team === "blue")
        ) {
          if (player === "operative") {
            setClick(1);
            setChosenCard(card);
          }
        }
      }}
    >
      <p>{word}</p>
    </div>
  );
  var pciture_side = (
    <div className={`icon-image ${color}`}>
      <img src={images[number]} alt={`pic${number}`} />
    </div>
  );
  return (
    <div
      disabled={disabled}
      style={{
        opacity: disabled ? 0.25 : 1,
      }}
    >
      {" "}
      {click === 0 && is_open === false ? word_side : pciture_side}{" "}
    </div>
  );
};

export default Card;
