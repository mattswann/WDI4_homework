console.log('password is ready');

var checkButton = document.getElementById('check-btn');
// Assigning first([0]) value of the Class Name result. getElements meaning it will return array of elements, so always define which
var passwordInput = document.getElementsByTagName('input')[0];

var checkPassword = function() {
  // getting the first element of input HTML tag name from the HTML

  // early exit - guard condition
  if ( passwordInput.value.length === 0) {
    return;
  }

  var resultMessage = 'no';
  // Assigning first([0]) value of the Class Name result 
  var resultElement = document.getElementsByClassName('result')[0];
  if ( passwordInput.value.length >= 8 ) {
    var resultMessage = 'yes';
    resultElement.style.backgroundColor = 'yellow';
  } else {
    resultElement.style.backgroundColor = 'red';
  }

  // Result element is the result class in HTML, innerHTML is to display it in HTML
  resultElement.innerHTML = resultMessage;

}

checkButton.addEventListener('click', checkPassword);