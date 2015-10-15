
var player1 = 'Asif';
var player2 = 'Azad';
var isWinner = 0;
var firstPlayer = $('.player1');
$(firstPlayer).text(player1);
var secondPlayer = $('.player2');
$(secondPlayer).text(player2);
var turnCount = 0;


$('#table').find('td').on('click', function(){
  $(firstPlayer).text('It\'s ' + player1 + 's turns');
  if (turnCount % 2 === 0){
    $(this).text('X');
    whoIsWinner('X', player1);
    $(secondPlayer).text('It\'s ' + player2 + 's turns');
    $(firstPlayer).hide().fadeOut();
    $(secondPlayer).show().fadeIn();
  } else {
    $(this).text('O');
    whoIsWinner('O', player2);
    $(firstPlayer).text('It\'s ' + player1 + 's turns');
    $(secondPlayer).hide().fadeOut();
    $(firstPlayer).show().fadeIn();
  }
turnCount++;
console.log(turnCount);

});

var one = $('.one');
var two = $('.two');
var three = $('.three');
var four = $('.four');
var five = $('.five');
var six = $('.six');
var seven = $('.seven');
var eight = $('.eight');
var nine = $('.nine');


function whoIsWinner(turn, player) {

//Row 1 check
if (one.text() === turn) {
  if (one.text() === two.text() && one.text() === three.text()) {
    alert('Game over!\n' + player + ' has won');
    isWinner++;
  }
}

//Row 2 check
if (four.text() === turn) {
  if (four.text() === five.text() && four.text() === six.text()) {
    alert('Game over!\n' + player + ' has won');
    isWinner++;
  }
}

//Row 3 check
if (seven.text() === turn) {
  if (seven.text() === eight.text() && seven.text() === nine.text()) {
    alert('Game over!\n' + player + ' has won');
    isWinner++;
  }
}


//Top to bottom row 1
if (one.text() === turn) {
  if (one.text() === four.text() && one.text() === seven.text()) {
    alert('Game over!\n' + player + ' has won');
    isWinner++;
  }
}

////Top to bottom row 2
if (two.text() === turn) {
  if (two.text() === five.text() && two.text() === eight.text()) {
  alert('Game over!\n' + player + ' has won');
  isWinner++;
  }
}

//Top to bottom row 3
if (three.text() === turn) {
  if (three.text() === six.text() && three.text() === nine.text()) {
  alert('Game over!\n' + player + ' has won');
    isWinner++;
  }
}

//Left digonal
if (one.text() === turn) {
  if (one.text() === five.text() && one.text() === nine.text()) {
    alert('Game over!\n' + player + ' has won');
    isWinner++;
  }
}

//Right digonal
if (three.text() === turn) {
  if (three.text() === five.text() && three.text() === seven.text()) {
    alert('Game over!\n' + player + ' has won');
    isWinner++;
  }
}

if (turnCount === 8 && isWinner === 0) {
  alert('It\'s a tie');
}

//End whoIsWinner
}

// $("button").on('click',function(){
//   whoIsWinner(winner, player);
// });
