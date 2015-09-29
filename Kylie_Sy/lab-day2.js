console.log("Run code by uncommenting the console.log parts or calling the functions");

/*
Create an array to hold your top choices (colors, presidents, whatever).

For each choice, log to the screen a string like: "My #1 choice is blue."

Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
*/

function topThreeColours() {
	faveColours = ["purple", "blue", "green"];
	console.log("My #1 choice is " + faveColours[0]);
	console.log("My #2 choice is " + faveColours[1]);
	console.log("My #3 choice is " + faveColours[2]);
}

// console.log("Your Top Choices");
// topThreeColours();
// console.log("");

/*
Write a function named greaterNum that:

takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

function greaterNum(num1, num2) {
	if (num1 > num2) {
		console.log("The greater number between " + num1 + " and " + num2 + " is " + num1);
	} else {
		console.log("The greater number between " + num1 + " and " + num2 + " is " + num2);
	}
}

// console.log("Which number's bigger?");
// greaterNum(1,2);
// greaterNum(5,3);
// console.log("");

/*
Write a function named helloWorld that:

takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.
*/

function helloWorld(langCode) {
	if (langCode === "en") {
		console.log("Hello, World");
	} else if (langCode === "es") {
		console.log("Hola, Mundo");
	} else if (langCode === "fr") {
		console.log("Bonjour, Le Monde");
	} else {
		console.log("Hello, World");
	}
}

// console.log("The World Translator");
// helloWorld();
// helloWorld("es");
// console.log("");

/*
Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

function assignGrade(score) {
	var letter;
	if (score < 65 ) {
		letter = "F";
	} else if (score >= 65 && score <= 69) {
		letter = "D";
	} else if (score >= 70 && score <= 79) {
		letter = "C";
	} else if (score >= 80 && score <= 89) {
		letter = "B";
	} else if (score >= 90 && score <=100) {
		letter = "A";
	} else {
		letter = "invalid score";
	}
	return letter;
}

// console.log("The Grade Assigner");
// console.log(assignGrade(50));
// console.log(assignGrade(90));
// console.log("");

/*
Write a function named pluralize that:

takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

function pluralize(noun, number) {
	if (number === 1) {
		console.log(number + ' ' + noun);
	} else if (number >= 2 && noun === "sheep") {
		console.log(number + ' ' + noun);
	} else if (number >= 2) {
		console.log(number + ' ' + noun + "s");
	}
}

// console.log("The Pluralizer");
// pluralize("cat", 2);
// pluralize("sheep", 5);
// console.log("");

/*
Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
*/

function multiply() {
	var number;
	for (var multiplier = 0; multiplier <= 10; multiplier++) {
		for (var multiplicand = 0; multiplicand <= 10; multiplicand++) {
			number = multiplier * multiplicand;
			console.log(number);
		}
	}
}

// console.log("Multiplication Tables");
// // multiply();
// console.log("");

/*
Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
*/

function assignGradeLoop(gradeMin, gradeMax) {
	for (var grade = gradeMin; grade <= gradeMax; grade++) {
		var result = assignGrade(grade);
		console.log("For " + grade + " you got a " + result);
	}
}

// console.log("Assign Grade Loop");
// assignGradeLoop(60,100);