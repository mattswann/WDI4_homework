var players = [ 
	{	name: "Bob",
		score: [3, 2, 6, 11, 9, 2, 6, 9, 10]
	},

	{	name: "Jim",
		score: [5, 12, 9, 22, 13, 7, 16, 10, 11,]
	},

	{	name: "Fish",
		score: [2, 2, 4, 5, 4, 3, 6, 4, 1]
	}
];

var bobTotal = 0;
var jimTotal = 0;
var fishTotal = 0;
var clubTotal = 0;
var playerTotal = 0;

function totalScores(playerIndex) {
	for (var i = 0; i < players[hole].score.length; i++) {
		clubTotal = clubTotal + players[hole].score[i];
		playerTotal = playerTotal + players[playerIndex].score[i];

	}
	return [clubTotal, playerTotal];
	
}

console.log("club total: ", clubTotal);
console.log("Bob's total: ", bobTotal);
console.log("Jim's total: ",jimTotal);
console.log("Fish's total: ", fishTotal);

