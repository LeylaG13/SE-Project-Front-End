import React from "react";
import "./GamePage.css";
import Menu from "../components/Menu";
import icon1 from "../media/cards/icon1.png";
import icon2 from "../media/cards/icon2.png";
import ch1 from "../media/cards/ch1.png";
import ch2 from "../media/cards/ch2.png";
import ch3 from "../media/cards/ch3.png";
import ch4 from "../media/cards/ch4.png";
import ch5 from "../media/cards/ch5.png";

const GamePage = () => {
  return (
    <div id="gamepage">
      <Menu />
      <h1> Room #1</h1>
      <div className="ui grid">
        <div className="three wide column">
          <div className="icon-image blue">
            <img src={icon1} alt="icon1" />
          </div>
          <div className="game-info one">
            <h4>Team 1</h4>
            <p>Words guessed: 5</p>
            <p>Operatives: 2</p>
            <p>Spymasters: 1</p>
          </div>
        </div>

        {/* First Column */}
        <div className="two wide column">
          <div className="icon-image blue">
            <img src={ch1} alt="pic1" />
          </div>
          <div className="icon-image blue">
            <img src={ch5} alt="icon1" />
          </div>
          <div className="icon-image  red ">
            <img src={ch3} alt="icon1" />
          </div>
          <div className="icon-image  red ">
            <img src={ch2} alt="icon1" />
          </div>
          <div className="icon-image grey">
            <img src={ch4} alt="icon1" />
          </div>
        </div>

        {/* Second Column */}
        <div className="two wide column">
          <div className="icon-image  red">
            <img src={ch2} alt="pic2" />
          </div>
          <div className="icon-image red">
            <img src={ch4} alt="icon1" />
          </div>
          <div className="icon-image  blue ">
            <img src={ch3} alt="icon1" />
          </div>
          <div className="icon-image blue">
            <img src={ch5} alt="icon1" />
          </div>
          <div className="icon-image grey">
            <img src={ch1} alt="icon1" />
          </div>
        </div>

        {/* Third Column */}
        <div className="two wide column">
          <div className="icon-image  grey ">
            <img src={ch3} alt="icon1" />
          </div>
          <div className="icon-image blue">
            <img src={ch1} alt="icon1" />
          </div>
          <div className="icon-image  red ">
            <img src={ch5} alt="icon1" />
          </div>
          <div className="icon-image blue">
            <img src={ch2} alt="icon1" />
          </div>
          <div className="icon-image red">
            <img src={ch4} alt="icon1" />
          </div>
        </div>

        {/* Fourth Column */}
        <div className="two wide column">
          <div className="icon-image blue">
            <img src={ch4} alt="icon1" />{" "}
          </div>
          <div className="icon-image red">
            <img src={ch2} alt="icon1" />
          </div>
          <div className="icon-image  red ">
            <img src={ch5} alt="icon1" />
          </div>
          <div className="icon-image blue">
            <img src={ch1} alt="icon1" />
          </div>
          <div className="icon-image grey">
            <img src={ch3} alt="icon1" />
          </div>
        </div>

        {/* Fifth Column */}

        <div className="two wide column">
          <div className="icon-image grey">
            <img src={ch5} alt="icon1" />
          </div>
          <div className="icon-image black">
            <img src={ch1} alt="icon1" />
          </div>
          <div className="icon-image  blue ">
            <img src={ch3} alt="icon1" />
          </div>
          <div className="icon-image blue">
            <img src={ch4} alt="icon1" />
          </div>
          <div className="icon-image red">
            <img src={ch2} alt="icon1" />
          </div>
        </div>

        <div className="three wide column">
          <div className="icon-image red">
            <img src={icon2} alt="icon2" />
          </div>
          <div className="game-info two">
            <h4>Team 2</h4>
            <p>Words guessed: 5</p>
            <p>Operatives: 2</p>
            <p>Spymasters: 1</p>
          </div>
        </div>
      </div>

      <div>
        <label for="hint" class="preg">
          Hint:
        </label>
        <input type="text" id="idhint" name="hint" />
      </div>
    </div>
  );
};

export default GamePage;
