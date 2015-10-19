var balance = 0;

// search dom for the object I want
var balanceDiv = document.getElementsByClassName('balance')[0];


// update its content
balanceDiv.innerHTML = ("$" + balance);

// get user input
var inputBox = document.getElementById("input-box");

var depositBtn = document.getElementById("deposit-btn");
// click button 


// add user input to current balance

var deposit = function() {
// add user input to current balance

  balance = balance + parseInt(inputBox.value, 10);
  
  balanceDiv.innerHTML = ("$" + balance);

  inputBox.value = '';
};

depositBtn.addEventListener('click', deposit);

// reset input box to empty
// depositBtn.addEventListener('click', function(){

// });



