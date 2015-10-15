//  --------------------------------------------------
// 
// JOBS TO DO
// 1. Fix the name of col and rows
// 2. message to the user, who one, freez the game.   
// 3. tie condition 
// 4. buttons so the user can set the size and win condition 
// 5. Write comments 
// 6. Don't allow the user to set win cindition to be larger than 
//      the bord size
// 
// 
//  --------------------------------------------------

// Needed var for the toggle last square off. 
// var lastClicked;

var winBoxRecord = []

var flag = true;
var turns = 0;
var won;
var winSize = 5;
var gridSize = 10;

$('#makeGame').click(function() {
  gridSize = $('#gridSizeInput').val();
  winSize = $('#winSizeInput').val();
});





var grid = clickableGrid(gridSize,gridSize,function(el,row,col,i){
    if (won) {
      printWin(won);
      return;
    }

    if (flag){
      f[row][col] = 'X';
    }else {
      f[row][col] = 'O';
    }

    el.className = (change());
    $(document).click(function(event) {
    var getClicked = (window.lastElementClicked = event.target);
    var getClickedId = getClicked.id;
    // Add new class to clicked box to deactervate it.
    $("#" + getClickedId).addClass('markDone');


    findcollection(row, col);

    // Display winner or tie 
    // winBoxSearch(el, i);
    // console.log(checkWin()); 


    //An oppion to toggle off the last clicked
        // if (lastClicked)lastClicked.className='';
        // lastClicked = el;
  });
});



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

function findcollection(row, col) {
                // [o]    [-]     [o]
                //    [0] [-] [-]
                // [o][-] [u] [x] [-]
                //    [x] [-] [x] 
                // [x]    [x]     [-]


                //    [dileftup]    [colUP]  [dirightup]
                //    [rowleft]       [u]    [rowright] 
                //    [dileftdown] [colDown] [dirightdown] 



  var downRow = '';
  var upRow = '';
  var rigthCol = '';
  var leftCol = '';

  var diRightDown = '';
  var diRightUp = '';
  var diLeftUp = '';
  var diLeftDown = '';

  // console.log(row, col)
  for (var z = 0; z < (winSize+1); z++) {
      // Test if the click would go beyond the grid size 
      if (((row+z) < (gridSize)) && ((row+z) >= 0)){
          // Get the bottom row  
            if (f[(row+z)][col] === 'X') {
              downRow += 'X';
            }else if (f[(row+z)][col] === 'O') {
                downRow += 'O';
              }
      } 

      if (((row-z) < (gridSize)) && ((row-z) >= 0)) {
            // Get top row
          if (f[(row-z)][col] === 'X') {
            upRow += 'X';
            console.log('found')
            }else if (f[(row-z)][col] === 'O') {
              upRow += 'O';
            }
      }
//  --------------------------------------------------
      // // Check boundries
      if (((col+z) < (gridSize)) && ((col+z) > 0)){
          // Get the right col side 
            if (f[row][(col+z)] === 'X') {
              rigthCol += 'X';
            }else if (f[row][(col+z)] === 'O') {
                rigthCol += 'O';
              }
      } 

      if (((col-z) < (gridSize)) && ((col-z) >= 0)) {
            // Get left col side
          if (f[row][(col-z)] === 'X') {
            leftCol += 'X';
            }else if (f[row][(col-z)] === 'O') {
              leftCol += 'O';
            }
      }

//  --------------------------------------------------
      // Get top right diagonal
      if ((((row+z) < (gridSize)) && ((row+z) >= 0)) && (((col+z) < (gridSize)) && ((col+z) >= 0))){
          // Get the bottom row  
            if (f[(row+z)][(col+z)] === 'X') {
              diRightDown += 'X';
            }else if (f[(row+z)][(col+z)] === 'O') {
                diRightDown += 'O';
              }
      } 
      // Get top left diagonal 
      if ((((row-z) < (gridSize)) && ((row-z) >= 0)) && (((col-z) < (gridSize)) && ((col-z) >= 0))){
          // Get the bottom row  
            if (f[(row-z)][(col-z)] === 'X') {
              diLeftUp += 'X';
            }else if (f[(row-z)][(col-z)] === 'O') {
                diLeftUp += 'O';
              }
      }
//  --------------------------------------------------
    // Get top right diagonal
      if ((((row-z) < (gridSize)) && ((row-z) >= 0)) && (((col+z) < (gridSize)) && ((col+z) >= 0))){
          // Get the bottom row  
            if (f[(row-z)][(col+z)] === 'X') {
              diLeftDown += 'X';
            }else if (f[(row-z)][(col+z)] === 'O') {
                diLeftDown += 'O';
              }
      } 
      // Get top left diagonal 
      if ((((row+z) < (gridSize)) && ((row+z) >= 0)) && (((col-z) < (gridSize)) && ((col-z) >= 0))){
          // Get the bottom row  
            if (f[(row+z)][(col-z)] === 'X') {
              diRightUp += 'X';
            }else if (f[(row+z)][(col-z)] === 'O') {
                diRightUp += 'O';
              }
      }
  //  --------------------------------------------------
    // Test the row possible wins
     if (diLeftUp === (("X").repeat(winSize))) {
      console.log("X wins");
    }else if (diLeftUp === (("O").repeat(winSize))){
      console.log("O wins");
    }

    if (diLeftDown === (("X").repeat(winSize))) {
      console.log("X wins");
    }else if (diLeftDown === (("O").repeat(winSize))){
      console.log("O wins");
    }

//  --------------------------------------------------
    // Test the row possible wins
     if (diRightDown === (("X").repeat(winSize))) {
      console.log("X wins");
    }else if (diRightDown === (("O").repeat(winSize))){
      console.log("O wins");
    }

    if (diRightUp === (("X").repeat(winSize))) {
      console.log("X wins");
    }else if (diRightUp === (("O").repeat(winSize))){
      console.log("O wins");
    }
//  --------------------------------------------------
    // Test the row possible wins
     if (upRow === (("X").repeat(winSize))) {
      console.log("X wins");
    }else if (upRow === (("O").repeat(winSize))){
      console.log("O wins");
    }

    if (downRow === (("X").repeat(winSize))) {
      console.log("X wins");
    }else if (downRow === (("O").repeat(winSize))){
      console.log("O wins");
    }
//  --------------------------------------------------
    // Test the col possible wins
    // console.log(rigthCol);
     if (rigthCol === (("X").repeat(winSize))) {
      console.log("X wins");
      rigthCol = '';
    }else if (rigthCol === (("O").repeat(winSize))){
      console.log("O wins");
      rigthCol ='';
    }

    if (leftCol === (("X").repeat(winSize))) {
      console.log("X wins");
      leftCol = '';
    }else if (leftCol === (("O").repeat(winSize))){
      console.log("O wins");
      leftCol = '';
    }
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
      // cell.innerHTML = "";
      var theNumber = cell.id = ('box'+(i++));
      cell.addEventListener('click', (function(el,r,c,i){
          return function(){
         callback(el,r,c,i); }
       })(cell,r,c,i),false);

    }
  }
  return grid;
}

// Append the grid to the DOM.
document.body.appendChild(grid);

// create an arry to track the win condition pattern
var iMax = 10;
var jMax = 10;
var f = new Array();

for (i=0;i<iMax;i++) {
 f[i]=new Array();
 for (j=0;j<jMax;j++) {
  f[i][j]=0;
 }
}
// look at the arry
// console.log(f);


