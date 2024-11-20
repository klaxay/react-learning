// src/App.js
import "./App.css";
import Die from "./components/Die";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid"; // If you chose to install nanoid

function App() {
  // Function to generate a random number between 1 and 6
  function generateRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Function to create a new die object
  function createNewDie() {
    return {
      id: nanoid(), // Unique ID
      value: generateRandomNum(),
      isHeld: false,
    };
  }

  // Function to create an array of new dice
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(createNewDie());
    }
    return newDice;
  }

  // State for dice
  const [dice, setDice] = useState(allNewDice());

  // State for game status
  const [tenzies, setTenzies] = useState(false);

  // Check for winning condition
  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You won!");
    }
  }, [dice]);

  // Function to hold a die
  function holdDie(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  // Function to roll dice
  function rollDice() {
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.isHeld ? die : createNewDie()
        )
      );
    } else {
      // Reset the game
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  // Map through dice to create Die components
  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDie={() => holdDie(die.id)}
    />
  ));

  return (
    <div className="App">
      <div className="box">
        <h1>TENZIES</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze at its current
          value between rolls.
        </p>
        <div className="dice--container">{diceElements}</div>
        <button className="btn" onClick={rollDice}>
          {tenzies ? "New Game" : "ROLL"}
        </button>
        {tenzies && <p className="congrats">Congratulations! You won!</p>}
      </div>
    </div>
  );
}

export default App;
