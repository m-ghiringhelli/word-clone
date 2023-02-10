import React from 'react'

export default function GuessInput({ guesses, setGuesses }) {
  const [guess, setGuessText] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) return;
    const nextGuesses = [...guesses, { guess }];
    setGuesses(nextGuesses);
    setGuessText('');
  }

  function handleChange(e) {
    if (guess.length >= 5) return;
    setGuessText(e.target.value.toUpperCase());
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={guess}
        onChange={handleChange}></input>
    </form>
  )
}
