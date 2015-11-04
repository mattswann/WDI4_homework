var stations = {
  alamein : ['Flinder Street', 'Richmond', 'East Richmond','Burnley', 'Hawthorn', 'Glenferrie'],
  glenwaverly : ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringham : ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};

var checkInput = function(y) {
  for( var lane in stations ) {
    var laneStops = stations[lane]; // laneStops is the lane name
    for ( var i = 0; i < laneStops.length; i++ ) {
      if ( y !== laneStops[i] ) {
          return true;
      } 
    }
  }
};

var findLane = function(x) {
  for( var lane in stations ) {
    var laneStops = stations[lane]; // laneStops is the lane name
    for ( var i = 0; i < laneStops.length; i++ ) {
      if ( x === laneStops[i] ) {
          return lane;
      } 
    }
  }
};

var compareLane = function(a, b) {
  if ( a === b ) {
    return true;
  } else {
    return false;
  }
};

var differentLane = function(origin, destination, departureLane, arrivalLane) {
  var startIndex = stations[departureLane].indexOf(origin);
  var startRichmond = stations[departureLane].indexOf('Richmond');
  var finishIndex = stations[arrivalLane].indexOf(destination);
  var finishRichmond = stations[arrivalLane].indexOf('Richmond');
  var startLane = '';
  var finishLane = '';
  var numOfStop = 0;

  if ( startIndex < startRichmond ) {
    startLane = stations[departureLane].slice(startIndex, startRichmond + 1).join( ' ----> ' );
    if ( finishIndex < finishRichmond ) { // kalau start dr kiri sampe richmond, kelar dr richmond ke kiri (richmond lebih besar dari finishIndex) eq. Flinder Street to Flagstaff
      finishLane = stations[arrivalLane].slice(finishIndex, finishRichmond).reverse().join( ' ----> ' );
      numOfStop = ( (startRichmond + 1) - startIndex ) + finishRichmond - finishIndex;
    } else if ( finishIndex > finishRichmond ) { // kalau start dr kiri sampe richmond, kelar dr richmond ke kanan (richmond lebih kecil dari finishIndex) eq. Flagstaff to Windsor
      finishLane = stations[arrivalLane].slice(finishRichmond + 1, finishIndex + 1).join( ' ----> ' );
      numOfStop = ( (startRichmond + 1) - startIndex ) + finishRichmond - 1 + finishIndex - 1;
    }

  } else if ( startIndex > startRichmond ) { // kalau start dr kanan sampe richmond 
    startLane = stations[departureLane].slice(startRichmond, startIndex + 1).reverse().join( ' ----> ' );
    if ( finishIndex < finishRichmond ) { // kalau start dr kanan sampe richmond, kelar dr richmond ke kiri. eq. Burnley to Flagstaff
      finishLane = stations[arrivalLane].slice(finishIndex, finishRichmond).reverse().join( ' ----> ' );
      numOfStop = ( startIndex - startRichmond ) + ( ( finishRichmond + 1 ) - finishIndex );
    } else if ( finishIndex > finishRichmond ) { // kalau start dr kanan sampe richmond, kelar dr richmond ke kanan eq. Burnley to Tooronga
      finishLane = stations[arrivalLane].slice(finishRichmond + 1, finishIndex + 1).join( ' ----> ' );
      numOfStop = ( startIndex - startRichmond ) + (finishIndex + 1 ) - finishRichmond;
    }
  }

  var theLane = startLane + ' ----> ' + finishLane;
  return printResult(theLane, numOfStop);
}

var sameLine = function(origin, destination, departureLane, arrivalLane) {
  var departureLane = findLane(origin);
  var arrivalLane = findLane(destination);
  var startIndex = stations[departureLane].indexOf(origin);
  var finishIndex = stations[arrivalLane].indexOf(destination);
  var theLane = '';
  var numOfStop = 0;

  if ( startIndex < finishIndex ) {
    theLane = stations[departureLane].slice(startIndex, finishIndex + 1).join( ' ----> ' );
    numOfStop = (finishIndex + 1) - startIndex;
  } else if ( startIndex > finishIndex ) {
    theLane = stations[departureLane].slice(finishIndex, startIndex + 1).reverse().join( ' ----> ' );
    numOfStop = (startIndex + 1) - finishIndex;
  }
  return printResult(theLane, numOfStop);
}

var printResult = function(theLane, numOfStop) {
  document.getElementById("the-line").innerHTML = theLane;
  document.getElementById("stops-no").innerHTML = numOfStop;
}

var buildJourney = function(origin, destination) {
  var departureLane = findLane(origin);
  var arrivalLane = findLane(destination);
  var compare = compareLane(departureLane, arrivalLane);
  var startIndex = stations[departureLane].indexOf(origin);
  var finishIndex = stations[arrivalLane].indexOf(destination);
  var theLane = '';

  if ( origin === destination ) {
    document.getElementById("warning").innerHTML = 'Idiot';
  } else if ( compare ) {
    sameLine(origin, destination);
  } else if ( !compare ) {
    differentLane(origin, destination, departureLane, arrivalLane);
  }
  //   no of stop a+ b
};

//Button
var readTextInput = function() {
  //Put the array of stops
  var originText = document.getElementById('originTextBox').value; // Getting value entered by User in HTML using DOM API
  var destinationText = document.getElementById('destinationTextBox').value;
  
  // checkInput(originText,destinationText);
  // if ( checkInput === true ) {
    buildJourney(originText,destinationText);
  // } else {
    // document.getElementById("warning").innerHTML = 'Idiot';
  // }
  
}

tramButton.addEventListener('click', readTextInput);