import './index.css';
import './App.css';
import {useState} from "react";

const App=()=> {
  const [diceNumber, setDiceNumber] = useState(2);
  const [diceNumber2, setDiceNumber2] = useState(4);
  const refreshDice = () => {
    const ranno = Math.floor(Math.random()*6)+1
    setDiceNumber(ranno)
    const ranno2 = Math.floor(Math.random()*6)+1
    setDiceNumber2(ranno2)
  }
  return (
    <div>
      <h2>Roll These Dice</h2>
         <img src = {require(`./assets/${diceNumber}.png`)}></img>
     <img src = {require(`./assets/${diceNumber2}.png`)}></img>
  <br/>
     <button onClick = {()=> refreshDice() }className = "button">Roll</button>
    </div>
  );
}

export default App;
