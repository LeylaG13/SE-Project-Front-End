import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GamePage.css";
import Menu from "../components/Menu";
import icon1 from "../media/cards/icon1.png";
import icon2 from "../media/cards/icon2.png";
import ch1 from "../media/cards/ch1.png";
import ch2 from "../media/cards/ch2.png";
import ch3 from "../media/cards/ch3.png";
import ch4 from "../media/cards/ch4.png";
import ch5 from "../media/cards/ch5.png";

const allCards = [
  { id: "1", word: "bus", color: "red", is_open: 0, game: "khsfhk" },
  { id: "2", word: "code", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "3", word: "success", color: "grey", is_open: 0, game: "khsfhk" },
  { id: "4", word: "water", color: "red", is_open: 0, game: "khsfhk" },
  { id: "5", word: "book", color: "red", is_open: 0, game: "khsfhk" },
  { id: "6", word: "cup", color: "grey", is_open: 0, game: "khsfhk" },
  { id: "7", word: "light", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "8", word: "phone", color: "red", is_open: 0, game: "khsfhk" },
  { id: "9", word: "wall", color: "grey", is_open: 0, game: "khsfhk" },
  { id: "10", word: "sticker", color: "red", is_open: 0, game: "khsfhk" },
  { id: "11", word: "cold", color: "red", is_open: 0, game: "khsfhk" },
  { id: "12", word: "hot", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "13", word: "eyeshadow", color: "red", is_open: 0, game: "khsfhk" },
  { id: "14", word: "pen", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "15", word: "color", color: "black", is_open: 0, game: "khsfhk" },
  { id: "16", word: "bottle", color: "red", is_open: 0, game: "khsfhk" },
  { id: "17", word: "talk", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "18", word: "hair", color: "red", is_open: 0, game: "khsfhk" },
  { id: "19", word: "computer", color: "red", is_open: 0, game: "khsfhk" },
  { id: "20", word: "guitar", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "21", word: "singing", color: "red", is_open: 0, game: "khsfhk" },
  { id: "22", word: "icecream", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "23", word: "painting", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "24", word: "notebook", color: "grey", is_open: 0, game: "khsfhk" },
  { id: "25", word: "lipstick", color: "red", is_open: 0, game: "khsfhk" },
];

const GamePage = () => {
  const [player, setPlayer] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      msg: "Hello",
      team: 0, // blue
    },
    {
      id: 2,
      msg: "You are stupid, go home",
      team: 1, //red
    }
  ]);
  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/api/generate").then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  // const [token, setToken] = useState("");
  // const [allCards, setAllCards] = useState([]);

  // var user = {};
  // useEffect(() => {
  //   axios
  //     .post("http://127.0.0.1:8000/api/signin", {
  //       email: "hfh@email.com",
  //       password: "123",
  //     })
  //     .then(
  //       (response) => {
  //         setToken(response.data.token);
  //         console.log(response.data.token);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );

  //   axios
  //     .get("http://127.0.0.1:8000/api/generate", {
  //       headers: {
  //         Authorization: `token ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data.user);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div id="gamepage">
      <Menu />
      <h1> Room #1</h1>
      <button class="redbutton ui inverted small blue button">
        Join as spymaster
      </button>
      <button class="redbutton  ui inverted small blue button" id="rightbutton">
        Join as operative
      </button>
      <button class="bluebutton  ui inverted small pink button">
        Join as spymaster
      </button>
      <button class="bluebutton  ui inverted small pink button">
        Join as operative
      </button>

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
          <div className="chatbox">
            {messages.map(message=> {
              return <div className={`message ${message.team ? 'red' : 'blue'}`} key={message.id}>
                {message.team ? <p>Team Red:   </p> : <p>Team Blue:   </p>}
                {message.msg}
                </div>
            })}
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
