// my bank

var balance = 100;
// var chqBalance = 0;

var savInput = document.getElementById("d1");
// var chqInput = document.getElementById('chq_dep');
var inputValue = document.getElementById("sav_dep");

var savBalance = document.getElementById("balance1");

savBalance.innerHTML = ("$" + balance);

// making a deposit - savings acct

var deposit = function() {
    // add amount input to balance
      balance = balance + parseInt(inputValue.value, 10);
    // update savings balance on page
      savBalance.innerHTML = ("$" + balance);
    // reset input box to empty
      inputValue.value = "";
    };

savInput.addEventListener("click", deposit);
  

// making a withdrawal - savings acct

var withdrawalBtn = document.getElementById("w1");

var withdrawal = function() {

    // check savings balance first
    if (parseInt(inputValue.value, 10) <= balance) {

      balance = balance - parseInt(inputValue.value, 10);

      // update savings balance on page
      savBalance.innerHTML = ("$" + balance);

      // // reset input box to empty  
      inputValue.value = "";

    }

    else if (parseInt(inputValue.value, 10) > (balance + balance2)) {

      alert('sorry, you have insufficent funds');      
      
    // reset input box to empty  
      inputValue.value = "";

    } else {

      // minus amount input from balance and remainder from balance 2
      // make new variable for leftover amount

      var leftOver = parseInt(inputValue.value, 10) - balance;
      balance = 0;
      balance2 = balance2 - leftOver;

      // update savings balance to 0 on page
      savBalance.innerHTML = ("$" + 0);

      // update remaining cheque balance on page
      chqBalance.innerHTML = ("$" + balance2);

      // reset input box to empty  
      inputValue.value = "";
    }
  };


withdrawalBtn.addEventListener("click", withdrawal);

// set up variables - cheque acct

var balance2 = 100;

var chqDeposit = document.getElementById("cheque_dep");

var chqBalance = document.getElementById("balance2");

chqBalance.innerHTML = ("$" + balance2);

var chqDepBtn = document.getElementById("d2");

// making a deposit - cheque acct

var deposit2 = function() {

  balance2 = balance2 + parseInt(chqDeposit.value, 10);

  chqBalance.innerHTML = ("$" + balance2);

  chqDeposit.value = "";
};

chqDepBtn.addEventListener("click", deposit2);

// making a withdrawal - cheque acct

var chqWithBtn = document.getElementById("w2");  // name button

var withdrawal2 = function() {

   // check balance first
    if (parseInt(chqDeposit.value, 10) <= balance2) {

      balance2 = balance2 - parseInt(chqDeposit.value, 10);

      chqBalance.innerHTML = ("$" + balance2);

      chqDeposit.value = "";
    }

    else if (parseInt(chqDeposit.value, 10) > (balance2 + balance)) {

      alert('sorry, you have insufficent funds');

      // reset input box to empty  
      chqDeposit.value = ""; 
    }

    else {
      // minus amount input from balance2 and remainder from balance
      // make new variable for leftover amount 
       var leftOver = parseInt(chqDeposit.value, 10) - balance2;
       balance2 = 0;
       balance = balance - leftOver;

      // update cheque balance to 0 on page
      chqBalance.innerHTML = ("$" + 0);

      // update remaining savings balance on page
      savBalance.innerHTML = ("$" + balance);

      // reset input box to empty  
      chqDeposit.value = "";
    }

  };

chqWithBtn.addEventListener("click", withdrawal2);

