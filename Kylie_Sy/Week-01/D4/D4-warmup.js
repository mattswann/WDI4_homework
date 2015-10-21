console.log("Anagram Exercise");

// anagram checker
var word = "scare";
var anagramsArray = ["acres", "google", "cares", "banana"];

// function anagramChecker(word, anagramsArray) {

	var anagram;
	var correctAnagrams = [];
	for (var i = 0; i < anagramsArray.length; i++) { // loop through anagramsArray

		if (word.length === anagramsArray[i].length){

			word = word.split(""); 
			word = word.sort();
			word = word.join(""); 
			
			anagram = anagramsArray[i].split(""); // splits the letters of an element into an array
			anagram = anagram.sort(""); // sorts the letters of an element
			anagram = anagram.join(""); // joins the elements of an array into a string

			if (word === anagram) {
				console.log(anagramsArray[i], "is an anagram!");
				correctAnagrams = correctAnagrams.push(anagramsArray[i]);
			}
		}

	}
	// return correctAnagrams;
// }

