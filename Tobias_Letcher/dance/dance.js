var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var flag = true;

  var k = 0;
  function flip(image) {
    k += 180;
    image.style.transform = "rotatey(" + k + "deg)";
    image.style.transitionDuration = "0.5s"
    return
  }

var catWalk = function() {
  var widthGot = document.body.clientWidth;
  if (flag){
  var img = document.getElementsByTagName('img')[0];

  var currentLeft = parseInt(img.style.left, 10);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (widthGot - img.width)) {
     flag = false;
     img.style.webkitTransform = 'scaleX(-1)';
  } 
  }else {
    
    var img = document.getElementsByTagName('img')[0];
    
    var currentLeft = parseInt(img.style.left, 10);
    img.style.left = (currentLeft - movePixels) + 'px';
    console.log(widthGot)
    if (currentLeft <= 1){
      flag= true;
      img.style.webkitTransform = 'scaleX(1)';
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


// var c = $("canvas")[0];
// var w = c.width;
// var h = c.height;
// var dag = $("img")[0];
// setTimeout(function () {
//     c.getContext('2d').drawImage(dag, 0, 0, w, h);
//     $(dag).hide();
//     $(c).show();
// },10000);
