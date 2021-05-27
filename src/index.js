import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { LoginProvider } from "./context/LoginContext";
ReactDOM.render(
  <LoginProvider>
    {" "}
    <App />
  </LoginProvider>,
  document.querySelector("#root")
);
