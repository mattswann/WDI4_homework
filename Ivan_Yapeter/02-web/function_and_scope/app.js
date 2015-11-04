console.log('all good');

console.log('second statement'); // it reads/run from top to bottom

window.onload = function() {
  console.log('finish loading document');

  var pushBtn = document.getElementsByTagName('button')[0];

  console.log(pushBtn);
} // To execute a function or anything until HTML done loading

// window.addEventListener('load', function() {
//   console.log('finish loading document');

//   var pushBtn = document.getElementsByTagName('button')[0];

//   console.log(pushBtn);
// }); //Alternatively to execute a function or anything until HTML done loading


// var rememberMe = true; //Global variable

// var numberOfTimeFlippingTails = 0; // Global variable

var myStuff = {
  rememberMe: true,
  jump : function() {

  } //
}

var jump = function() {
  var flying = true; // function/local variable
  var counter = 0;
  console.log('jumping');
  counter++ // it will add counter but it will reseted if jump is called again

  var doingSomethingElse = function() {
    counter++ // this will add counter because doingSomethingElse is inside jump
  }
};



setTimeout(jump, 5000);

console.log('hey its me mario');