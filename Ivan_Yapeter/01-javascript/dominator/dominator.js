console.log('dominator is ready');

var dominator = document.getElementById('dominator');
var inpuxBoxes = document.getElementsByTagName('input');
var firstInputBox = inpuxBoxes[0];

var winButton = document.getElementsByTagName('button')[0];

//winButton.addEventListener(event, function);

var doSomething = function() {
  console.log(firstInputBox.value);
}
winButton.addEventListener('click', doSomething);

// this is useful when you only need to do thing, don't need a name and don't have to reuse the function
winButton.addEventListener('click', function() { 
  console.log('function in the listener');
});