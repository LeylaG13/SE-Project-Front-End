import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GamePage.css";
import Card from "./Card";
import Menu from "../components/Menu";
import icon1 from "../media/cards/icon1.png";
import icon2 from "../media/cards/icon2.png";
import ch1 from "../media/cards/ch1.png";
import ch2 from "../media/cards/ch2.png";
import ch3 from "../media/cards/ch3.png";
import ch4 from "../media/cards/ch4.png";
import ch5 from "../media/cards/ch5.png";
import ch6 from "../media/cards/ch6.png";
import ch7 from "../media/cards/ch7.png";
import ch8 from "../media/cards/ch8.png";
import ch9 from "../media/cards/ch9.png";
import ch10 from "../media/cards/ch10.png";
import ch11 from "../media/cards/ch11.png";
import ch12 from "../media/cards/ch12.png";
import ch13 from "../media/cards/ch13.png";
import ch14 from "../media/cards/ch14.png";
import ch15 from "../media/cards/ch15.png";
import ch16 from "../media/cards/ch16.png";
import ch17 from "../media/cards/ch17.png";
import ch18 from "../media/cards/ch18.png";
import ch19 from "../media/cards/ch19.png";
import ch20 from "../media/cards/ch20.png";
import ch21 from "../media/cards/ch21.png";
import ch22 from "../media/cards/ch22.png";
import ch23 from "../media/cards/ch23.png";
import ch24 from "../media/cards/ch24.png";
import ch25 from "../media/cards/ch25.png";

const allCards = [
  { id: "1", word: "bus", color: "red", is_open: 0, game: "khsfhk" },
  { id: "2", word: "code", color: "red", is_open: 0, game: "khsfhk" },
  { id: "3", word: "success", color: "red", is_open: 0, game: "khsfhk" },
  { id: "4", word: "water", color: "red", is_open: 0, game: "khsfhk" },
  { id: "5", word: "book", color: "red", is_open: 0, game: "khsfhk" },
  { id: "6", word: "cup", color: "red", is_open: 0, game: "khsfhk" },
  { id: "7", word: "light", color: "red", is_open: 0, game: "khsfhk" },
  { id: "8", word: "phone", color: "red", is_open: 0, game: "khsfhk" },
  { id: "9", word: "wall", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "10", word: "sticker", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "11", word: "cold", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "12", word: "hot", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "13", word: "paper", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "14", word: "pen", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "15", word: "color", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "16", word: "bottle", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "17", word: "talk", color: "blue", is_open: 0, game: "khsfhk" },
  { id: "18", word: "hair", color: "grey", is_open: 0, game: "khsfhk" },
  { id: "19", word: "computer", color: "grey", is_open: 0, game: "khsfhk" },
  { id: "20", word: "guitar", color: "grey", is_open: 0, game: "khsfhk" },
  { id: "21", word: "singing", color: "grey", is_open: 0, game: "khsfhk" },
  { id: "22", word: "icecream", color: "grey", is_open: 0, game: "khsfhk" },
  { id: "23", word: "painting", color: "grey", is_open: 0, game: "khsfhk" },
  { id: "24", word: "notebook", color: "grey", is_open: 0, game: "khsfhk" },
  { id: "25", word: "lipstick", color: "black", is_open: 0, game: "khsfhk" },
];

const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];
const GamePage = () => {
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.2);
  };

  shuffle(allCards);
  shuffle(allCards);
  shuffle(allCards);
  shuffle(numbers);
  shuffle(numbers);
  shuffle(numbers);

  // const [player, setPlayer] = useState("");
  const [team, setTeam] = useState("");
  const [disabled, setDisabled] = useState("");
  const [numBlueSpy, setNumBlueSpy] = useState(0);
  const [numBlueOperative, setNumBlueOperatives] = useState(0);
  const [numRedSpy, setNumRedSpy] = useState(0);
  const [numRedOperative, setNumberRedOperative] = useState(0);
  const [player, setPlayer] = useState("");
  const [whoseTurn, setWhoseTurn] = useState(0);
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
    },
  ]);

  const [hint, setHint] = useState("");
  const [moves, setMoves] = useState(0);

  const [lastID, setLastID] = useState(2);

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

  const handleMoves = (e) => {
    setMoves(Number(e.target.value));
  };

  const handleHint = (e) => {
    setHint(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { id: lastID + 1, msg: hint, team: whoseTurn }]);
    setWhoseTurn(!whoseTurn);
    setLastID(lastID + 1);
  };

  const onClickTeam = (playertype, color) => {
    setPlayer(playertype);
    setTeam(color);
    setDisabled("disabled");
    if (playertype === "spymaster" && color === "blue") {
      setNumBlueSpy(numBlueSpy + 1);
      // numBlueSpy+=1;
    } else if (playertype === "spymaster" && color === "red") {
      setNumRedSpy(numRedSpy + 1);
    } else if (playertype === "operative" && color === "red") {
      setNumberRedOperative(numRedOperative + 1);
    } else if (playertype === "operative" && color === "blue") {
      setNumBlueOperatives(numBlueOperative + 1);
    }

    // console.log(player, team);
  };

  return (
    <div id="gamepage">
      <Menu />
      <h1> Room #1</h1>
      <button
        class={`redbutton ui inverted small blue button ${disabled}`}
        onClick={(e) => onClickTeam("spymaster", "blue")}
      >
        Join as spymaster
      </button>
      <button
        class={`redbutton  ui inverted small blue button ${disabled}`}
        id="rightbutton"
        onClick={(e) => onClickTeam("operative", "blue")}
      >
        Join as operative
      </button>
      <button
        class={`bluebutton  ui inverted small pink button ${disabled}`}
        onClick={(e) => onClickTeam("spymaster", "red")}
      >
        Join as spymaster
      </button>
      <button
        class={`bluebutton  ui inverted small pink button ${disabled}`}
        onClick={(e) => onClickTeam("operative", "red")}
      >
        Join as operative
      </button>

      <div className="ui grid">
        <div className="three wide column">
          <div className="icon-image blue">
            <img src={icon1} alt="icon1" />
          </div>
          <div className="game-info one">
            <h4>Team Blue</h4>
            <p>Words guessed: </p>
            <p>Operatives: {numBlueOperative}</p>
            <p>Spymasters: {numBlueSpy}</p>
          </div>
        </div>

        {/* First Column */}
        <div className="two wide column">
          <Card
            word={allCards[0].word}
            color={allCards[0].color}
            number={numbers[0]}
          />
          <Card
            word={allCards[1].word}
            color={allCards[1].color}
            number={numbers[1]}
          />
          <Card
            word={allCards[2].word}
            color={allCards[2].color}
            number={numbers[2]}
          />
          <Card
            word={allCards[3].word}
            color={allCards[3].color}
            number={numbers[3]}
          />
          <Card
            word={allCards[4].word}
            color={allCards[4].color}
            number={numbers[4]}
          />
        </div>

        {/* Second Column */}
        <div className="two wide column">
          <Card
            word={allCards[5].word}
            color={allCards[5].color}
            number={numbers[5]}
          />
          <Card
            word={allCards[6].word}
            color={allCards[6].color}
            number={numbers[6]}
          />
          <Card
            word={allCards[7].word}
            color={allCards[7].color}
            number={numbers[7]}
          />
          <Card
            word={allCards[8].word}
            color={allCards[8].color}
            number={numbers[8]}
          />
          <Card
            word={allCards[9].word}
            color={allCards[9].color}
            number={numbers[9]}
          />
        </div>

        {/* Third Column */}
        <div className="two wide column">
          <Card
            word={allCards[10].word}
            color={allCards[10].color}
            number={numbers[10]}
          />
          <Card
            word={allCards[11].word}
            color={allCards[11].color}
            number={numbers[11]}
          />
          <Card
            word={allCards[12].word}
            color={allCards[12].color}
            number={numbers[12]}
          />
          <Card
            word={allCards[13].word}
            color={allCards[13].color}
            number={numbers[13]}
          />
          <Card
            word={allCards[14].word}
            color={allCards[14].color}
            number={numbers[14]}
          />
        </div>

        {/* Fourth Column */}
        <div className="two wide column">
          <Card
            word={allCards[15].word}
            color={allCards[15].color}
            number={numbers[15]}
          />
          <Card
            word={allCards[16].word}
            color={allCards[16].color}
            number={numbers[16]}
          />
          <Card
            word={allCards[17].word}
            color={allCards[17].color}
            number={numbers[17]}
          />
          <Card
            word={allCards[18].word}
            color={allCards[18].color}
            number={numbers[18]}
          />
          <Card
            word={allCards[19].word}
            color={allCards[19].color}
            number={numbers[19]}
          />
        </div>

        {/* Fifth Column */}

        <div className="two wide column">
          <Card
            word={allCards[20].word}
            color={allCards[20].color}
            number={numbers[20]}
          />
          <Card
            word={allCards[21].word}
            color={allCards[21].color}
            number={numbers[21]}
          />
          <Card
            word={allCards[22].word}
            color={allCards[22].color}
            number={numbers[22]}
          />
          <Card
            word={allCards[23].word}
            color={allCards[23].color}
            number={numbers[23]}
          />
          <Card
            word={allCards[24].word}
            color={allCards[24].color}
            number={numbers[24]}
          />
        </div>

        <div className="three wide column">
          <div className="icon-image red">
            <img src={icon2} alt="icon2" />
          </div>
          <div className="game-info two">
            <h4>Team Red</h4>
            <p>Words guessed: </p>
            <p>Operatives: {numRedOperative}</p>
            <p>Spymasters: {numRedSpy}</p>
          </div>
          <div className="chatbox">
            {messages.map((message) => {
              return (
                <div
                  className={`message ${message.team ? "red" : "blue"}`}
                  key={message.id}
                >
                  {message.team ? <p>Team Red: </p> : <p>Team Blue: </p>}
                  {message.msg}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div>
        <label for="hint" class="preg">
          Hint:
        </label>
        <input type="text" id="idhint" name="hint" />
      </div> */}

      <div className="hintbox">
        <form className="hintform" onSubmit={handleSubmit}>
          <div>
            <label for="hint" class="preg">
              Hint:
            </label>
            <input
              className="hint"
              value={hint}
              type="text"
              id="idhint"
              name="hint"
              onChange={handleHint}
            />
          </div>
          <div>
            <label for="moves" class="preg">
              Moves:{" "}
            </label>
            <input
              className="moves"
              value={moves}
              type="number"
              name="moves"
              onChange={handleMoves}
            />
          </div>
          <button>send</button>
        </form>
      </div>
    </div>
  );
};

export default GamePage;
