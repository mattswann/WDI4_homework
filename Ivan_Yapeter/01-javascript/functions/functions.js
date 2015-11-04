console.log('its working');

var money = 100;

function dinner() {
  var moreMoney = 1000;
  console.log('buy pasta');
  console.log('buy sauce');
  console.log('get someone else to cook it');

  return 'pasta is ready';
}

function greeting(yourName) {
  var secret = 'more secret' // local variable, only can be access in the function
  console.log('hello there ' + yourName);
}

function getFullname(firstname, lastname) {
  var fullname = 'your fullname is ' + firstname + ' ' + lastname;
  return fullname;
}

