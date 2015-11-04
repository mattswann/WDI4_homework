// var player = {
//   player1: {
//     name: bla,
//     score: 0
//   },
//   player2: {
//     name: bli,
//     score: 0
//   }
// }

var head = 0, tail = 0;

var coinFlip = function() {
  if (Math.random() < 0.5) {
    console.log('head!');
    head++;
  } else {
    console.log('tail!');
    tail++
  }

  console.log('head scores: ' + head + ' || tail scores: ' + tail)

  if ( head === 5 ) {
    console.log('head win!');
    head = 0;
    tail = 0;
  } else if ( tail === 5 ) {
    console.log('tail win!');
    head = 0;
    tail = 0;
  }
};