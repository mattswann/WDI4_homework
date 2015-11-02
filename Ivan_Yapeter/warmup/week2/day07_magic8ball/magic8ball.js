theTruth = ["No", "Not today", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

var right = theTruth[Math.floor(Math.random()*theTruth.length)];

var callingTheTruth = function() {
  var right = theTruth[Math.floor(Math.random()*theTruth.length)];
  return document.getElementById('theMagic').innerHTML = right;
}
var theTruthButton = document.getElementById('theTruth-btn');
theTruthButton.addEventListener('click', callingTheTruth);