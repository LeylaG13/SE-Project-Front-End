import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [menu, setMenu] = useState(0);
  const [active, setActive] = useState("");

  const onClick = (e, id) => {
    if (id == e.target.id) {
      setActive(id);
    }
  };

  const classactive = (id) => {
    if (active === id) return "active item";
    else return "item";
  };

  const menucomp = (
    <div className="ui secondary  menu" id="menu">
      <Link
        to="/"
        className={classactive("home")}
        id="home"
        onClick={(e) => onClick(e, "home")}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={classactive("about")}
        id="about"
        onClick={(e) => onClick(e, "about")}
      >
        About
      </Link>
      <Link
        to="/gamepage"
        className={classactive("createroom")}
        id="createroom"
        onClick={(e) => onClick(e, "createroom")}
      >
        Create Room
      </Link>
      <Link
        to="/leaderboard"
        className={classactive("leaderboard")}
        id="leaderboard"
        onClick={(e) => onClick(e, "leaderboard")}
      >
        Leaderboard
      </Link>
      <Link
        to="/profile"
        className={classactive("profile")}
        id="profile"
        onClick={(e) => onClick(e, "profile")}
      >
        Profile
      </Link>
    </div>
  );
  return (
    <div id="menudiv-main">
      <button
        className="circular ui icon button"
        id="menubutton"
        onClick={() => {
          if (menu == 0) {
            setMenu(1);
          } else {
            setMenu(0);
          }
        }}
      >
        <i
          class={`icon ${
            menu ? `long arrow alternate left` : `long arrow alternate right`
          }`}
        ></i>
      </button>{" "}
      {menu ? menucomp : null}
    </div>
  );
};

export default Menu;
