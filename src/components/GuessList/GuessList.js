import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

export default function GuessList({ guesses }) {
  console.log(guesses);
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((row, index) => (
        <p key={index} className='guess'>
          {range(5).map((cell, guessIndex) => (
            <span key={guessIndex} className='cell'>
              {
                guesses[index]
                  ? guesses[index].guess[guessIndex]
                  : ''
              }
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}
