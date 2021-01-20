function hangman(){

    var secretWords = ["javascript", "react", "css", "nodejs", "sql", "html", "github"];
    var chosenWord = secretWords[Math.floor(Math.random() * secretWords.length)];
    let printedWord = chosenWord.replace(/./g,'-' );
    var guesses = 8;
    while (true) {
      const guess = prompt(`Guess a letter, ${guesses} remaining`);
      if (!guess) break;
      const guessLowerCase = guess.toLowerCase();
      let found = false;
      for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === guessLowerCase) {
          printedWord = printedWord.slice(0, i) + guessLowerCase + printedWord.slice(i + 1);
          found = true;
          let alreadyGuessed = chosenWord[i];
        }
      }
      alert(printedWord);
      if (!printedWord.includes('-')) {
        alert('You Win');
        break;
      }
      if (!found) guesses--;
      if (guesses === 0) {
        alert(`You lose, The correct word was ${chosenWord}`);
        break;
      }
    }
    
    }