// Write a method called get_squares that takes an argument, an array of numbers. This method will return a new array of numbers that qualify as perfect squares from the argument array.

// NOTE: The returned array of perfect squares should be in ascending order with no duplicates.
var getSquares = function( array_of_numbers ) {
  var wholeNumber = [];
  console.log(array_of_numbers);
  for ( var i = 0; i < array_of_numbers; i++ ) {
    if ( Math.sqrt(array_of_numbers[i]) % 1 == 0 ) {
      console.log(i);
      wholeNumber.push(array_of_numbers[i]);
    }
  }
  console.log(wholeNumber)
};
getSquares([4, 1, 16, 1, 10, 35, 22]);
// => [ 1, 16, 4 ]