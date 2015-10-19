var responses = ["No", "Not today", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

var button = document.getElementById('responseButton');
var displayOutput = document.getElementById('displayOutput');

var generateResponse = function() {
  displayOutput.innerHTML = responses[Math.floor(Math.random() * responses.length)];
}

button.addEventListener('click', generateResponse);
