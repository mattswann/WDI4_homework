console.log("cats");

/* NOTES

+ find a better way to determine the centre of the page
+ fix proper postion for images

*/

//Global variables
var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var timerCount = 0;

var startButton = document.getElementById('start-btn');
var fastButton = document.getElementById('fast-btn');
var stopButton = document.getElementById('stop-btn');
var secretButton = document.getElementById('secret-btn');

var catPosition = []; // for testing

var audio = new Audio('gif/hs.mp3');

var img0 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[2];
var img3 = document.getElementsByTagName('img')[3];
var changeImage = function(imgSrc) {
     image = document.getElementsByTagName('img')[1];
     image.src = imgSrc;
 }

var moreCats = function() {
 	img0.src = "gif/pusheen_group.gif";
	img2.src = "gif/crazy.gif";
	img3.src = "gif/crazy2.gif";
 }

var catWalk = function() {
	var img1 = document.getElementsByTagName('img')[1];
	var currentLeft = parseInt(img1.style.left, 10);
	var imageCentre = Math.round(((window.innerWidth - img1.width) / 2) / 10) * 10;
	catPosition.push(currentLeft);

	img1.style.left = (currentLeft + movePixels) + 'px';
	
	if (currentLeft > (window.innerWidth - img1.width)) {
		img1.style.left = '0px';
		catPosition.length = 0; // resets the array
	}
	
	if (currentLeft >= imageCentre && currentLeft < (imageCentre + movePixels)) { 
			
			// img1.src = "gif/pusheen_gangnam.gif";
		 	changeImage("gif/pusheen_gangnam.gif");
			stopCat();

		setTimeout(startCatWalk, 1000);
	}

	if (movePixels >= 100) {
		audio.play();
		changeImage("gif/pusheen_gangnam.gif");
		stopCat();

		setTimeout(moreCats, 16000);
		// img0.src = "gif/pusheen_group.gif";
		// img2.src = "gif/pusheen_uni.gif";
	}

	// test only
	console.log('movepixels ', movePixels);
	console.log('current Left ', currentLeft);
	console.log('img centre', imageCentre);
	console.log('array ', catPosition);
	console.log('img1.style.left ', img1.style.left + 'px');

}

var startCatWalk = function() {
	changeImage("gif/pusheen_run.gif");
	if (catTimer !== null) { // clear timer if not null
		window.clearInterval(catTimer);
		catTimer = null;
	}
	catTimer = window.setInterval(catWalk, delayMs);
}


function stopCat() {
	window.clearInterval(catTimer);
	catTimer = null;
}

var fastCat = function() {
	movePixels += 10;
}

startButton.addEventListener('click', startCatWalk);
fastButton.addEventListener('click', fastCat);
stopButton.addEventListener('click', stopCat);
