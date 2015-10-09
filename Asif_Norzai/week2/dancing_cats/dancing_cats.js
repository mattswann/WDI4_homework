var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var fasterCat = 5;
var goRight = true;
var flipMovePixels = 10;
var halfWayWidth = (Math.floor(window.innerWidth/2));
var halfWay = function () {
  if (halfWayWidth) {
    return img.src = 'http://i.giphy.com/mtodxXp8DxVRu.gif';
  }
};
var catWalk = function() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left, 10);
  if (goRight) {
    img.style.left = (currentLeft + movePixels) + 'px';
  } else {
    img.style.left = (currentLeft - movePixels) + 'px';
  }

  if (goRight === true && currentLeft > (window.innerWidth + img.width)) {
    goRight = false;
    img.style.transform = 'scaleX(-1)';
  } else if (goRight === false && currentLeft < 0) {
    goRight = true;
    img.style.transform = 'scaleX(1)';
  }
  // if (currentLeft > (window.innerWidth + img.width)){
  //   img.style.left = '0px';
  // }
};

var startCatWalk = function() {
  if (catTimer !== null) {
    clearTimeout(catTimer);
    catTimer = null;
  }
  catTimer = window.setInterval(catWalk, delayMs);
};

var runCatWalk = function () {
  movePixels += 5;
  if (catTimer !== null) {
    clearTimeout(catTimer);
    catTimer = null;
  }
  catTimer = window.setInterval(catWalk, fasterCat);
};

var stopCatWalk = function () {
  clearTimeout(catTimer);
  catTimer = null;
};

// var flipCat = function () {
//   var img = document.getElementsByTagName('img')[0];
//   var currentRight = parseInt(img.style.right, 10);
//   img.style.right = (currentRight - flipMovePixels) + 'px';
//   img.style.transform = 'scaleX(-1)';
//   if (currentRight > (window.innerWidth - img.width)) {
//     img.style.right = '0px';
//   }
// }

var startIt = document.getElementById('startIt');
var goFaster = document.getElementById('goFaster');
var stopIt = document.getElementById('stopIt');
// var flipIt = document.getElementById('flipIt');

startIt.addEventListener('click', startCatWalk);
goFaster.addEventListener('click', runCatWalk);
stopIt.addEventListener('click', stopCatWalk);
// flipIt.addEventListener('click', flipCat);
