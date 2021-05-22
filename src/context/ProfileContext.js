import React, { useState, createContext } from 'react';


export const ProfileContext = createContext();


// GET THE DATA FROM BACKEND
export const ProfileProvider = (props) => {
  const [user, setUser] = useState({
    id: 1,
    name: "Sarkhan",
    email: "sarkhanjafarli12@gmail.com",
    description: "UFAZ - a love hate or abusive relationship?",
    wins: 12,
    losses: 22,
    total: 34,
    title: "King",
    rank: 1,
    points: 223
  });
  return (
    <ProfileContext.Provider value={[user, setUser]}>
      {props.children}
    </ProfileContext.Provider>
  );
}