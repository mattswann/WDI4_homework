/*

#The Age Calculator

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/


function calculateAge(birthYear, currentYear) {
    var currentAge = currentYear - birthYear;
    console.log("You are either (2015 - " + birthYear +") or " + currentAge);
}

var today = new Date();
var yearNow = today.getFullYear();

console.log("calculateAge");
calculateAge(2003, yearNow);
calculateAge(1995, 2015);
calculateAge(1975, 2015);