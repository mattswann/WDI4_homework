
var player1;
var player2;
var success_message = $('.success-message');
var tieMessagePage = $('.tie-message');
$(tieMessagePage).hide();
$(success_message).hide();
  $('#second-page').hide();
$('#first-page-btn').on('click', function () {
  player1 = $('.input1').val();
  player2 = $('.input2').val();
  $(firstPlayer).text('It\'s ' + player1 + '\'s turns');
  $('#first-page').fadeOut();
  $('#second-page').fadeIn();
});

var successMessasge = $('.alert-success h1');
var tieMessagePrint = $('.alert-danger h1')
var isWinner = 0;
var firstPlayer = $('.player1');
$(firstPlayer).text(player1);
var secondPlayer = $('.player2');
$(secondPlayer).text(player2);
var turnCount = 0;


$('#table').find('td').on('click', function(){
  if (turnCount % 2 === 0){
    $(this).text('X');
    whoIsWinner('X', player1);
    $(secondPlayer).text('It\'s ' + player2 + '\'s turns');
    $(firstPlayer).hide().fadeOut();
    $(secondPlayer).show().fadeIn();
    $(this).attr('disabled', true);
  } else {
    $(this).text('O');
    whoIsWinner('O', player2);
    $(firstPlayer).text('It\'s ' + player1 + '\'s turns');
    $(secondPlayer).hide().fadeOut();
    $(firstPlayer).show().fadeIn();
    $(this).attr('disabled', true);
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
    $(successMessasge).html('Game over!\n' + player + ' has won');
    $('#second-page').fadeOut();
    $(success_message).fadeIn();
    isWinner++;
  }
}

//Row 2 check
if (four.text() === turn) {
  if (four.text() === five.text() && four.text() === six.text()) {
    $(successMessasge).html('Game over!\n' + player + ' has won');
    $('#second-page').hide();
    $(success_message).fadeIn();
  }
}

//Row 3 check
if (seven.text() === turn) {
  if (seven.text() === eight.text() && seven.text() === nine.text()) {
    $(successMessasge).html('Game over!\n' + player + ' has won');
    $('#second-page').hide();
    $(success_message).fadeIn();
}
}


//Top to bottom row 1
if (one.text() === turn) {
  if (one.text() === four.text() && one.text() === seven.text()) {
    $(successMessasge).html('Game over!\n' + player + ' has won');
    $('#second-page').hide();
    $(success_message).fadeIn();
  }
}

////Top to bottom row 2
if (two.text() === turn) {
  if (two.text() === five.text() && two.text() === eight.text()) {
    $(successMessasge).html('Game over!\n' + player + ' has won');
    $('#second-page').hide();
    $(success_message).fadeIn();
  }
}

//Top to bottom row 3
if (three.text() === turn) {
  if (three.text() === six.text() && three.text() === nine.text()) {
    $(successMessasge).html('Game over!\n' + player + ' has won');
    $('#second-page').hide();
    $(success_message).fadeIn();
  }
}

//Left digonal
if (one.text() === turn) {
  if (one.text() === five.text() && one.text() === nine.text()) {
    $(successMessasge).html('Game over!\n' + player + ' has won');
    $('#second-page').hide();
    $(success_message).fadeIn();
  }
}

//Right digonal
if (three.text() === turn) {
  if (three.text() === five.text() && three.text() === seven.text()) {
    $(successMessasge).html('Game over!\n' + player + ' has won');
    $('#second-page').hide();
    $(success_message).fadeIn();
  }
}

if (turnCount === 8 && isWinner === 0) {
  $('#second-page').hide();
  $(tieMessagePage).fadeIn();
  $(tieMessagePrint).text('It\'s a tie\n Try Again\n By clicking the red button');
  $(".reset-game").on('click',function(){
      location.reload();
  });
}

//End whoIsWinner
}

$(".reset-game").on('click',function(){
    location.reload();
});
