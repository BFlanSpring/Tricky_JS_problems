function guessingGame() {
    const randomNum = Math.floor(Math.random() * 100);
    let isGameOver = false;
    let attempts = 0;
  
    return function(guess) {
      if (isGameOver) {
        return "The game is over, you already won!";
      }
  
      attempts++;
  
      if (guess === randomNum) {
        isGameOver = true;
        return `You win! You found ${guess} in ${attempts} guesses.`;
      } else if (guess < randomNum) {
        return `${guess} is too low!`;
      } else {
        return `${guess} is too high!`;
      }
    };
  }
  

module.exports = { guessingGame };
