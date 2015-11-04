// Fav Colors
var favColors = ['red', 'orange', 'blue', 'green', 'black'];
var suffix = ['st', 'nd', 'rd', 'th', 'th'];

for ( var i = 0; i < favColors.length; i++ ) {
    var colorNumber = i + 1;
    console.log('My '+ colorNumber + suffix[i] +' choice is ' + favColors[i] +'.');
}