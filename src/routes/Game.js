import React, { useState } from 'react';
import Player from './Balloon';
import Batu from '../component/batu';
import Kertas from '../component/kertas';
import Gunting from '../component/Gunting';
import Modal from '../component/modal';

const Game = () => {
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (choice) => {
    const choices = [Batu, Kertas, Gunting];
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    setPlayer1Choice(choice);
    setPlayer2Choice(player2Choice);

    if (choice === player2Choice) {
      setResult('Draw');
    } else if (
      (choice === Batu && player2Choice === Gunting) ||
      (choice === Kertas && player2Choice === Batu) ||
      (choice === Gunting && player2Choice === Kertas)
    ) {
      setResult('you win!')
    } else {
      setResult('You lose!');
    }
  };

  return (
    <div>
      <Player name="You" choice={player1Choice} result={result} />
      <Player name="Computer" choice={player2Choice} />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => handleChoice(Batu)}>Rock</button>
        <button onClick={() => handleChoice(Kertas)}>Paper</button>
        <button onClick={() => handleChoice(Gunting)}>Scissors</button>
      </div>
    </div>
  );
};

export default Game;
