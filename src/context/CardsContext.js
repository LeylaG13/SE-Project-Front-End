import React, { useState, createContext } from "react";

export const CardsContext = createContext();

export const CardsProvider = (props) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      team: 0,
      word: "Ship",
    },
    {
      id: 2,
      team: 1,
      word: "Space",
    },
    {
      id: 3,
      team: 2,
      word: "Sink",
    },
    {
      id: 4,
      team: 4,
      word: "Save",
    },
  ]);
  return (
    <CardsContext.Provider value={[cards, setCards]}>
      {props.children}
    </CardsContext.Provider>
  );
};
