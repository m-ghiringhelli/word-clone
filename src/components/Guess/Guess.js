import React from 'react'
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

export default function Guess({ guess, answer }) {
  const value = guess?.guess;
  const evaluatedGuess = checkGuess(value , answer);
  console.log('here', evaluatedGuess)
  return (
    <p className='guess'>
      {range(5).map((cell, guessIndex) => (
            <span key={guessIndex} className={
              `cell ${
                guess 
                  ? evaluatedGuess[guessIndex].status
                  : ''
              }`
            }>
              {
                guess 
                  ? evaluatedGuess[guessIndex].letter
                  : ''
              }
            </span>
          ))}
    </p>
  )
}