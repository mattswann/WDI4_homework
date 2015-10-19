// PT planner

var AlameinLine = {
	origin: 'Flinders Street',
	destination: 'Glenferrie',
	stations: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
}

// var GlenWaverleyLine = {
// 	origin: 'Flagstaff',
// 	destination: 'Tooronga',
// 	stations: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
// }

var SandringhamLine = {
	origin: 'Southern Cross',
	destination: 'Windsor',
	stations: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}

var stop1 = AlameinLine.stations.indexOf('Hawthorn')

var stop2 = AlameinLine.stations.indexOf('Richmond')

AlameinLine.stations.slice(stop2, stop1); reverse;

var stop3 = SandringhamLine.stations.indexOf('Richmond')

var stop4 = SandringhamLine.stations.indexOf('Windsor')

SandringhamLine.stations.slice(stop3, stop4)