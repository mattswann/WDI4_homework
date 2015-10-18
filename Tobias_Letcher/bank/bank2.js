var accounts = {
  savings: {
    balance: 0,
    deposit: function(amount) {
      this.balance += amount;
    },
    withdraw: function(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        return false;
      }
    }
  },
  check: {
    balance: 0,
    deposit: function(amount) {
      this.balance += amount;
    },
    withdraw: function(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        return false;
      }
    }
  }
}

/********************/
// Savings
var balanceDiv = document.getElementById('sBalance');
var depositBtn = document.getElementById('sDeposit');
var withdrawBtn = document.getElementById('sWithdraw');
var inputBox = document.getElementById('sInput');

var renderBalanceSav = function() {
  balanceDiv.innerHTML = '$' + accounts.savings.balance;
}

depositBtn.addEventListener('click', function() {
  var amount = parseInt(inputBox.value, 10);
  accounts.savings.deposit(amount);
  renderBalanceSav();
});

withdrawBtn.addEventListener('click', function() {
  var amount = parseInt(inputBox.value, 10);
  accounts.savings.withdraw(amount);
  renderBalanceSav();
});

renderBalanceSav();

/********************/
// Checking
var cbalanceDiv = document.getElementById('cBalance');
var cdepositBtn = document.getElementById('cDeposit');
var cwithdrawBtn = document.getElementById('cWithdraw');
var cinputBox = document.getElementById('cInput');

var renderBalanceCheck = function() {
  cbalanceDiv.innerHTML = '$' + accounts.check.balance;
}

cdepositBtn.addEventListener('click', function() {
  var amount = parseInt(cinputBox.value, 10);
  accounts.check.deposit(amount);
  renderBalanceCheck();
});

cwithdrawBtn.addEventListener('click', function() {
  var amount = parseInt(cinputBox.value, 10);
  accounts.check.withdraw(amount);
  renderBalanceCheck();
});

renderBalanceCheck();

/********************/

var elemFind = function(elem) {
  var elemList = [];
  var firstChar = elem[0];

  switch (firstChar) {
    case '#':
      return [document.getElementById(elem.slice(1))];
    case '.':
      return document.getElementsByClassName(elem.slice(1));
    default:
      return document.getElementsByTagName(elem);

  }
}

// var newDiv = document.createElement('div');
//     var newContent = document.createTextNode('back to work');
//     newDiv.appendChild(newContent);
//     document.getElementsByTagName('span')[0].appendChild(newDiv);