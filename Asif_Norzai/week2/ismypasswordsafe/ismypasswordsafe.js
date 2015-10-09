console.log('its working');

var button = document.getElementById("button");
document.getElementById("button").onclick = function(){
  myFunction()
};
var inputElement = document.getElementsByTagName('input')[0];

function myFunction() {
  if(inputElement.value.length === 0) {
    return;
  }
  var resultElement = document.getElementsByClassName('result')[0];
  resultElement.innerHTML = resultMessage;
  var resultMessage = 'no';

  if (inputElement.value.length >= 8) {
    var resultMessage = 'yes';
    resultElement.style.backgroundColor = 'yellow';
  } else {
    resultElement.style.backgroundColor = 'red';
  }
  resultElement.innerHTML = resultMessage;
}

button.addEventListener('click', myFunction);
inputElement.addEventListener('keyup', myFunction)
