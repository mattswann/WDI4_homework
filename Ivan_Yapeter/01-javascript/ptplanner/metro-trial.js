var allStations = 
  [['alamein', 'Flinder Street', 'Richmond', 'East Richmond','Burnley', 'Hawthorn', 'Glenferrie'],
  ['glenwaverly', 'Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  ['sandringham', 'Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']];

var whichLane = function(origin,destination) {
  var startLane = '';
  var finishLane = '';
  for ( var y = 0; y < allStations.length; y++ ) {
    for ( var x = 0; x < allStations.length; x++ ) {
      if ( origin === allStations[y][x] ) {
        startLane = allStations[y][0];
      }
    }
  }
  for ( var i = 0; i < allStations.length; i++ ) {
    for ( var j = 0; j < allStations.length; j++ ) {
      if ( destination === allStations[i][j]) {
        finishLane = allStations[i][0];
      }
    }
  }
  console.log(startLane + ' ' + finishLane);
}

var printToScreen = function(origin, destination) {
  var stopsName = '';
  // for ( var i = 0; i < stations.alamein.length; i++) {
  //   if ( i === (stations.alamein.length - 1)) {
  //     stopsName += stations.alamein[i];
  //   } else {
  //     stopsName += stations.alamein[i] + ' --> ';
  //   }
  // }
  
//   return console.log(stopsName);
  //Only printing to console, take return value from which stations
}

printToScreen('Richmond', 'Richmond');

//Buttons
