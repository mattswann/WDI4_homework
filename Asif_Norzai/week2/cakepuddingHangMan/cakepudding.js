/********************THE CakePudding App**********************************/
var KeepRecord = {
  guessWordsArray: ['melbourne', 'kabul', 'kandahar', 'sydney', 'new york', 'perth', 'london'],
  turns: 5,
};

var textInput = document.getElementsByTagName('input')[0];
var guessedLettersOutput = document.getElementsByClassName('guessedLetters')[0];
var livesLeft = document.getElementsByClassName('moveRight')[0];
var guessedIt = '';
var gotItwrong = '';
var randomly = '';
// var span = document.createElement("span");
// var node = document.createTextNode("Syndey");
//Displaying Random Guess
function randomGuess() {
  // randomly = KeepRecord.guessWordsArray[Math.floor(Math.random() *    KeepRecord.guessWordsArray.length)];
  // return randomly.toString();
  return _.sample(KeepRecord.guessWordsArray);
}
var Tostring = randomGuess();
var InsertGussed = guessedLettersOutput.innerHTML = '';
var stringFromCode;


function myKeyPress(word){
  var keynum;
  if(word.which){ // Netscape/Firefox/Opera
    keynum = word.which;
    stringFromCode = String.fromCharCode(keynum);
  }
      // guessedLettersOutput.innerHTML += KeepRecord.alphabet[i];
  for (var i = 0; i < Tostring.length; i++) {
    if(stringFromCode === Tostring.charAt(i)) {
          guessedLettersOutput.innerHTML += Tostring.charAt(i);
          if (guessedLettersOutput.innerHTML === 'kandahar') {
             guessedLettersOutput.innerHTML = 'You have guessed Kandahar right but there are still MISTAKES present in your code! FIX IT!';
          } else if (guessedLettersOutput.innerHTML === 'melbourne') {
            guessedLettersOutput.innerHTML = 'You have guessed Melbourne right but there are still MISTAKES present in your code! FIX IT!';
          } else if (guessedLettersOutput.innerHTML === 'london') {
            // guessedLettersOutput.sort()
            guessedLettersOutput.innerHTML = 'You have guessed London right but there are still MISTAKES present in your code! FIX IT!';
          } else if (guessedLettersOutput.innerHTML === 'perth') {
            guessedLettersOutput.innerHTML = 'You have guessed Perth right but there are still MISTAKES present in your code! FIX IT!';
          } else if (guessedLettersOutput.innerHTML === 'kabul') {
            guessedLettersOutput.innerHTML = 'You have guessed Kabul right but there are still MISTAKES present in your code! FIX IT!';
          } else if (guessedLettersOutput.innerHTML === 'new york') {
            guessedLettersOutput.innerHTML = 'You have guessed New York right but there are still MISTAKES present in your code! FIX IT!';
          } else if (guessedLettersOutput.innerHTML === 'sydney') {
            guessedLettersOutput.innerHTML = 'You have guessed Sydney right but there are still MISTAKES present in your code! FIX IT!';
          }
          return;
      } else {
        KeepRecord.turns--;
        livesLeft.innerHTML = KeepRecord.turns;
      }
      // else if (stringFromCode !== Tostring.charAt(i)) {
      //   guessedLettersOutput.innerHTML = stringFromCode;
      // }
      // return;
    }
  // if (KeepRecord.turns < 1) {
  //   document.getElementById('container').innerHTML = "You Have Lost The Game!\n Refresh The Page To Play Again!"
  // }
}

function printEmOut() {
    if (stringFromCode === 'kaaandaaahaaar') {
    document.getElementsByClassName('triedLett').innerHTML = stringFromCode;
  }
}


function decrementIt() {
  KeepRecord.turns--;
  livesLeft.innerHTML = KeepRecord.turns;
}
// span.appendChild(node);
// guessedLettersOutput.appendChild(span);

console.log(Tostring);
// function insertHTML() {
//   guessedLettersOutput.innerHTML = randomGuess();
// }

















// document.onkeypress = function(myEvent) { // doesn't have to be "e"
//     var keynum;
//     keynum = myEvent.which;
//     console.log(String.fromCharCode(keynum));
//     if(String.fromCharCode(keynum) === 'h') {
//       alert('You pressed ' + String.fromCharCode(keynum));
//     }
// };
