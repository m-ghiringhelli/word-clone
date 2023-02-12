import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../Guess/Guess';

export default function GuessList({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((row, index) => (
        <Guess 
          key={index} 
          guess={guesses[index] || null}
          answer={answer}
        />
      ))}
    </div>
  )
}
