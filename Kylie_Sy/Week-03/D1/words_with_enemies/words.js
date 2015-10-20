console.log("words.js is working");

var words = {
	wordOne: "hat".split(""), 
	wordTwo: "cat".split(""),
	valley: [],
	
	explode: function() {
		var remove =  _.intersection(words.wordOne, words.wordTwo).pop;

	},

};