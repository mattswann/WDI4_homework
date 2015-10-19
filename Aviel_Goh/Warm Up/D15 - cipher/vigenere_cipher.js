/*
Vigenere Cipher

Implement a Vigenere Cipher using JavaScript. You should be able to encode and decode a word when given a keyword. Read the Wikipedia description here

A quick rundown of the steps:

You take the message you want to encrypt (in this case 'attackatdawn').
message: attackatdawn

You take the keyword you want to encrypt with (in this case 'lemon'), and repeat it so that it is the length as your message.
keyword: lemonlemonle

You add each letter of the message to each letter of the keyword to produce each letter of the ciphertext. For example, for the first letter:

message: 'a' is index 0 in the alphabet
keyword: 'l' is index 11 in the alphabet
ciphertext: letter at index (0 + 11), which is 'l'
ciphertext: lxfopvefrnhr

Create a single HTML page with some basic style and a linked JS file to display your results. Hint--> use underscore to help
*/

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var submitButton = document.getElementById('submitButton');

var cipherText = [];;

var decipher = function() {

  var plainText = document.getElementById('plainText').value;
  var keyword = document.getElementById('keyword').value;
  var keywordText = keyword.repeat(plainText.length).slice(0,plainText.length);

  var keywordIndex;
  var plainTextIndex;
  var alphabetIndex;

  for (var i = 0; i <= plainText.length; i += 1) {
    keywordIndex = alphabet.indexOf(keywordText[i]);
    plainTextIndex = alphabet.indexOf(plainText[i]);

    if ((keywordIndex + plainTextIndex) > 26) {
      alphabetIndex = (keywordIndex + plainTextIndex) - 26
    } else {
      alphabetIndex = (keywordIndex + plainTextIndex)
    }

    cipherText.splice([i], 0, alphabet[alphabetIndex]);
  }

    console.log(cipherText.join(''));
    cipherText = [];
}

submitButton.addEventListener('click', decipher);
