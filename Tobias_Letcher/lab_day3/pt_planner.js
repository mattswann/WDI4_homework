var aline = {
  lineName: 'alamein',
  stops: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  stopsBefore: ['Flinders Street'],
  stopsAfter: ['East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
};

var bline = {
  lineName: 'glenWaverly',
  stops: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  stopsBefore: ['Parliament', 'Melbourne Central', 'Flagstaff'],
  stopsAfter: ['Kooyong', 'Tooronga']
};

var cline = {
  lineName: 'sandringham',
  stops: ['Southern Cross', 'Richmond', 'South Yarra','Prahran', 'Windsor'],
  stopsBefore:['Southern Cross'],
  stopsAfter: ['South Yarra','Prahran', 'Windsor']
};


function planner(start, end) {
  var trip = ' ';
  var lines = [aline, bline, cline];
    
    if (lines[0].stops.indexOf(start) != -1){
        if (lines[0].stops.indexOf(end) !== -1) { trip += 
            trip += lines[0].stops.slice((lines[0].stops.indexOf(start)), (lines[0].stops.indexOf(end) + 1));
            } else {
                trip += lines[0].stops.slice((lines[0].stops.indexOf(start)), (lines[0].stops.indexOf("Richmond") + 1))+ ",";
                for (var i = 0; i < 3; i++){
                    if (lines[i].stops.indexOf(end) !== -1){
                        if (lines[i].stopsBefore.indexOf(end) !== -1){
                            trip += lines[i].stopsBefore.slice(0, (lines[i].stopsBefore.indexOf(end) + 1));
                        } else {
                            trip += lines[i].stopsAfter.slice(0, (lines[i].stopsAfter.indexOf(end) + 1));
                        }
                    }
                }
            }
        } else if (lines[1].stops.indexOf(start) != -1) {
            if (lines[1].stops.indexOf(end) !== -1) {
           trip += trip += lines[1].stops.slice((lines[1].stops.indexOf(start)), (lines[1].stops.indexOf(end) + 1));
            } else {
                trip += lines[1].stops.slice((lines[1].stops.indexOf(start)), (lines[1].stops.indexOf("Richmond") + 1)) +",";
                for (var q = 0; q < 3; q++){
                    if (lines[q].stops.indexOf(end) !== -1){
                        if (lines[q].stopsBefore.indexOf(end) !== -1){
                            trip += lines[q].stopsBefore.slice(0, (lines[q].stopsBefore.indexOf(end) + 1));
                        } else {
                            trip += lines[q].stopsAfter.slice(0, (lines[q].stopsAfter.indexOf(end) + 1));
                        }
                    }
                }
            }
        } else if (lines[2].stops.indexOf(start) != -1) {
            if (lines[2].stops.indexOf(end) !== -1) {
            trip += lines[2].stops.slice((lines[2].stops.indexOf(start)), (lines[2].stops.indexOf(end) + 1));
            } else {
                trip += lines[2].stops.slice((lines[2].stops.indexOf(start)), (lines[2].stops.indexOf("Richmond") + 1)) + ",";
                for (var j = 0; j < 3; j++){
                    if (lines[j].stops.indexOf(end) !== -1){
                        if (lines[j].stopsBefore.indexOf(end) !== -1){
                            trip += lines[j].stopsBefore.slice(0, (lines[j].stopsBefore.indexOf(end) + 1));
                        } else {
                            trip += lines[j].stopsAfter.slice(0, (lines[j].stopsAfter.indexOf(end) + 1));
                        }
                    }
                }
            }
        }
var newTrip = trip.split(',');
var result = " ";
for (var d = 0; d < newTrip.length; d++){
    
    if (d === (newTrip.length) - 1 ){
        result += newTrip[d];
    }else {
        result += newTrip[d] + "  ---->   ";
    }
}
var totalTrips = newTrip.length + " stops total";
console.log(result)
return [[result], [totalTrips]];
}

var button = document.getElementById('btnSearch');
button.addEventListener('click', seachIt);
document.getElementById("fromBox").placeholder ='Enter origin';
document.getElementById("toBox").placeholder ='Enter destination';

function seachIt() {
  var stops = ['Flinders Street', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga','Southern Cross', 'South Yarra','Prahran', 'Windsor'];
  var inputBoxeOrigin = document.getElementById('fromBox').value;
  var inputBoxeDestination = document.getElementById('toBox').value;
  if (inputBoxeOrigin === inputBoxeDestination){
    document.getElementById("showThem").innerHTML = "That goes nowhere, try somthing else";
  }else if (stops.indexOf(inputBoxeDestination) === -1){
    document.getElementById("showThem").innerHTML = "Invaled Stops";
  } else {
    var result = planner(inputBoxeOrigin, inputBoxeDestination);
     // newTrip.length + " stops total";
  document.getElementById("showThem").innerHTML = result[0] + "<br><br>" + result[1];
  }
}

