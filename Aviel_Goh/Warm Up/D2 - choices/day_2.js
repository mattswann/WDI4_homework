/*
Create an array to hold your top choices (colors, presidents, whatever).

For each choice, log to the screen a string like: "My #1 choice is blue."

Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
*/

var topChoices = ['Navy', 'Green', 'Red']
for (var i=0; i<topChoices.length; i++) {
  console.log('My #' + (i + 1) + ' choice is ' + topChoices[i]);
}

/*
Which number's bigger?
Write a function named greaterNum that:

takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

function greaterNum(firstNum, secondNum) {
  if (firstNum > secondNum) {
    return 'The greater number of ' + firstNum + ' and ' + secondNum + ' is ' + firstNum;
  } else {
    return 'The greater number of ' + firstNum + ' and ' + secondNum + ' is ' + secondNum;
  }
}

console.log(greaterNum(3,2));
console.log(greaterNum(5,9));
console.log(greaterNum(10,200));

/*
The World Translator
Write a function named helloWorld that:

takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.
*/

function helloWorld(language) {
  if (language === 'es') {
    return 'Hola, Mundo';
  } else if (language === 'de') {
    return 'Hallo, Welt';
  } else {
    return 'Hello, World';
  }
}

console.log(helloWorld('es'));
console.log(helloWorld('de'));
console.log(helloWorld('en'));

/*
The Grade Assigner
Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

function assignGrade(numberScore) {
  if (numberScore >= 90) {
    return 'A';
  } else if (numberScore >= 80) {
    return 'B';
  } else if (numberScore >= 70) {
    return 'C';
  } else if (numberScore >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(assignGrade(90));
console.log(assignGrade(84));
console.log(assignGrade(75));
console.log(assignGrade(66));
console.log(assignGrade(49));

/*
The Pluralizer
Write a function named pluralize that:

takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

function pluralize(noun, number) {
  if (noun === 'sheep' && number !== 1) {
    return number + ' ' + noun;
  } else if (noun === 'geese' && number !== 1) {
    return number + ' ' + noun;
  } else if (number === 1) {
    return number + ' ' + noun;
  } else {
    return number + ' ' + noun + 's';
  }
}

console.log(pluralize('dog', 1));
console.log(pluralize('sheep', 5));
console.log(pluralize('cat', 4));
console.log(pluralize('bird', -3));

/*
Multiplication Tables
Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
*/

for (i=0; i<=10; i++) {
  for (n=1; n<=10; n++) {
    console.log(i * n);
  }
}

/*
The Grade Assigner
Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
*/

for (numberScore=60; numberScore<=100; numberScore++) {
  console.log('For ' + numberScore + ' you got an ' + assignGrade(numberScore));
}
