import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [logedIn, setLogedIn] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    username: "Samira",
    email: "leyla@gmail.com",
  });
  const [user_id, setUserId] = useState("9106cdf868dd4872a0e1ccbdaf3f7716");
  return (
    <LoginContext.Provider
      value={{
        value1: [logedIn, setLogedIn],
        value2: [token, setToken],
        value3: [user, setUser],
        value4: [user_id, setUserId],
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
