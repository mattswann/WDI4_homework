var resultHeads = [];
var resultTails = [];

var coinFlip = function() {

  if (Math.random() <= 0.5) {
    resultHeads.push('HEADS');
    document.getElementById('display-result').innerHTML = 'HEADS';
  } else {
    resultTails.push('TAILS');
    document.getElementById('display-result').innerHTML = 'TAILS';
  }

  if (resultHeads.length === 5) {
    document.getElementById('display-result').innerHTML = 'HEADS WINS';
    resultHeads = [];
    resultTails = [];
    return;
  } else if (resultTails.length === 5) {
    document.getElementById('display-result').innerHTML = 'TAILS WINS';
    resultHeads = [];
    resultTails = [];
  }
  document.getElementById('head-count').innerHTML = resultHeads.length;
  document.getElementById('tail-count').innerHTML = resultTails.length;
}

// Toggle visibility

function toggle_visibility(foo) {
   var e = document.getElementById(foo);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
