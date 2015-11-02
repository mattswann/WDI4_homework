console.log('its working');

// while ( true ) {
//    stuck forever
// }

var input = 0;

do {
  input = input + 1;
} while (input < 10);

var languages = ['ruby', 'js', 'c#', 'closure'];
for ( var i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

languages.forEach(function(elem) {
  console.log(elem);
}); 