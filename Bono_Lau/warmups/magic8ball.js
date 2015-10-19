var result = ["No", "Not today", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
var output = 0;
/*var js = function(){
output = result [Math.floor((Math.random()* result.length)+1)];
console.log(output);
}*/

var generateNo = document.getElementById('generate');
generateNo.addEventListener('click',function(){
 output = result [Math.floor((Math.random()* result.length)+1)];
 document.getElementById("res").innerHTML = output;
 }
 );