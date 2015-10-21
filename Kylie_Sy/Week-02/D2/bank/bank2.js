console.log("bank.js is working!");

/* NOTES
+ clean code, repetitive functions
+ check resources for the new bank.js worked out in class
*/

var savInput = document.getElementsByTagName('input')[0];
var currentInput = document.getElementsByTagName('input')[1];

var withdrawButton1 = document.getElementsByTagName('button')[0];
var withdrawButton2 = document.getElementsByTagName('button')[2];
var depositButton1 = document.getElementsByTagName('button')[1];
var depositButton2 = document.getElementsByTagName('button')[3];

var enteredAmount1 = document.getElementsByClassName('enteredAmt')[0];
var enteredAmount2 = document.getElementsByClassName('enteredAmt')[1];

var savingsBalance = 0;
var currentBalance = 0;

var addSavings = function() {
	if (isNaN(parseFloat(savInput.value)) === false) { // if input is a number
		savingsBalance += parseFloat(savInput.value);
		console.log("savings balance: ",savingsBalance);
		if (savingsBalance < 0) { // if negative balance
			enteredAmount1.innerHTML = "-$" + Math.abs(savingsBalance);
		} else {	
			enteredAmount1.innerHTML = "$" + savingsBalance;
		}
	} 
};

var minusSavings = function() {
	if (isNaN(parseFloat(savInput.value)) === false) {
		savingsBalance -= parseFloat(savInput.value);
		console.log("savings balance: ", savingsBalance);
		if (savingsBalance < 0) { // if negative balance
			enteredAmount1.innerHTML = "no balance left!";
		} else {	
			enteredAmount1.innerHTML = "$" + savingsBalance;
		}
	} 
};

var addCurrent = function() {
	if (isNaN(parseFloat(currentInput.value)) === false) {
		currentBalance += parseFloat(currentInput.value);
		if (currentBalance < 0) { // if negative balance
			enteredAmount2.innerHTML = "-$" + Math.abs(currentBalance);
		} else {	
			enteredAmount2.innerHTML = "$" + currentBalance;
		}
	} 
};

var minusCurrent = function() {
	if (isNaN(parseFloat(currentInput.value)) === false) {
		currentBalance -= parseFloat(currentInput.value);
		console.log("current balance: ", currentBalance);
		if (currentBalance < 0) { // if negative balance
			enteredAmount2.innerHTML = "-$" + Math.abs(currentBalance);
		} else {	
			enteredAmount2.innerHTML = "$" + currentBalance;
		}
	} 
};

depositButton1.addEventListener('click', addSavings);
depositButton2.addEventListener('click', addCurrent);
withdrawButton1.addEventListener('click', minusSavings);
withdrawButton2.addEventListener('click', minusCurrent);