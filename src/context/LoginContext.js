import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [logedIn, setLogedIn] = useState(true);
  const [token, setToken] = useState(
    "fc94b6c11b50edb276dc0ef393015958d153d490"
  );

  const [user, setUser] = useState({
    username: "Leyla",
    email: "leyla@gmail.com",
  });
  const [user_id, setUserId] = useState("4b53b2e7671a47d6b2ee8f3e44b58c13");
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
