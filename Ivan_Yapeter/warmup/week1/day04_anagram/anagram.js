// Anagram (Warm Up Day 4)
var anagram = function(givenWord, posAnagram) {
  var result = '';
  var givenWordSplit = givenWord.split('');
  var splitPosAnagram = posAnagram.split(' ');
  //console.log(splitPosAnagram);
  for ( var i = 0; i < splitPosAnagram.length; i++) {
    var word = splitPosAnagram[i];
    var posAnagramSplit = word.split("");
    //console.log(givenWordSplit);
    //console.log(posAnagramSplit);
    for ( var j = 0; j < givenWordSplit.length; j++) {
        if ( givenWordSplit.length === posAnagramSplit.length) {
            if (givenWordSplit[j] === posAnagramSplit[i] ) {
                console.log(givenWord + " and " + splitPosAnagram[i] + " are anagrams!");
                break;
            // } else {
            //     console.log(givenWord + " and " + splitPosAnagram + " are not anagrams.");
            //     break;
            // }
        } //else {
            // console.log(givenWord + " has a different amount of letters than " + splitPosAnagram);
            // break;
        // }
    }}
  }
};

// Else are there to ensure the user input always have feedback
// 
anagram('listen', 'enlists google inlets banana');