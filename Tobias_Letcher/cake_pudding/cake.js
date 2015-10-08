

var track = {
  lettersGessed: '',
  turnsLeft: 5,
  secretWordRecord: '',
  secretWordDisplay: ''
} 



function chechIt(letter){
  if (track.turnsLeft === 0) {
    document.getElementById("lettersGuessed").innerHTML = "You Lose: refresh the page to try again";
    return
  }
  
  if (track.lettersGessed.indexOf(letter) === -1) {
    track.lettersGessed += (letter + ' ');
  }
  
  if (track.secretWordRecord.indexOf(letter) !== -1) {
    document.getElementById("lettersRight").innerHTML = track.secretWordDisplay;
    if (track.secretWordRecord.indexOf(letter) === -1) {
      track.secretWordDisplay += letter;
      }
    } else {
        track.turnsLeft -= 1;
        document.getElementById("turns").innerHTML = track.turnsLeft;
        if (track.turnsLeft === 0) {
        document.getElementById("lettersGuessed").innerHTML = "You Lose: refresh the page to try again";
            return
          }
  } 

  document.getElementById("lettersGuessed").innerHTML = track.lettersGessed;

}

function setWord() {
  var getRanNum = Math.floor(Math.random() * names.length);
  var getName = names[getRanNum]; 
  track.secretWordRecord = getName.toLowerCase();
  // track.secretWordDisplay = (' ' * result.length);
}

document.getElementById("turns").innerHTML = track.turnsLeft;

var result;
result = Mousetrap.bind('a', function(e) {
  chechIt('a');
});
result = Mousetrap.bind('b', function(e) {
  chechIt('b');
});
result = Mousetrap.bind('c', function(e) {
  chechIt('c');
});
result = Mousetrap.bind('d', function(e) {
  chechIt('d');
});
result = Mousetrap.bind('e', function(e) {
  chechIt('e');
});
result = Mousetrap.bind('f', function(e) {
  chechIt('f');
});
result = Mousetrap.bind('g', function(e) {
  chechIt('g');
});
result = Mousetrap.bind('h', function(e) {
  chechIt('h');
});
result = Mousetrap.bind('i', function(e) {
  chechIt('i');
});
result = Mousetrap.bind('j', function(e) {
  chechIt('j');
});
result = Mousetrap.bind('k', function(e) {
  chechIt('k');
});
result = Mousetrap.bind('l', function(e) {
  chechIt('l');
});
result = Mousetrap.bind('m', function(e) {
  chechIt('m');
});
result = Mousetrap.bind('n', function(e) {
  chechIt('n');
});
result = Mousetrap.bind('o', function(e) {
  chechIt('o');
});
result = Mousetrap.bind('p', function(e) {
  chechIt('p');
});
result = Mousetrap.bind('q', function(e) {
  chechIt('q');
});
result = Mousetrap.bind('r', function(e) {
  chechIt('r');
});
result = Mousetrap.bind('s', function(e) {
  chechIt('s');
});
result = Mousetrap.bind('t', function(e) {
  chechIt('t');
});
result = Mousetrap.bind('u', function(e) {
  chechIt('u');
});
result = Mousetrap.bind('v', function(e) {
  chechIt('v');
});
result = Mousetrap.bind('', function(e) {
  chechIt('');
});
result = Mousetrap.bind('w', function(e) {
  chechIt('w');
});
result = Mousetrap.bind('x', function(e) {
  chechIt('x');
});
result = Mousetrap.bind('y', function(e) {
  chechIt('y');
});
result = Mousetrap.bind('z', function(e) {
  chechIt('z');
});

var names = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William H. Harr", "John Tyler", "James K. Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Rutherford B. Hayes", "James A. Garf", "Chester A. Arthur", "Grover Cleveland", " Benjamin Harrison", "Grover Cleveland", "William McKinley", "Theodore Roosevelt", "William H. Taft", "Woodrow Wilson", "Warren G. Harding", " Calvin Coolidge", "Herbert Hoover", "Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower", "John F. Kennedy", "Lyndon B. Johnson, Richard M. Nixon", "Gerald R. Ford", "Jimmy Carter", "Ronald Reagan", "George H. W. Bush", "Bill Clinton", "George W. Bush", "Barack Hussein Obama"]

setWord()
document.getElementById("grafic").innerHTML = track.secretWordRecord;


// result = mousetrap.bind('a', chechIt('a'));
// result = Mousetrap.bind('b', chechIt('b'));
// result = Mousetrap.bind('c', chechIt('c'));
// result = Mousetrap.bind('e', chechIt('e'));
// result = Mousetrap.bind('d', chechIt('d'));
// result = Mousetrap.bind('e', chechIt('e'));
// result = Mousetrap.bind('f', chechIt('f'));
// result = Mousetrap.bind('g', chechIt('g'));
// result = Mousetrap.bind('h', chechIt('h'));
// result = Mousetrap.bind('i', chechIt('i'));
// result = Mousetrap.bind('j', chechIt('j'));
// result = Mousetrap.bind('k', chechIt('k'));
// result = Mousetrap.bind('l', chechIt('l'));
// result = Mousetrap.bind('m', chechIt('m'));
// result = Mousetrap.bind('n', chechIt('n'));
// result = Mousetrap.bind('o', chechIt('o'));
// result = Mousetrap.bind('p', chechIt('p'));
// result = Mousetrap.bind('q', chechIt('q'));
// result = Mousetrap.bind('r', chechIt('r'));
// result = Mousetrap.bind('s', chechIt('s'));
// result = Mousetrap.bind('t', chechIt('t'));
// result = Mousetrap.bind('u', chechIt('u'));
// result = Mousetrap.bind('v', chechIt('v'));
// result = Mousetrap.bind('w', chechIt('w'));
// result = Mousetrap.bind('x', chechIt('x'));
// result = Mousetrap.bind('y', chechIt('y'));
// result = Mousetrap.bind('z', chechIt('x'));



//  'George Washington, John Adams, Thomas Jefferson, James Madison, James Monroe, John Quincy Adams, Andrew Jackson,  Martin Van Buren, William H. Harr, John Tyler, James K. Polk, Zachary Taylor, Millard Fillmore, Franklin Pierce, James Buchanan, Abraham Lincoln, Andrew Johnson, Ulysses S. Grant, Rutherford B. Hayes, James A. Garf,Chester A. Arthur, Grover Cleveland, Benjamin Harrison, Grover Cleveland,William McKinley, Theodore Roosevelt, William H. Taft, Woodrow Wilson, Warren G. Harding, Calvin Coolidge, Herbert Hoover, Franklin D. Roosevelt, Harry S. Truman, Dwight D. Eisenhower, John F. Kennedy, Lyndon B. Johnson Richard M. Nixon, Gerald R. Ford, Jimmy Carter, Ronald Reagan, George H. W. Bush, Bill Clinton, George W. Bush, Barack Hussein Obama';

