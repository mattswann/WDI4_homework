console.log('It\'s working');

var melbournePublicTransport = {
   alamein:
   {
     trainLine: 'alamein',
     trains: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
   },

   glenWaverly:
   {
    trainLine: 'glenWaverly',
    trains: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
   },

   sandringham:
   {
    trainLine: 'sandringham',
    trains: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
   }
};

// var whichStation = '';

var journey = [];

for (var i = 0; i < glenWaverly.trains.length; i++) {
    if (journey.indexOf === glenWaverly[i]) {
      journey.push(glenWaverly[i]);
    }
}

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
}
