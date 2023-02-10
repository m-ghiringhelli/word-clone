import React from 'react'

export default function GuessList({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map(({ guess }, index) => <p key={index} className='guess'>{guess}</p>)}
    </div>
  )
}
