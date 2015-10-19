var savingBalance = 0;
var checkingBalance = 0;
var inputNumber = document.getElementsByTagName("input");
/*deposit or saving function*/
var savDeposit = function(amount){
  savingBalance += amount;
}
var savWithdraw = function(amount){
  if (amount<=savingBalance){
    savingBalance -= amount;
    return true;
  }else{
    return false;
  }
}
var checkDeposit = function(amount){
  checkingBalance += amount;
}
var checkWithdraw = function(amount){
  if (amount<=checkingBalance){
    checkingBalance -= amount;
    return true;
  }else{
    return false;
  }
}
/*render the balance*/
var renderSavingBalance = function(){
  var savDisplay= document.getElementById("saving display");
  savDisplay.innerHTML = "$" + savingBalance;
}
var renderCheckBalance = function(){
  var chkDisplay = document.getElementById("check display");
  chkDisplay.innerHTML = "$" + checkingBalance;
}

/*button listener*/
var savingD = document.getElementById("savingDeposit");
var savingW = document.getElementById("savingWithdraw");
var checkD = document.getElementById("checkingDeposit");
var checkW = document.getElementById("checkingWithdraw");

savingD.addEventListener('click',function(){
savDeposit(parseInt(inputNumber[0].value,10));
console.log(savingBalance);
renderSavingBalance();  
});

savingW.addEventListener('click',function(){
var i = parseInt(inputNumber[0].value,10);
if (!savWithdraw(i)){
  var errorDisplay1 = document.getElementById("error1");
  errorDisplay1.innerHTML = "Warning! The amount excess your balance!";
console.log("withdraw error");
}
console.log(savingBalance);
renderSavingBalance();  
});

checkD.addEventListener('click',function(){
checkDeposit(parseInt(inputNumber[1].value,10));
console.log(checkingBalance);
renderCheckBalance();
})

checkW.addEventListener('click',function(){
  var j = parseInt(inputNumber[1].value,10);
  if (!checkWithdraw(j)){
    var errorDisplay2 = document.getElementById('error2');
    errorDisplay2.innerHTML = "Warning! The amount excess your balance!";
  console.log("withdraw error");
  }
  console.log(checkingBalance);
  renderCheckBalance();
});