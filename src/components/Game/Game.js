import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  
  return  (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput guesses={guesses} setGuesses={setGuesses} />
    </>
  )
}

export default Game;
