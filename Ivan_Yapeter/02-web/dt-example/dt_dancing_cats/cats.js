var movePixels = 3;
var delayMs = 50;
var catTimer = null;
var catIsWalking = false;
var goRight = true;

var startButton = document.getElementById('start-btn');
var fasterButton = document.getElementById('faster-btn');
var stopButton = document.getElementById('stop-btn');

var catWalk = function() {
  //setting tagname first img to var img
  var img = document.getElementsByTagName('img')[0];
  //converting 'left' style value that is a string to integer
  var currentLeft = parseInt(img.style.left, 10);
  var whiteSpace = window.innerWidth - img.width;

  // changing img left value by adding movePixels, its an integer but saved as String in DOM
  // if it reaches end of browser window, put the image on the left
  // the left side of image is larger than browser window - image size
  if ( goRight ) {
    img.style.left = (currentLeft + movePixels) + 'px';
  } else {
    img.style.left = (currentLeft - movePixels) + 'px';
  }
  if ( goRight && currentLeft > whiteSpace ) {
    goRight = false;
    img.style.transform = "scaleX(-1)";
  } else if ( !goRight && currentLeft < 0 ) {
    goRight = true;
    img.style.transform = "scaleX(1)";
  }
  
};

var startCatWalk = function() {
  if ( catIsWalking ) {
    console.log('here kitty!');
  } else {
    catTimer = window.setInterval(catWalk, delayMs);
    catIsWalking = true;
  }
};

var fasterCatWalk = function() {
  if ( catIsWalking ) {
    movePixels += 5;
  } else {
    console.log('It\'s not even walking')
  }
};

var stopCatWalk = function() {
  // catTimer = window.clearInterval(catTimer);
  clearInterval(catTimer);
  catTimer = null;
  catIsWalking = false;
  console.log('stay!');
  console.log(catTimer);
};

startButton.addEventListener('click', startCatWalk);
fasterButton.addEventListener('click', fasterCatWalk);
stopButton.addEventListener('click', stopCatWalk);