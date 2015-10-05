var movePixels = 10;
var delayMs = 50;
var catTimer = null;


// var catWalk = function() {
//   var img = document.getElementsByTagName('img')[0];
//   var currentLeft = parseInt(img.style.left, 10);
//   img.style.left = (currentLeft + movePixels) + 'px';
//   if (currentLeft > (window.innerWidth - img.width)) {
//     img.style.left = '0px';
//   }
// }

var flag = {
  postion: true
}

var catWalk = function() {
  var widthGot = document.body.clientWidth;
  if (flag.postion){
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left, 10);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (widthGot - img.width)) {
     flag.postion = false;
  } 
  }else {
    console.log('got');
    var img = document.getElementsByTagName('img')[0];
    var currentLeft = parseInt(img.style.left, 10);
    img.style.left = (currentLeft - movePixels) + 'px';
    console.log(widthGot)
    if (currentLeft <= 1){
      flag.postion = true;
    }
  }
  
}

var startCatWalk = function() {
  if (catTimer !== null) {
    return;
  }
  catTimer = window.setInterval(catWalk, delayMs); 
}


var stopCatWalk = function() {
  clearInterval(catTimer);
  catTimer = null;
}

var speedCatWalk = function() {
  movePixels += 5;
}

var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var speedButton = document.getElementById('speed');

startButton.addEventListener('click', startCatWalk);
stopButton.addEventListener('click', stopCatWalk);
speedButton.addEventListener('click', speedCatWalk);
