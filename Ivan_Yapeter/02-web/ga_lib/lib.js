////////////////////////////////
// query function = elemFind
////////////////////////////////
// elemFind('#container') search for element with id container
// elemFind('div') search for div elements
// elemFind('.content') search for elements with class content
// var elemFind = function(elem) {
//   var elemList = [];
//   var firstChar = elem.split('')[0];

//   switch (firstChar) {
//     case '#':
//       return [document.getElementById(elem.slice(1))];
//     case '.':
//       return document.getElementsByClassName(elem.slice(1));
//     default:
//       return document.getElementsByTagName(elem);
//   }
// }
////////////////////////////////
// sample
////////////////////////////////
// sample(['a', 'b', 'c']) => 'b'


////////////////////////////////
// each
////////////////////////////////
// for loops can be used for going through collections
// each(['a', 'b', 'c'], func)
// a
// b
// c

////////////////////////////////
// namespace ga
////////////////////////////////
var ga = {
  sample: function(arr){
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }, // end sample

  query: function(elem) {
    var elemList = [];
    var firstChar = elem.split('')[0];

    switch (firstChar) {
      case '#':
        return [document.getElementById(elem.slice(1))];
      case '.':
        return document.getElementsByClassName(elem.slice(1));
      default:
        return document.getElementsByTagName(elem);
    }
  }, // end query

  each: function(arr, func) {
    debugger
    for (var i = 0; i < arr.length; i++ ) {
      func(arr[i]);
    }
  } // each end

}

var list = ['ruby', 'javascript', 'c++'];

var printElem = function(elem) {
  console.log(elem);
}

ga.sample(list);
ga.query('.container');
ga.each(list, printElem);