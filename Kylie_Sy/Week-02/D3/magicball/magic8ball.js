console.log("magic8ball.js is working!");

/*
Create a file called magic8ball.js
Make a JS function that randomly returns one of the following strings to the console when called...

"No", "Not today", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful",
*/

var magicResult = ["No", "Not today", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

var shakeButton = document.getElementById('shake-btn');
var printMessage;

var magicBall = function() {
	var randIndex = Math.round(Math.random() * (magicResult.length - 1));
	
	// testing on console
	console.log(randIndex);
	console.log(magicResult[randIndex]);
	
	printMessage = magicResult[randIndex];
	document.getElementById('message').innerHTML = printMessage;
}

shakeButton.addEventListener('click', magicBall);