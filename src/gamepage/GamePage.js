import React, { useState, useEffect, useRef, useContext } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
import EndMessage from "./EndMessage";
import "./GamePage.css";
import Menu from "../components/Menu";
import icon1 from "../media/cards/icon1.png";
import icon2 from "../media/cards/icon2.png";
import allStaticCards from "./cards";
import AllColumns from "./AllColumns";
import Buttons from "./Buttons";
import { LoginContext } from "../context/LoginContext";

const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];

var team_glob = 0;

var glob = 0;

const GamePage = ({ gameId, setGameId }) => {
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.2);
  };

  const [pointsRed, setPointsRed] = useState(0);
  const [allCards, setAllCards] = useState(allStaticCards);
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
  const [socketSentCounter, setSocketSentCounter] = useState(0);
  const [turnChanged, setTurnChanged] = useState(true);
  const [disableTeam, setDisableTeam] = useState();
  const [hint, setHint] = useState("");
  const [moves, setMoves] = useState(1);
  const [lastID, setLastID] = useState(2);
  const [cardsDisabled, setCardsDisabled] = useState(false);
  const [localGameId, setLocalGameId] = useState(gameId);
  const [teamBlueIdGame, setTeamBlueIdGame] = useState("");
  const [teamRedIdGame, setTeamRedIdGame] = useState("");
  const [playerId, setPlayerId] = useState("");
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
  const [WS, setWS] = useState(null);
  const { value1, value2, value3, value4 } = useContext(LoginContext);
  const [logedIn, setLogedIn] = value1;
  const [token, setToken] = value2;
  const [user, setUser] = value3;
  const [user_id, setUserId] = value4;
  var auth = `Token ${token}`;
  let history = useState();

  // USE EFFECTS --------------------------------------------
  useEffect(() => {
    if (gameId === 0 || (gameId === "" && logedIn)) {
      var str = window.location.href;
      var res = str.slice(31);
      setLocalGameId(res);
    }
  }, []);
 
  // connect when opened page
  useEffect(() => {
    connect();
    // console.log("use effect connect");
  }, [0]);

  useEffect(() => {

    if (gameId === 0 || gameId === "") {
      // console.log("gameid", gameId);
      var str = window.location.href;
      var res = str.slice(31);
      setLocalGameId(res);
    }
    // console.log("local game id", localGameId);
  }, []);

  useEffect(() => {
    // console.log("use effect chosen card");
    console.log("use effect chosen card");
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
        // console.log("grey card, no change");
      } else {
        if (team === "blue") {
          setPointsBlue(pointsBlue - 25);
          setPointsRed(pointsRed + 25);
          setWhoseTurn(0);
        } else {
          setPointsRed(pointsRed - 25);
          setPointsBlue(pointsBlue + 25);
          setWhoseTurn(1);
        }
        // console.log("change whoseTurn");
        setTurnChanged(true);
      }
    }
    allCards.forEach((element) => {
      if (element.word === chosenCard.word) {
        element.is_open = 1;
      }
    });
    setAllCards(allCards);
    setMoves((prev) => prev - 1);
    setSocketSentCounter((prev) => prev + 1);
    // sendToSocket();
  }, [chosenCard]);

  useEffect(() => {
    // console.log("use ffect turns bue and red");
    if (turnsBlue === 0 || turnsRed === 0) {
      // console.log("ENDGAME", endGame);
      var winmessage = "";
      if (pointsBlue > pointsRed) {
        winmessage = `The game has finished and Blue Team won scoring ${pointsBlue} points`;
      } else if (pointsBlue < pointsRed) {
        winmessage = `The game has finished and Red Team won scoring ${pointsRed} points`;
      } else if (pointsBlue === pointsRed) {
        winmessage = `The game has finished and both Blue and Red teams won scoring ${pointsRed} points`;
      }
      setEndGame(1);
      setSocketSentCounter((prev) => prev + 1);
    }

    // sendToSocket();
  }, [turnsBlue, turnsRed]);

  const messageEl = useRef(null);

  useEffect(() => {
    // console.log("use effect socketSentCounter");

    sendToSocket();
    checkWhoseTurn();
    if (messageEl && messageEl.current) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, [socketSentCounter]);

  useEffect(() => {
    // console.log("use effect checkWhoseTurn team");
    checkWhoseTurn();
  }, [team, whoseTurn]);

  useEffect(() => {
    // console.log("use effect handleDisable disableTeam");
    handleDisable();
  }, [disableTeam]);

  useEffect(() => {
    // console.log("use effect moves");
    if (moves < 0) setMoves(0);
    if (moves === 0) {
      if (team === "blue" && whoseTurn === 1) setWhoseTurn(0);
      else if (team === "red" && whoseTurn === 0) setWhoseTurn(1);
    }
  }, [moves]);

  const checkWhoseTurn = () => {
    // console.log("checkWhoseTurn function");
    // console.log("whoseTurn value in checkWhoseTurn:", whoseTurn);
    if (whoseTurn) {
      setDisableTeam(0); // disable blue team
      // console.log("team 0 (red) will be disabled to touch cards", team);
    } else {
      setDisableTeam(1); // disable red team
      // console.log("team 1 (blue) will be disabled to touch cards", team);
    }

    handleDisable();
  };
  const handleDisable = () => {
    // console.log(
    //   "handleDisable function: handle disable data:",
    //   team,
    //   disableTeam
    // );
    if (
      (team === "blue" && disableTeam === 1) ||
      (team === "red" && disableTeam === 0)
    ) {
      // setCardsDisabled("disabled");
      setCardsDisabled(true);
      // console.log("cards are set to disable");
    } else {
      // setCardsDisabled("");
      setCardsDisabled(false);
      // console.log("cards are NOT disabled");
    }
  };

  let timeout = 250; // 250ms

  const howManyTurns = () => {
    // console.log("howManyTurns function");
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

  if (glob === 0) {
    howManyTurns();
    glob++;
  }

  var chat = (
    <div className="chatbox" ref={messageEl}>
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
    // console.log("handleMoves", Number(e.target.value));
    setMoves(Number(e.target.value));
  };

  const handleHint = (e) => {
    // console.log("handleHint");
    setHint(e.target.value);
  };

  const handleSubmit = (e) => {
    // console.log("handleSubmit");
    e.preventDefault();
    var updated_hint = hint.concat(" ");
    updated_hint = updated_hint.concat(moves);
    updated_hint = updated_hint.toLocaleUpperCase();

    setMessages([
      ...messages,
      { id: lastID + 1, msg: updated_hint, team: whoseTurn },
    ]);
    setLastID(lastID + 1);
    setSocketSentCounter((prev) => prev + 1);
  };

  const sendToSocket = () => {
    console.log("sendTOSocket");
    if (WS) {
      console.log("send moves:", moves);
      WS.send(
        JSON.stringify({
          // 'hint': hint,
          turnsBlue: turnsBlue,
          turnsRed: turnsRed,
          cards: allCards,
          pointsBlue: pointsBlue,
          pointsRed: pointsRed,
          numBlueSpy: numBlueSpy,
          numBlueOperative: numBlueOperative,
          numRedSpy: numRedSpy,
          numRedOperative: numRedOperative,
          endGame: endGame,
          whoseTurn: whoseTurn,
          messages: messages,
          moves: moves,
          // 'message': "hello"
        })
      );
    } else {
      console.log("WS is null");
    }
  };

  const connect = () => {
    var ws = new WebSocket("ws://localhost:8000/ws/api/gameroom/");
    var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
      console.log("connected websocket main component");

      setWS(ws);

      timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    ws.onmessage = (message) => {
      let data = JSON.parse(message.data);
      console.log("received:", data);

      setMessages(data.messages);
      setTurnsBlue(data.turnsBlue);
      setTurnsRed(data.turnsRed);
      setAllCards(data.cards);
      setNumBlueOperatives(data.numBlueOperative);
      setNumberRedOperative(data.numRedOperative);
      setNumBlueSpy(data.numBlueSpy);
      setNumRedSpy(data.numRedSpy);
      setPointsBlue(data.pointsBlue);
      setPointsRed(data.pointsRed);
      setEndGame(data.endGame);
      setWhoseTurn(data.whoseTurn);
      setMoves(data.moves);
    };

    // websocket onclose event listener
    ws.onclose = (e) => {
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (timeout + timeout) / 1000
        )} second.`,
        e.reason
      );

      timeout = timeout + timeout; //increment retry interval
      connectInterval = setTimeout(check, Math.min(10000, timeout)); //call check function after timeout
    };

    // websocket onerror event listener
    ws.onerror = (err) => {
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );

      ws.close();
    };
  };

  /**
   * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
   */
  const check = () => {
    console.log("check");
    if (!WS || WS.readyState === WebSocket.CLOSED) connect(); //check if websocket instance is closed, if so call `connect` function.
  };

  var hintbox = (
    <div className="hintbox container">
      {turnChanged ? (
        whoseTurn ? (
          <p className="teams-turn">Team Blue's turn now</p>
        ) : (
          <p className="teams-turn">Tema Red's turn now</p>
        )
      ) : null}
      <form className="hintform ui form" onSubmit={handleSubmit}>
        <div className="field form-field">
          <label htmlFor="hint" className="preg">
            Hint:
          </label>
          <input
            className="hint"
            value={hint}
            type="text"
            id="hint"
            name="hint"
            onChange={handleHint}
          />
        </div>
        <div className="field form-field">
          <label htmlFor="moves" className="preg">
            Moves:{" "}
          </label>
          <input
            className="moves"
            value={moves}
            placeholder={1}
            min={1}
            type="number"
            id="moves"
            name="moves"
            onChange={handleMoves}
          />
        </div>
        <button className="ui inverted white button large form-button">
          Send
        </button>
      </form>
    </div>
  );

  var maingamepage = (
    <div className="main-page">
      {" "}
      <h1> Room #1</h1>
      <Buttons
        player={player}
        team={team}
        disabled={disabled}
        setPlayer={setPlayer}
        setTeam={setTeam}
        setDisabled={setDisabled}
        setNumBlueSpy={setNumBlueSpy}
        setNumBlueOperatives={setNumBlueOperatives}
        setNumRedSpy={setNumRedSpy}
        setNumberRedOperative={setNumberRedOperative}
        setSocketSentCounter={setSocketSentCounter}
        numBlueSpy={numBlueSpy}
        numBlueOperative={numBlueOperative}
        numRedSpy={numRedSpy}
        numRedOperative={numRedOperative}
        create_player_id
        playerId={playerId}
        setPlayerId={setPlayerId}
        gameId={gameId}


      />
      <div className="ui grid container">
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
          {player === "spymaster" ? hintbox : null}
        </div>

        <AllColumns
          whoseTurn={whoseTurn}
          allCards={allCards}
          team={team}
          numbers={numbers}
          setChosenCard={setChosenCard}
          player={player}
          cardsDisabled={cardsDisabled}
        />

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
      {/* {player === "spymaster" ? hintbox : null} */}
    </div>
  );

  return (
    <div id="gamepage">
      <Menu />
      {maingamepage}
      {/* {endGame === 1 ? (
        <EndMessage pointsBlue={pointsBlue} pointsRed={pointsRed} />
      ) : (
        maingamepage
      )} */}
    </div>
  );
};

export default GamePage;
