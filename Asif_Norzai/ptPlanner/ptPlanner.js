console.log('It\'s working');

var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];

var glenWaverlyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];

var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

var origin = 'Flinders Street';

var destination = 'East Richmond';

function alamein () {
    if (alameinLine.indexOf(origin + 1, alameinEnd())) {
        var result = alameinLine.splice(alameinLine.indexOf(origin));
        return result = result.join(' ---> ');
    }
}

function glenWaverly() {
    if (glenWaverlyLine.indexOf(origin + 1, glenWaverlyEnd())) {
        var result = glenWaverlyLine.splice(glenWaverlyLine.indexOf(origin));
        return result = result.join(' ---> ');
    }
}

function sandringham() {
    if (sandringhamLine.indexOf(origin + 1, sandringhamEnd())) {
        var result = sandringhamLine.splice(sandringhamLine.indexOf(origin));
        return result = result.join(' ---> ');
    }
}

function alameinEnd () {
  if (alameinLine.indexOf(destination)) {
      var endResult = alameinLine.splice(alameinLine.indexOf(destination + 1));
      return endResult;
  }
}

function glenWaverlyEnd() {
  if (glenWaverlyLine.indexOf(destination)) {
      var endResult = glenWaverlyLine.splice(glenWaverlyLine.indexOf(destination + 1));
      return endResult;
  }
}

function sandringhamEnd() {
  if (sandringhamLine.indexOf(destination)) {
      var endResult = sandringhamLine.splice(sandringhamLine.indexOf(destination + 1));
      return endResult;
  }
}


//
// var startIndex = theStart();
// var endIndex = theEnd();
//
// var journey1 = journey(startIndex, endIndex + 1);
// function journey (journeyTo) {
//   if (journeyTo === alameinLine(startIndex, endIndex + 1)) {
//       return alameinLine(startIndex, endIndex + 1);
//   } else if (journeyTo === glenWaverlyLine(startIndex, endIndex + 1)) {
//     return glenWaverlyLine(startIndex, endIndex + 1);
//   } else if (journeyTo === sandringhamLine(startIndex, endIndex + 1)) {
//     return sandringhamLine(startIndex, endIndex + 1);
//   }
// }
//
// var journeyDisplay = journey1.join(" ----> ");















//
// for (var trains in alameinLine) {
//     for (var i = 0; i < alameinLine.trains.length; i++) {
//       journey.push(alameinLine.trains[i];
//     }
// }


// var whichStation = '';

// var journey = [];
//
// for (var i = 0; i < glenWaverly.trains.length; i++) {
//     if (journey.indexOf() === glenWaverly[i]) {
//       journey.push(glenWaverly[i]);
//     }
// }
//
// if (whichStation === 'Richmond') {
//   var selectStartingPoint = prompt('There are currently 3 routes that goes to Richmond.\nPlease choose from one of these starting points:\n Alamein Line, Glen Waverly Line or Sandringham Line?');
//   if (selectStartingPoint === 'Glen Waverly Line') {
//      var glenWaverlyStartingPoint = prompt('Please choose your starting station from the Glen Waverly Line!');
//     if (glenWaverlyStartingPoint === glenWaverly[i]) {
//         journey.push(glenWaverly[i]);
//     }
//   } else if (selectStartingPoint === 'Alamein Line') {
//     var alameinStartingPoint = ''
//     for (var i = 0; i < alamein.length; i += 1) {
//       if (alameinStartingPoint === alamein[i]) {
//           journey.push(alamein[i]);
//       }
//     }
//   } else {
//     var sandringhamStartingPoint = prompt('Please choose your starting station from the Sandringham Line!');
//     if (sandringhamStartingPoint === sandringham[i]) {
//         journey.push(sandringham[i]);
//     }
//   }
// } else {
//   var fromWhere = 'Flinders Street';
//   var totalStop;
//   for (var i = 0; i < alamein.length; i += 1) {
//     totalStop += 1;
//     if (fromWhere === alamein[i]) {
//       console.log(alamein[i] + ' ------> ' + alamein[i] + ' ------> ' + alamein[i]);
//       console.log(totalStop + ' stops total');
//     }
//   }
// }
