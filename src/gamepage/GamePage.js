import React, { useState, useEffect } from "react";
import axios from "axios";
import EndMessage from "./EndMessage";
import "./GamePage.css";
import Card from "./Card";
import Menu from "../components/Menu";
import icon1 from "../media/cards/icon1.png";
import icon2 from "../media/cards/icon2.png";

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

var glob = 0;

const GamePage = ({websocket}) => {
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.2);
  };

  // const [player, setPlayer] = useState("");
  const [pointsRed, setPointsRed] = useState(0);
  // const [alert, setAlert] = useState({});
  const [pointsBlue, setPointsBlue] = useState(0);
  const [turnsBlue, setTurnsBlue] = useState(0);
  const [turnsRed, setTurnsRed] = useState(0);
  const [chosenCard, setChosenCard] = useState({});
  const [team, setTeam] = useState("");
  const [disabled, setDisabled] = useState("");
  const [numBlueSpy, setNumBlueSpy] = useState(0);
  const [numBlueOperative, setNumBlueOperatives] = useState(0);
  const [numRedSpy, setNumRedSpy] = useState(0);
  const [numRedOperative, setNumberRedOperative] = useState(0);
  const [endGame, setEndGame] = useState(0);
  const [player, setPlayer] = useState("");
  const [whoseTurn, setWhoseTurn] = useState(0);
  const [messages, setMessages] = useState([
    {
      id: 1,
      msg: "Hello, this it team blue ^_^",
      team: 0, // blue
    },
    {
      id: 2,
      msg: "Hello, this is team red :)",
      team: 1, //red
    },
  ]);

  const howManyTurns = () => {
    var bt = 0;
    var rt = 0;
    allCards.forEach((card) => {
      if (card.color === "blue") {
        // setTurnsBlue(turnsBlue + 1);
        bt++;
      } else if (card.color === "red") {
        // setTurnsRed(turnsRed + 1);
        rt++;
      }
    });
    setTurnsBlue(bt);
    setTurnsRed(rt);
  };

  const [hint, setHint] = useState("");
  const [moves, setMoves] = useState(0);

  const [lastID, setLastID] = useState(2);


  if (glob === 0) {
    shuffle(allCards);
    shuffle(allCards);
    shuffle(allCards);
    shuffle(numbers);
    shuffle(numbers);
    shuffle(numbers);
    howManyTurns();
    glob++;
  }

  var chat = (
    <div className="chatbox">
      {messages.map((message) => {
        return (
          <div
            className={`message ${message.team ? "red" : "blue"}`}
            key={message.id}
          >
            {message.msg}
          </div>
        );
      })}
    </div>
  );

  const handleMoves = (e) => {
    setMoves(Number(e.target.value));
  };

  const handleHint = (e) => {
    setHint(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var updated_hint = hint.concat(" ");
    updated_hint = updated_hint.concat(moves);
    updated_hint = updated_hint.toLocaleUpperCase();
    setMessages([
      ...messages,
      { id: lastID + 1, msg: updated_hint, team: whoseTurn },
    ]);
    setWhoseTurn(!whoseTurn);
    setLastID(lastID + 1);
  };

  var hintbox = (
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
        <button class="ui inverted white button large">Send</button>
      </form>
    </div>
  );


  const sendToSocket = () => {
    websocket.send(JSON.stringify({
      'hint': hint,
      'turnsBlue': turnsBlue,
      'turnsRed': turnsRed,
      'chosenCard': chosenCard,
      'pointsBlue': pointsBlue,
      'pointsRed': pointsRed,
      'numBlueSpy': numBlueSpy,
      'numBlueOperative': numBlueOperative,
      'numRedSpy': numRedSpy,
      'numRedOperative': numRedOperative,
      'messages': messages,
      'endGame': endGame, 
      'whoseTurn': whoseTurn
    }))
  }

  useEffect(() => {
    

    if (Object.keys(chosenCard).length !== 0) {
      if (team === "blue") {
        setTurnsBlue(turnsBlue - 1);
      } else if (team === "red") {
        setTurnsRed(turnsRed - 1);
      }

      if (chosenCard.color === "black") {
        if (team === "blue") {
          setPointsBlue(pointsBlue - 100);
          setPointsRed(pointsRed + 450);
          setTurnsBlue(0);
        } else {
          setPointsRed(pointsRed - 100);
          setPointsBlue(pointsBlue + 450);
          setTurnsRed(0);
        }
      } else if (chosenCard.color === team) {
        if (team === "blue") {
          setPointsBlue(pointsBlue + 50);
        } else {
          setPointsRed(pointsRed + 50);
        }
      } else if (chosenCard.color === "grey") {
      } else {
        if (team === "blue") {
          setPointsBlue(pointsBlue - 25);
          setPointsRed(pointsRed + 25);
        } else {
          setPointsRed(pointsRed - 25);
          setPointsBlue(pointsBlue + 25);
        }
      }
    }
    
    sendToSocket();
  }, [chosenCard]);

  useEffect(() => {
    if (turnsBlue === 0 || turnsRed === 0) {
      console.log("ENDGAME");
      var winmessage = "";
      if (pointsBlue > pointsRed) {
        winmessage = `The game has finished and Blue Team won scoring ${pointsBlue} points`;
      } else if (pointsBlue < pointsRed) {
        winmessage = `The game has finished and Red Team won scoring ${pointsRed} points`;
      } else if (pointsBlue === pointsRed) {
        winmessage = `The game has finished and both Blue and Red teams won scoring ${pointsRed} points`;
      }

      setEndGame(1);
      // var alertmessage = {
      //   type: "success",
      //   text: winmessage,
      //   show: true,
      // };
      // setAlert(alertmessage);
    }
    
    sendToSocket();
  }, [turnsBlue, turnsRed]);

  // console.log(chosenCard);

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
    sendToSocket();
  };

  var maingamepage = (
    <div>
      {" "}
      <h1> Room #1</h1>
      <button
        class={`redbutton ui ${
          player === "spymaster" && team === "blue" ? "" : `inverted`
        } small blue button  ${disabled}`}
        onClick={(e) => onClickTeam("spymaster", "blue")}
      >
        Join as spymaster
      </button>
      <button
        class={`redbutton  ui ${
          player === "operative" && team === "blue" ? "" : `inverted`
        } small blue button ${disabled}`}
        id="rightbutton"
        onClick={(e) => onClickTeam("operative", "blue")}
      >
        Join as operative
      </button>
      <button
        class={`bluebutton  ui ${
          player === "spymaster" && team === "red" ? "" : `inverted`
        } small pink button ${disabled}`}
        onClick={(e) => onClickTeam("spymaster", "red")}
      >
        Join as spymaster
      </button>
      <button
        class={`bluebutton  ui ${
          player === "operative" && team === "red" ? "" : `inverted`
        } small pink button ${disabled}`}
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
            <p>Operatives: {numBlueOperative}</p>
            <p>Spymasters: {numBlueSpy}</p>
            <p>Words guessed: </p>
            <p>Points earned: {pointsBlue} </p>
            <p>Turns left: {turnsBlue} </p>
          </div>
        </div>

        {/* First Column */}
        <div className="two wide column">
          <Card
            word={allCards[0].word}
            color={allCards[0].color}
            number={numbers[0]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[1].word}
            color={allCards[1].color}
            number={numbers[1]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[2].word}
            color={allCards[2].color}
            number={numbers[2]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[3].word}
            color={allCards[3].color}
            number={numbers[3]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[4].word}
            color={allCards[4].color}
            number={numbers[4]}
            setChosenCard={setChosenCard}
            player={player}
          />
        </div>

        {/* Second Column */}
        <div className="two wide column">
          <Card
            word={allCards[5].word}
            color={allCards[5].color}
            number={numbers[5]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[6].word}
            color={allCards[6].color}
            number={numbers[6]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[7].word}
            color={allCards[7].color}
            number={numbers[7]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[8].word}
            color={allCards[8].color}
            number={numbers[8]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[9].word}
            color={allCards[9].color}
            number={numbers[9]}
            setChosenCard={setChosenCard}
            player={player}
          />
        </div>

        {/* Third Column */}
        <div className="two wide column">
          <Card
            word={allCards[10].word}
            color={allCards[10].color}
            number={numbers[10]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[11].word}
            color={allCards[11].color}
            number={numbers[11]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[12].word}
            color={allCards[12].color}
            number={numbers[12]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[13].word}
            color={allCards[13].color}
            number={numbers[13]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[14].word}
            color={allCards[14].color}
            number={numbers[14]}
            setChosenCard={setChosenCard}
            player={player}
          />
        </div>

        {/* Fourth Column */}
        <div className="two wide column">
          <Card
            word={allCards[15].word}
            color={allCards[15].color}
            number={numbers[15]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[16].word}
            color={allCards[16].color}
            number={numbers[16]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[17].word}
            color={allCards[17].color}
            number={numbers[17]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[18].word}
            color={allCards[18].color}
            number={numbers[18]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[19].word}
            color={allCards[19].color}
            number={numbers[19]}
            setChosenCard={setChosenCard}
            player={player}
          />
        </div>

        {/* Fifth Column */}

        <div className="two wide column">
          <Card
            word={allCards[20].word}
            color={allCards[20].color}
            number={numbers[20]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[21].word}
            color={allCards[21].color}
            number={numbers[21]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[22].word}
            color={allCards[22].color}
            number={numbers[22]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[23].word}
            color={allCards[23].color}
            number={numbers[23]}
            setChosenCard={setChosenCard}
            player={player}
          />
          <Card
            word={allCards[24].word}
            color={allCards[24].color}
            number={numbers[24]}
            setChosenCard={setChosenCard}
            player={player}
          />
        </div>

        <div className="three wide column">
          <div className="icon-image red">
            <img src={icon2} alt="icon2" />
          </div>
          <div className="game-info two">
            <h4>Team Red</h4>
            <p>Operatives: {numRedOperative}</p>
            <p>Spymasters: {numRedSpy}</p>
            <p>Words guessed: </p>
            <p>Points earned: {pointsRed} </p>
            <p> Turns left: {turnsRed}</p>
          </div>
          {chat}
        </div>
      </div>
      {player === "spymaster" ? hintbox : null}
    </div>
  );

  return (
    <div id="gamepage">
      <Menu />
      {endGame === 1 ? (
        <EndMessage pointsBlue={pointsBlue} pointsRed={pointsRed} />
      ) : (
        maingamepage
      )}
    </div>
  );
};

export default GamePage;
