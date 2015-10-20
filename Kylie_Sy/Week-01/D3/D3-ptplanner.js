// Melbourne public transport journey planner
// exercise: https://gist.github.com/epoch/0771187f6d02e1006210
// code by Kylie Sy

console.log("Melbourne Public Transport Journey Planner");
console.log("Call journeyPlanner()");

// train line objects
var alamein = { 
	name: "Alamein",
	stops: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]	
	};

var glenWaverly = {
	name: "Glen Waverly",
	stops: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
	};

var sandringham = {
	name: "Sandringham",
	stops: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
	};

var trainLinesArray = [alamein, glenWaverly, sandringham];

// get the name of the stops inputted to the boxes
var inputBoxes = document.getElementsByTagName('input');
var planButton = document.getElementsByTagName('button')[0]; // first button

var enterStop = function() {
	// console.log(inputBoxes[0].value);
	// console.log(inputBoxes[1].value);
	return [inputBoxes];
};

planButton.addEventListener('click', enterStop);

// gets the train line of a stop
function getLine(stop) {

	var line;

	for (var x = 0; x < trainLinesArray.length; x++) {
		for (var y = 0; y < trainLinesArray[x].stops.length; y++) {
			if (stop === trainLinesArray[x].stops[y]) {
				line = trainLinesArray[x];
				return line;
			} else {
				line = "error";
			}
		}
	}
	return line;
}

function journeyPlanner() {

	// variable declarations and definitions

	var origin = inputBoxes[0].value;
	var destination = inputBoxes[1].value;

	if(getLine(origin) === "error" || getLine(destination) === "error") {
		var errorMessage = "Error. Check spelling.";
		console.log(errorMessage);
		document.getElementById("showJourney").innerHTML = errorMessage;
		return errorMessage;
	}

	console.log("You chose " + origin + " ---> " + destination);

	var journey; // journey from origin to destination
	var journey1; // journey from origin to Richmond
	var journey2; // journey from Richmond to destination

	var originLine = getLine(origin);
	var destinationLine = getLine(destination);

	var originIndex = originLine.stops.indexOf(origin); // index of the origin stop
	var destinationIndex = destinationLine.stops.indexOf(destination); // index of the destination stop

	var richmondIndex1 = originLine.stops.indexOf("Richmond"); // index of Richmond in origin line
	var richmondIndex2 = destinationLine.stops.indexOf("Richmond"); // index of Richmond in destination line

	var numStops = 0; // counts the number of stops
	var numStops1 = 0;
	var numStops2 = 0;

	var printJourney ;
	var printJourney1;
	var printJourney2;

	if (originLine === destinationLine) {
		if (originIndex < destinationIndex) {
			journey = originLine.stops.slice(originIndex, destinationIndex + 1);
		} else {
			journey = originLine.stops.slice(destinationIndex, originIndex + 1).reverse();
		}  
		printJourney = "LINE: " + originLine.name + " == " + journey.join(" ---> ");
	} else if (destination === "Richmond") { // this test is needed as default Richmond line is Sandringham
		if (originIndex < richmondIndex1) {
			journey = originLine.stops.slice(originIndex, richmondIndex1 + 1);
		} else {
			journey = originLine.stops.slice(richmondIndex1, originIndex + 1).reverse();
		}
		printJourney = "LINE: " + originLine.name + " == " + journey.join(" ---> ");
	} else if (origin === "Richmond") { 
		if (destinationIndex < richmondIndex2) {
			journey = destinationLine.stops.slice(destinationIndex, richmondIndex2 + 1).reverse();
		} else {
			journey = destinationLine.stops.slice(richmondIndex2, destinationIndex + 1);
		}
		printJourney = "LINE: " + destinationLine.name + " == " + journey.join(" ---> ");

	} else {
		if (originIndex < richmondIndex1) {
			journey1 = originLine.stops.slice(originIndex, richmondIndex1 + 1);
		} else {
			journey1 = originLine.stops.slice(richmondIndex1, originIndex + 1).reverse();
		}
			
		if (richmondIndex2 < destinationIndex) {
			journey2 = destinationLine.stops.slice(richmondIndex2, destinationIndex + 1);

		} else {
			journey2 = destinationLine.stops.slice(destinationIndex, richmondIndex2 + 1).reverse();
		}

		printJourney1 = "LINE: " + originLine.name + " == " + journey1.join(" ---> "); 
		printJourney2 = "CHANGE LINE: " + destinationLine.name + " == " + journey2.join(" ---> ");
		journey = journey1 + journey2;

	}
	// printing and console log
	
	if (journey1 && journey2) { // if 2 journeys exist
		numStops1 = journey1.length - 1;
		numStops2 = journey2.length - 1;
		console.log(printJourney1);
		console.log(numStops1 + " stops total");
		console.log(printJourney2);
		console.log(numStops2 + " stops total");
	} else {
		numStops = journey.length - 1;
		console.log(printJourney);
		console.log(numStops + " stops total");
	}
	
	// printing to web page
	if (journey1 && journey2) {
		document.getElementById("showJourney").innerHTML = printJourney1 + "<br>" + printJourney2;
	} else {
		document.getElementById("showJourney").innerHTML = printJourney;
	}
	return journey;
}

planButton.addEventListener('click', journeyPlanner);