

// var Firebase = require("firebase");

// Needed var for the toggle last square off. 
// var lastClicked;

var flag = true;
var turns = 0;
var won;

var grid = clickableGrid(3,3,function(el,row,col,i){
    if (won) {
      printWin(won);
      return;
    }
    el.className = (change());
    $(document).click(function(event) {
    var getClicked = (window.lastElementClicked = event.target);
    
    var getClickedId = getClicked.id;
    // Add new class to clicked box to deactervate it.
    $("#" + getClickedId).addClass('markDone');

    // Display winner or tie 
       console.log(checkWin());


    //An oppion to toggle off the last clicked
        // if (lastClicked)lastClicked.className='';
        // lastClicked = el;
  });
});

// Append the grid to the DOM.
document.body.appendChild(grid);


// Set a bool value to alternate between X's and O's

function change() {
  if (flag) {
    flag = false;
    return 'clickedX';
  } else {
    flag = true;
    return 'clickedO';
  }
}

// Track the number of turns that have been made.

// Check if a player has won or drawed.
function checkWin() {
  var winList = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],[ 1,4,7], [2,5,8],[ 6,4,2], [0,4,8]];
  if (turns === 9) {
    return $('.score').html("<h2 class='score'>It is a Tie</h2>");
  } 
  
  var turns = 0;
    for (var z = 0; z < 10; z++){
      if ($("#box" + z).hasClass('markDone')){
          turns += 1;
    }
  }

  for (var g = 0; g < winList.length; g++) {
      var winCase = winList[g];
      var scoreCountO = 0;
      var scoreCountX = 0;
    for (var b = 0; b < 3; b++) {
      // var className = $("#box"+ winCase[b]).attr('class');
      // console.log(className.split(' '));
      if ($("#box"+ winCase[b]).hasClass('clickedX')) {
          scoreCountX++;
          if (scoreCountX === 3) {
            won = "X Wins";
            return $('.score').html("<h2 class='score'>"+won+"</h2>");
          }
         } else if ($("#box"+ winCase[b]).hasClass('clickedO')) {
          scoreCountO++;
          if (scoreCountO === 3) {
            won = "O Wins";
            return $('.score').html("<h2 class='score'>"+won+"</h2>");
      }
    }
  }
}
  // console.log(scoreCountO);
  if (turns === 9) {
    return $('.score').html("<h2 class='score'>It is a Tie</h2>");
    
  }
}


// Generate a grid, track clicks on each square
function clickableGrid( rows, cols, callback ){
  var i = 0;
  var grid = document.createElement('table');
  grid.className = 'grid';
  for (var r = 0 ; r < rows; ++r ){
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c = 0 ; c < cols ; ++c ){
      var cell = tr.appendChild(document.createElement('td'));
      // cell.innerHTML = ++i;
      var theNumber = cell.id = ('box'+i++);
      cell.addEventListener('click', (function(el,r,c,i){
          return function(){
         callback(el,r,c,i); }
       })(cell,r,c,i),false);

    }
  }
  return grid;
}



