import React from 'react'
import { range } from '../../utils';

export default function Guess({ guess }) {
  console.log(guess);
  return (
    <p className='guess'>
      {range(5).map((cell, guessIndex) => (
            <span key={guessIndex} className='cell'>
              {
                guess 
                  ? guess.guess[guessIndex]
                  : ''
              }
            </span>
          ))}
    </p>
  )
}
