import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [logedIn, setLogedIn] = useState(false);
  return (
    <LoginContext.Provider value={[logedIn, setLogedIn]}>
      {props.children}
    </LoginContext.Provider>
  );
}