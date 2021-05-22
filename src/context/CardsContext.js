import React, { useState, createContext } from "react";

export const CardsContext = createContext();

export const CardsProvider = (props) => {
  const [cards, setCards] = useState([
    {
      id: 0,
      team: 0,
      word: "Ship",
    },
    {
      id: 1,
      team: 1,
      word: "Space",
    },
    {
      id: 2,
      team: 2,
      word: "Sink",
    },
    {
      id: 3,
      team: 3,
      word: "Save",
    },
  ]);
  return (
    <CardsContext.Provider value={[cards, setCards]}>
      {props.children}
    </CardsContext.Provider>
  );
};
