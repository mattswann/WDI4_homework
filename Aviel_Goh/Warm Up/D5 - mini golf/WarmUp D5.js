/*
Mini Golf Scores - https://gist.github.com/mattswann/41ac056f783c5de4cff4

Exercise

Bob, Jimbo and Fish love mini golf. But, like all good golfers they enjoy the 19th hole the most. Every time they hand in their score cards none of the scores are ever totalled. Write a function called totalScores in JS that calculates their scores and 'console.logs' the total for the club house.

Bob

Hole 1 = 3
Hole 2 = 2
Hole 3 = 6
Hole 4 = 11
Hole 5 = 9
Hole 6 = 2
Hole 7 = 6
Hole 8 = 9
Hole 9 = 10
Jimbo

Hole 1 = 5
Hole 2 = 12
Hole 3 = 9
Hole 4 = 22
Hole 5 = 13
Hole 6 = 7
Hole 7 = 16
Hole 8 = 10
Hole 9 = 11
Fish

Hole 1 = 2
Hole 2 = 2
Hole 3 = 4
Hole 4 = 5
Hole 5 = 4
Hole 6 = 3
Hole 7 = 6
Hole 8 = 4
Hole 9 = 1
Extension

Now work out each golfers round compared to the course par.

Par

Hole 1 = 3
Hole 2 = 4
Hole 3 = 5
Hole 4 = 5
Hole 5 = 3
Hole 6 = 3
Hole 7 = 4
Hole 8 = 3
Hole 9 = 5
Ninja Extension

Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and Jimbo played per hole calculate his winnings.
*/

var bob = [3, 2, 6, 11, 9, 2, 6, 9, 10];
var jimbo = [5, 12, 9, 22, 13, 7, 16, 10, 11];
var fish = [2, 2, 4, 5, 4, 3, 6, 4, 1];


var allScores = bob.concat(jimbo, fish);

function totalScores() {
  console.log(eval(allScores.join('+')));
}

var parScores = [3, 4, 5, 5, 3, 3, 4, 3, 5];

// Compare players score to Par
function comparePar(player) {
  for (i = 0; i < parScores.length; i += 1) {
    if (player[i] === parScores[i]) {
      console.log('Hole ' + (i + 1) + ': par');
    } else if (player[i] < parScores[i]) {
      console.log('Hole ' + (i + 1) + ': birdie');
    } else {
      console.log('Hole ' + (i + 1) + ': bogey');
  }
  }
}

//Fish punt
function fishPunt(player1, player2) {

  var total1 = 0;
  for (i = 0; i < parScores.length; i += 1) {
    if (player1[i] > parScores[i]) {
      total1 += (player1[i] > parScores[i]);
    }
  }

  var total2 = 0;
  for (i = 0; i < parScores.length; i += 1) {
    if (player2[i] > parScores[i]) {
      total2 += (player2[i] > parScores[i]);
    }
  }

  console.log('$' + (total1 + total2));
}
