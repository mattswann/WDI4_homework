console.log("decider.js is working");

/*
The Ultimate Life Decider

Never make a decision again!

Part One - The Coin of Inevitability

Create a file called decider.js
Write a function called coinFlip that 'console.logs' HEADS or TAILS when called
Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.
Part Two - The Coin App

Create a file called decider.html
Find any coin image online
Link the .js file, while you're there you may also decide to add a .css file for some styling
Now add the necessary components to the decider.html file so that when the coin image is clicked the coinFlip function result and tally are returned somewhere on the page.
*/

var coinToss;

var changeImage = function(imgSrc) {
     image = document.getElementById('coin');
     image.src = imgSrc;
 }

var coinFlip = function() {
	var coin;
	var random = Math.random();
	
		if (random <= 0.5) {
			coin = "heads";
			changeImage("coinheads.PNG");
		} else if (random > 0.5) {
			coin = "tails";
			changeImage("cointails.PNG")
		}
	return coin;
}

var gameWinner = function() {
	var counterHeads = 0;
	var counterTails = 0;
	var winner;
	while (counterHeads < 5 && counterTails < 5) {	
		coinToss = coinFlip();

		if (coinToss === "heads") {
			counterHeads ++;
			console.log("head score so far ", counterHeads);
		} else {
			counterTails++;
			console.log("tail score so far: ", counterTails)
		}
	}

	if (counterHeads > counterTails) {
		winner = "heads";
	} else {
		winner = "tails";
	} 
	return winner;
}
var playGame = gameWinner();

document.getElementById('coin').addEventListener('click', coinFlip)