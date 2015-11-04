var btn = document.getElementById('form-btn');

// To stop form-btn button default behaviour, that is to submit a form
btn.addEventListener('click', function() {
  event.preventDefault(); // its a function
});