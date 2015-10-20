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

var currentBal = document.getElementById('currBalance');
var savingsBal = document.getElementById('savBalance');

var errorMsg = document.getElementById('error-msg');

var savingsBalance = 0;
var currentBalance = 0;

var addSavings = function() {
	// if input is a number
	if (isNaN(parseFloat(savInput.value)) === false) { 
		// change input from string to number then add to savingsBalance
		savingsBalance += parseFloat(savInput.value);
		// print savingsBalance to div with 2 decimal places
		savingsBal.innerHTML = "$" + savingsBalance.toFixed(2);
		
		console.log("savings balance: ",savingsBalance);
	} 
};

var minusSavings = function() {
	if (isNaN(parseFloat(savInput.value)) === false) {
		savingsBalance -= parseFloat(savInput.value);
		
		console.log("savings balance: ", savingsBalance);
		
		 // if negative balance
		if (savingsBalance < 0) {
			savingsBal.innerHTML = "not enough money to withdraw!";
			console.log("savings balance: ", savingsBalance);
			console.log("no balance left!");
		} else {	
			savingsBal.innerHTML = "$" + savingsBalance.toFixed(2);
		}
	} 
};

var addCurrent = function() {
	if (isNaN(parseFloat(currentInput.value)) === false) {
		currentBalance += parseFloat(currentInput.value);
		currentBal.innerHTML = "$" + currentBalance.toFixed(2);

		console.log("current balance: ", currentBalance);
	} 
};

var minusCurrent = function() {
	if (isNaN(parseFloat(currentInput.value)) === false) {
		
		if (currentBalance >= parseFloat(currentInput.value)) {
			currentBalance -= parseFloat(currentInput.value);
			currentBal.innerHTML = "$" + currentBalance.toFixed(2);

			console.log("current balance: ", currentBalance);

		// if currentBalance becomes negative i.e. not enough money
		} else if (currentBalance < parseFloat(currentInput.value)) { 

			if (savingsBalance >= (parseFloat(currentInput.value) - currentBalance)) {
				currentBalance -= parseFloat(currentInput.value);
				// decrease the excess from savingsBalance
				savingsBalance -= parseFloat(Math.abs(currentBalance))
				// print this change to div
				savingsBal.innerHTML = "$" + savingsBalance.toFixed(2);
				// reset currentBalance to 0
				currentBalance = 0;
				// print this change to div
				currentBal.innerHTML = "$" + currentBalance.toFixed(2);
				
				console.log("current balance: ", currentBalance);
				console.log("savings balance: ", savingsBalance);
			} else {
				errorMsg.style.display = 'block';
				errorMsg.innerHTML = "not enough money to withdraw!";
				setTimeout(function() {errorMsg.style.display = 'none';}, 1000);
				console.log("savings balance: ", savingsBalance);
				console.log("no balance left!");
			}
		}
	} 
};

depositButton1.addEventListener('click', addSavings);
depositButton2.addEventListener('click', addCurrent);
withdrawButton1.addEventListener('click', minusSavings);
withdrawButton2.addEventListener('click', minusCurrent);