////////////////////////////
// DEFINE BUTTONS
////////////////////////////
var savingWithdrawButton = document.getElementById('savingWithdraw-btn');
var savingDepositButton = document.getElementById('savingDeposit-btn');
var checkingWithdrawButton = document.getElementById('checkingWithdraw-btn');
var checkingDepositButton = document.getElementById('checkingDeposit-btn');

////////////////////////////
// DEFINE INPUTS
////////////////////////////
var savingBalance = parseInt(document.getElementById('savingBalance').innerHTML);
var savingInput = document.getElementById('savingInput');
var checkingBalance = parseInt(document.getElementById('checkingBalance').innerHTML);
var checkingInput = document.getElementById('checkingInput');

////////////////////////////
// SAVINGS
////////////////////////////
var savingWithdraw = function() {
  debugger
  var withdrawSaving = parseInt(savingInput.value);
  var evalInput = evaluateInput(withdrawSaving);

  if ( evalInput === false) {
    document.getElementById('statusUpdate').innerHTML = 'Please input valid number';
  } else if ( withdrawSaving > savingBalance ) {
    checkingBalance = checkingBalance - ( withdrawSaving - savingBalance );
    savingBalance = 0;
  } else {
    savingBalance = savingBalance - withdrawSaving;
  }
  return printSaving(savingBalance, checkingBalance);
}

var savingDeposit = function() {
  var depositSaving = parseInt(savingInput.value);
  var evalInput = evaluateInput(depositSaving);

  if ( evalInput === false ) {
    document.getElementById('statusUpdate').innerHTML = 'Please input valid number';
  } else {
    savingBalance = savingBalance + depositSaving;
  }
  return printSaving(savingBalance, checkingBalance);
}

////////////////////////////
// CHECKING
////////////////////////////
var checkingWithdraw = function() {
  var withdrawChecking = parseInt(checkingInput.value);
  var evalInput = evaluateInput(withdrawChecking);

  if ( (evalInput === false) || withdrawChecking > checkingBalance )  {
    document.getElementById('statusUpdate').innerHTML = 'It\s a bank, not your mother!';
  } else {
    checkingBalance = checkingBalance - withdrawChecking;
  }
  return printChecking(checkingBalance);
};

var checkingDeposit = function() {
  var depositChecking = parseInt(checkingInput.value);
  var evalInput = evaluateInput(depositChecking);

  if ( (evalInput === false) ) {
    document.getElementById('statusUpdate').innerHTML = 'Please input valid number';
  } else {
    checkingBalance = checkingBalance + depositChecking;
  }
  return printChecking(checkingBalance);
};

////////////////////////////
// PARTS
////////////////////////////
var printSaving = function(savingBalance, checkingBalance) {
  document.getElementById('savingBalance').innerHTML = '$' + savingBalance.toFixed(2);
  document.getElementById('checkingBalance').innerHTML = '$' + checkingBalance.toFixed(2);
}

var printChecking = function(checkingBalance) {
  document.getElementById('checkingBalance').innerHTML = '$' + checkingBalance.toFixed(2);
}

var evaluateInput = function(userInput) {
  if ( userInput === 0 || isNaN(userInput) ) {
    return false;
  } else {
    return true
  }
};
////////////////////////////
// BUTTONS
////////////////////////////
savingWithdrawButton.addEventListener('click', savingWithdraw);
savingDepositButton.addEventListener('click', savingDeposit);

checkingWithdrawButton.addEventListener('click', checkingWithdraw);
checkingDepositButton.addEventListener('click', checkingDeposit);

printSaving(savingBalance, checkingBalance);
printChecking(savingBalance, checkingBalance);