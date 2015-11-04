var turnsLeft = 10; letterGuessed = [], secretWord = [], guessedSecretWord = [];
var charAnswered = 0;
var inputs = document.getElementsByTagName('input');
var startBtn = document.getElementById('start-btn');
var resetBtn = document.getElementById('reset-btn');

document.getElementById('reset-btn').style.display = 'none';
document.getElementsByClassName('game-wrapper')[0].style.display = 'none';

var wordPicker = function() {
  arrOfWords = ['ASHURE', 'BLACK', 'BLANCMANGE', 'CHOCOLATE', 'FLUMMERY'];
  word = arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
  return word;
}

var gettingReady = function(word) {
  // secretWord = word.split('');

  // var yada = word.split('')
  // var space = ' ';
  for ( var i = 0; i < word.length; i++ ) {
    // if ( yada[i] === space) {
    //   guessedSecretWord.push(' ');
    // } else {
      guessedSecretWord.push('_');
    // }
  }
  document.getElementsByClassName('game-wrapper')[0].style.display = 'block';
  document.getElementById('start-btn').style.display = 'none';
  document.getElementById('reset-btn').style.display = 'block';
  document.getElementById('no-of-turn').innerHTML = turnsLeft;
  document.getElementById('letter-guessed').innerHTML = letterGuessed;
  document.getElementById('secret-word').innerHTML = guessedSecretWord.join(' ');
  document.getElementById('win-or-lose').innerHTML = '';
};

var checkWord = function(letter) {
  // for ( var i = 0; i < secretWord.length; i++ ) {
  //   if ( secretWord[i] === letter ) {  
  //     guessedSecretWord[i] = letter;
  //     charAnswered++;
  //     ( charAnswered === word.length ) ? winGame() : 0;
  //   }
  // }
  var i;
  for ( i = 0; i < word.length; i++ ) {
    if ( word.charAt(i) === letter ) {
      guessedSecretWord[i] = letter;
      charAnswered++;
      ( charAnswered === word.length ) ? winGame() : 0;
    }
  }

  --turnsLeft;
  letterGuessed.push(letter);
  document.getElementById('no-of-turn').innerHTML = turnsLeft;
  document.getElementById('secret-word').innerHTML = guessedSecretWord.join(' ');
  document.getElementById('letter-guessed').innerHTML = letterGuessed.join(' ');

  if ( turnsLeft === 0 ) {
    gameOver();
  }

};

var winGame = function() {
  document.getElementById('win-or-lose').innerHTML = 'You get it right!'
  disableKeyboard();
}

var gameOver = function() {
  document.getElementById('secret-word').innerHTML = 'The word you looking for is ' + word;
  disableKeyboard();
}

var startGame = function() {
  wordPicker();
  gettingReady(word);
  enableKeyboard();
};

var resetGame = function() {
  turnsLeft = 10; letterGuessed = [], secretWord = [], guessedSecretWord = [], charAnswered = 0;
  startGame();
};

var disableKeyboard = function() {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === 'button') {
        inputs[i].disabled = true;
    }
  }
}

var enableKeyboard = function() {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === 'button') {
        inputs[i].disabled = false;
    }
  }
}

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
// disableKeyboard();