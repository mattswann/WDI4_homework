/*
Anagram Detector
Write a program that, given a word and a list of possible anagrams, selects the correct one(s).

In other words, given: "listen" and %w(enlists google inlets banana) the program should return "inlets".
*/

var listOfAnagrams = ['enlists', 'google', 'inlets', 'banana'];

var word;

for (word in listOfAnagrams) {

}

function anagramDetector(word) {

  var listOfAnagrams = ['enlists', 'google', 'inlets', 'banana'];

  var splitWord = word.split('').sort().join('');

  var splitListOfAnagrams = listOfAnagrams.split(',');


// compare lengths of words



  for (i = 0; i <= listOfAnagrams.length; i++) {
    var splitListOfAnagrams = listOfAnagrams[i].split('').sort().join('');
  }

    if (splitWord.sort() === splitListOfAnagrams[i].sort()) {
      return splitListOfAnagrams[i]
    } else {
      return false
    }
  }
}
