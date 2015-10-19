// PT planner

var AlameinLine = {
	origin: 'Flinders Street',
	destination: 'Glenferrie',
	stations: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
}

var GlenWaverleyLine = {
	origin: 'Flagstaff',
	destination: 'Tooronga',
	stations: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
}

var SandringhamLine = {
	origin: 'Southern Cross',
	destination: 'Windsor',
	stations: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}

// function journey(origin){
// if (origin === 'Flinders Street') {
// console.log(AlameinLine.stations.join (' --> '));
// }

// else if (origin === 'Flagstaff') {
// console.log(GlenWaverleyLine.stations.join (' --> '));
// }

// else if (origin === 'Southern Cross') {
// console.log(SandringhamLine.stations.join (' --> '));
// }

function journey2(origin, destination) {
	// if (origin === 'Flinders Street', destination === 'Tooronga') {
	// 	console.log('Board at ' + origin + ' travel to Richmond and change to Glen Waverley Line, then travel 2 stops to Tooronga');	
	// }

	if (origin === 'Flagstaff', destination === 'Hawthorn') {
		console.log('Board at ' + origin + ' travel to Richmond via Melbourne Central and Parliament and change to Alamein Line, then travel via East Richmond and Burnley to Hawthorn');

	}
}

	// console.log('Board at ' + origin + ' travel to Richmond via ['Melbourne Central', 'Parliament'] and change to Alamein Line, then travel via ['East Richmond', 'Burnley'] to Hawthorn');

	// }
