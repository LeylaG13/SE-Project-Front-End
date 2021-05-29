import React, { useState, createContext } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
  const [profileUser, setProfileUser] = useState({
    id: 1,
    name: "leyla",
    email: "leyla@gmail.com",
    wins: 12,
    losses: 22,
    total: 34,
    title: "Godlike",
    rank: 1,
    points: 223,
    score: 3000,
  });
  return (
    <ProfileContext.Provider value={[profileUser, setProfileUser]}>
      {props.children}
    </ProfileContext.Provider>
  );
};
