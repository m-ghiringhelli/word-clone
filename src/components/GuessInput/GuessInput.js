import React from 'react'

export default function GuessInput() {
  const [guess, setGuess] = React.useState({});
  const [guessText, setGuessText] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setGuess({ guess: guessText });
    setGuessText('');
  }

  function handleChange(e) {
    if (guessText.length >= 5) return;
    setGuessText(e.target.value.toUpperCase());
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={guessText}
        onChange={handleChange}></input>
    </form>
  )
}
