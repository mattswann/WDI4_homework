var leftSideWord = 'hello';
var rightSideWord = 'below';
var newLeftSideWord;
var newRightSideWord;


var longerWord;
var smallerWord;
var newSmallerWord;




if (leftSideWord.length > rightSideWord.length) {
  biggerWord = leftSideWord.split('');
  smallerWord = rightSideWord.split('');
} else {
  biggerWord = rightSideWord.split('');
  smallerWord = leftSideWord.split('');
}

for (i = 0; i <= smallerWord.length; i += 1) {

  if (_.contains(biggerWord, smallerWord[i]) === true) {
    biggerWord.splice(biggerWord.indexOf(smallerWord[i]),1);
    smallerWord.splice(smallerWord.indexOf(smallerWord[i]),1);
  }
}

for (i = 0; i <= biggerWord.length; i += 1) {

  if (_.contains(smallerWord, biggerWord[i]) === true) {
    smallerWord.splice(smallerWord.indexOf(biggerWord[i]),1);
    biggerWord.splice(biggerWord.indexOf(biggerWord[i]),1);
  }
}

if ()

console.log(biggerWord);
console.log(smallerWord);





// for (i = 0; i <= smallerWord.length; i += 1) {
//   if (smallerWord[i] )
// }
//
// _.each(smallerWord, function(smallerWord[i], index) {
//   for (i=0;i<=biggerWord.length;i++) {
//     if (smallerWord !== biggerWord[i]) {
//
//     }
//   }
// }
//
// var wordList = [biggerWord, smallerWord];
//
//
//
//
//
// var words = {
//
//
//
//
// }
