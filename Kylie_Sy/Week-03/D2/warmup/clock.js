/*
#### Learning Objectives
- Practice using jQuery to manipulate the DOM
- Practice using JavaScript Timers
- Practice using internal JavaScript Objects

# Clocks!!!!
##### cue Coldplay

Today you are going to build a clock!

Start by planning! Draw a clock, break down the problem,

### Step 1
Define 3 variables and grab the associated element from the DOM using jQuery:
- minuteHand
- secondHand
- hourHand

### Step 2
- Using setInterval and jQuery make the second hand make a full rotation in 60 seconds.
- You will have to utilize the css attribute `transform - rotate`.

### Step 3
- Make the minute hand make a full rotation in 1 hour

### Step 3
- Make the hour hand make a full rotation in 24 hours

### BONUS
- Sync up your clock with the current time.
- Take a look at the JavaScript `Date` object
*/

var $minuteHand = $("#minute-hand");
var $secondHand = $("#second-hand");
var $hourHand = $("#hour-hand");

/* REAL TIME CODE */
var realTime = function() {	
	var d = new Date();
	var seconds = d.getSeconds();
	var minutes = d.getMinutes();
	var hours = d.getHours();
	var timeNow = hours + ":" + minutes + ":" + seconds;

	var degreesSec = seconds*(360/60);
	var degreesMin = minutes*(360/60);
	var degreesHr = hours*(360/12);
	$(".disp-time").html(timeNow);

	$secondHand.css("transform", "rotate(" + degreesSec + "deg)");
	$minuteHand.css("transform", "rotate(" + degreesMin + "deg)");
	$hourHand.css("transform", "rotate(" + degreesHr + "deg)");
}

setInterval(realTime, 1);
/* END REAL TIME CODE */

/* MOVING 6 DEGREES CODE */

// var degreesSec = 0;
// var degreesMin = 6;
// var degreesHr = 0;

// var d = new Date();
// var seconds = d.getSeconds();
// var minutes = d.getMinutes();
// var hours = d.getHours();

// var timeNow = hours + ":" + minutes + ":" + seconds;

// var degreesSec = seconds*(360/60);
// var degreesMin = minutes*(360/60);
// var degreesHr = hours*(360/12);

// $(".disp-time").html(timeNow);

// move 6 degrees
// var moveSeconds = function() {
// 	$secondHand.css("transform", "rotate(" + degreesSec.toString() + "deg)");
// 	degreesSec = parseInt(degreesSec) + 6;
// }

// var moveMinutes = function() {
// 	$minuteHand.css("transform", "rotate(" + degreesMin.toString() + "deg)");
// 	degreesMin = parseInt(degreesMin) + 6;
// }

// var moveHours = function() {
// 	$hourHand.css("transform", "rotate(" + degreesHr.toString() + "deg)");
// 	degreesHr = parseInt(degreesHr) + 6;
// }

// setInterval(moveSeconds, 1000);

// setInterval(moveMinutes, 60000);

// setInterval(moveHours, 3600000);

/* END MOVING 6 DEGREES CODE */