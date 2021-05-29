import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [logedIn, setLogedIn] = useState(true);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    username: "Samira",
    email: "leyla@gmail.com",
  });
  return (
    <LoginContext.Provider
      value={{
        value1: [logedIn, setLogedIn],
        value2: [token, setToken],
        value3: [user, setUser],
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
