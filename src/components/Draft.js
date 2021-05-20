import React, {useContext, useEffect} from 'react'
import {GameContext} from '../context/GameContext'

const Draft =()=> {
  const [gameObj, setGameObj] = useContext(GameContext);
  let moves, hint;

  


  const decreaseMoves = () => {
    let moves = gameObj.moves - 1;
    setGameObj({ moves: moves });
  }

  useEffect(()=>{
    console.log(gameObj);
    console.log(gameObj.gameOver);  
  })

  const handleChange = (e)=>{
    // console.log("name: ",e.target.name);
    // console.log("value: ",e.target.value);
    let newState = Object.assign({}, gameObj);
    newState.[e.target.name] = e.target.value;
    setGameObj(newState);
    // setGameObj({ [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hint and number of possible moves sent to agents from spymaster");
    // startTurn();
    // print();
  }

  const print =()=>{
    console.log(gameObj.hint);
    console.log(gameObj.moves);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input name="hint" type="text" value={gameObj.hint} onChange={handleChange}/>
      <input name="moves" type="number" value={gameObj.moves} onChange={handleChange}/>
      <button>send</button>
    </form>
    
    </>
  )
}

export default Draft;