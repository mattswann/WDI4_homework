// Mini Golf
console.log('mini golf is ready!')

var allGolferScores = {
  Bob : [3, 2, 6, 11, 9, 2, 6, 9, 10],
  Jimbo : [5, 12, 9, 22, 13, 7, 16, 10, 11],
  Fish : [2, 2, 4, 5, 4, 3, 6, 4, 1]
};

var totalScores = function() {
  var totalScore = 0;
  var clubHouseTotal = 0;
  for( var golferName in allGolferScores ) {
        var golferScores = allGolferScores[golferName];
        console.log(golferName);
        var holeNum = 1;
        for ( var i = 0; i < golferScores.length; i++ ) {
            console.log( 'hole number ' + holeNum + ' is ' +golferScores[i]);
            totalScore = totalScore + golferScores[i];
            holeNum++;
        }
        console.log(golferName + ' scores ' + totalScore);
        clubHouseTotal = clubHouseTotal + totalScore;
  }
  console.log('Club house score: ' + clubHouseTotal);
    
};

totalScores();