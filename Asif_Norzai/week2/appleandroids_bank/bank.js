console.log('It\'s working!');

//Variable to select different classes and id of the html page
var savingWithdrawButton = document.getElementById('saving-withdraw');
var savingDepositButton = document.getElementById('saving-deposit');
var checkingWithdrawButton = document.getElementById('checking-withdraw');
var checkingDepositButton = document.getElementById('checking-deposit');
var savingInput = document.getElementById('saving-input');
var checkingInput = document.getElementById('checking-input');
var SavingBalance = document.getElementsByClassName('saving-balance')[0];
var CheckingBalance = document.getElementsByClassName('checking-balance')[0];
// var theDollarSign = '$';

//func for adding up and dicrement of value while adding it into input
function printSavingInputValue() {
  var numb = parseFloat(savingInput.value, 10);
  var balance = parseInt(SavingBalance.innerHTML);
  SavingBalance.innerHTML = (balance + numb);
}


function printCheckingInputValue() {
     var numb = parseFloat(checkingInput.value, 10);
     var balance = parseInt(CheckingBalance.innerHTML);
     CheckingBalance.innerHTML = (balance + numb);
}

function withdrawSavingBalance() {
  var amount = parseFloat(savingInput.value, 10);
  if (SavingBalance.innerHTML > 0) {
    SavingBalance.innerHTML -= amount;
  } else {
    SavingBalance.innerHTML = 0;
  }
}

function withDrawCheckingBalance() {
  if (CheckingBalance.innerHTML > 0) {
    parseInt(CheckingBalance.innerHTML -= checkingInput.value);
  } else {
    CheckingBalance.innerHTML = 0;
  }
}

function checkingsMinusSaving() {
  if (CheckingBalance.innerHTML === 0 && SavingBalance.innerHTML > 0) {
    parseInt(CheckingBalance.innerHTML - SavingBalance.innerHTML);
  }
}

function whenWithdrawIsClicked() {
  if (CheckingBalance.innerHTML === 0 && SavingBalance.innerHTML > 0) {
    checkingWithdrawButton.addEventListener('click', checkingsMinusSaving);
  }
}

whenWithdrawIsClicked();

//Runs the func when the the different buttons displayed on the page are clicked.
checkingDepositButton.addEventListener('click', printCheckingInputValue);
savingDepositButton.addEventListener('click', printSavingInputValue);
savingWithdrawButton.addEventListener('click', withdrawSavingBalance);
checkingWithdrawButton.addEventListener('click', withDrawCheckingBalance);
