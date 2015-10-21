console.log("cakepudding.js is running!");

/*NOTE
+ This is an edited version of cakepudding.js

+ try to shorten the code using undersore.js
	- [] randIndex, use _.random
+ [] add warnings
+ [] account for double letters for the starting clue
		+ [] push this letter to lettersArray
+ [] check when user inputs letter already chosen
+ [x] pressing enter when you erase the word counts as an input
+ [] space counts as an input
*/

// GLOBAL VARIABLES
var words =["mint", "vanilla", "pistachio", "chocolate", "caramel", "hazelnut", "coconut", "carrot", "banana", "strawberry", "matcha", "blueberry"];
// var correctGuess = []; // letters which are correctly guessed
var lettersGuessed = [""]; // letters which have already been guessed
var inputLetter = document.getElementById('guess'); // gets the id of the input

var randWord; // random word 
var splitWord; // splits randWord into an array of letters
var secretWord; // the word with blanks

var printWord = document.getElementsByClassName('words')[0];
var resetBtn =  document.getElementById('reset');

var chances = 3;
var gameContinue = true;

// turns all letters into blanks, except for the random letter
var makeSecret = function(lettersArray) {
	// var randIndex = Math.round(Math.random() * (lettersArray.length - 1));
	var randIndex = _.random(0, lettersArray.length - 1);
	var madeSecret = [];
	for (var i = 0; i < lettersArray.length; i++){
		madeSecret.push("_ ");
	}
	madeSecret.splice(randIndex, 1, lettersArray[randIndex]);

	return madeSecret;
}

// changing first image
var changeImage = function(imgSrc) {
	var image = document.getElementsByTagName('img')[0];
	
	if (imgSrc) {
     	image.src = imgSrc;
	} else if (chances === 3) {
		image.src = "images/cake-3.png";
	} else if (chances === 2) {
     	image.src = "images/cake-2.png";
    } else if (chances === 1) {
     	image.src = "images/cake-1.png";
    } else {
    	image.src = "images/cry.gif";
    } 
}

// sets a new word and resets score
var resetGame = function() {
	lettersGuessed = [""];
	chances = 3;
	gameContinue = true;
	changeImage();
	
	// var randIndex = Math.round(Math.random() * (words.length - 1));
	var randIndex = _.random(0, words.length - 1);
	randWord = words[randIndex];
	splitWord = randWord.split("");
	
	secretWord = makeSecret(splitWord);

	console.log("random word: ", randWord);
	printWord.innerHTML = secretWord.join("");
	
	return secretWord;
}

// checks if input letter is correct
var isCorrectLetter = function() {
console.log("================")
	var correct = 0;
	if (gameContinue) { // has the game ended? run if true
		if (_.contains(lettersGuessed, inputLetter.value)) { // if the letter is repeated
			console.log("you already chose that!");
		} else {
			for (var i = 0; i < splitWord.length; i++) { // loop through letters
				if (inputLetter.value === splitWord[i]) {
					console.log("yay!", inputLetter.value);
					secretWord.splice(i, 1, splitWord[i]); // change blank to letter
					printWord.innerHTML = secretWord.join(" ");
					correct++;
				}
			}
			lettersGuessed.push(inputLetter.value);

			if (correct === 0) { // if the letter didn't match any 
				chances--; // decrease chances
				changeImage(); 
				console.log("chances left: ", chances);
			}

			if (chances === 0) {
				console.log("you lose!");
				printWord.innerHTML = "no cake for you!";
				gameContinue = false; // game has ended
			}
			console.log("already guessed: ", lettersGuessed);
		}

		// if all letters guessed
		if (secretWord.join("") === splitWord.join("")) {
			console.log("you win!");
			printWord.innerHTML = "cake is yours!";
			changeImage("images/eat.gif");
			gameContinue = false;
		}
	}
}

inputLetter.addEventListener('change', isCorrectLetter);
resetBtn.addEventListener('click', resetGame);
