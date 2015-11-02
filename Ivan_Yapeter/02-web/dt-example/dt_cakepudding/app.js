var game = {

  wordList: ['pudding','cake','hotdog'],
  MAX_GUESSES: 8,
  secret: [],
  puzzle: [],
  guessedLetters: [],

  init: function() {
    game.setSecret();
    game.setPuzzle();
  }, // END OF INIT

  setSecret: function() {
    game.secret = _.sample(game.wordList).split('');
  }, // END OF SETSECRET

  setPuzzle: function() {
    game.puzzle = Array(game.secret.length + 1).join('_').split('');
  }, // END OF SETPUZZLE

  guessesLeft: function() {
    return (game.MAX_GUESSES - game.guessedLetters.length);
  }, // END OF GUESSES LEFT

  guess: function(letter) {
    game.guessedLetters.push(letter);

    ////////////////////////////////////////////////////////////
    // work out the puzzle display
    // secret = ['c', 'a', 'k', 'e'];
    // puzzle = ['_', '_', '_', '_'] ===> ['_', '_', 'k', '_'];
    ////////////////////////////////////////////////////////////

    _.each(game.secret, function(secretLetter, index) {
      if ( letter === secretLetter ) {
        game.puzzle[index] = letter;
      }
    });
  } // END OF GUESS

} // END OF GAME

window.onload = function() {
  game.init();
  window.addEventListener('keyup', function() {
    game.guess(String.fromCharCode(event.which)); // To get the keystroke and convert it to Char
  });
};