console.log('vignere.js is running');

alphabet = 'abcdefghijklmnopqrstuvwxyz'
plaintext = 'attackatdawn';
keyword = 'lemon';
// keywordRepeat = 'lemonlemonle';
keywordRepeat = ;

combinedArray = _.zip(plaintext, keywordRepeat);
console.log(combinedArray);

_.map(combinedArray, function(twoLetters) {
	console.log(twoLetters);
	_.each(alphabet,function(elem, index) {
		if (elem === twoLetters[0]){
			var firstLetterIndex = index;
			console.log('index1', firstLetterIndex);
		}

		if (elem === twoLetters[1]){
			var secondLetterIndex = index;
			console.log('index2', secondLetterIndex);
		}
		
		var addPair = firstLetterIndex + secondLetterIndex;
		if (!isNaN(addPair)) {
			console.log('add pair', addPair);
		}
	});
});

console.log("text length:", plaintext.length);

