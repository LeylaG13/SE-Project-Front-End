import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [logedIn, setLogedIn] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  return (
    <LoginContext.Provider value={{value1: [logedIn, setLogedIn], value2: [token, setToken], value3: [user, setUser]}}>
      {props.children}
    </LoginContext.Provider>
  );
}