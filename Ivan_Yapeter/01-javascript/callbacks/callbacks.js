console.log('call me back');

// setTimeout(function, miliseconds);
var someTask = function() {
  console.log('eat cake');
};
var otherTask = function() {
  console.log('drink water');
};
var doSomething = function(task) { // Task argument is just a name, for doSomething function use.
  console.log('hey');
  console.log('task', task);
  task(); // task() function is any function that is passed by calling doSomething( <anyFunction> ) 
  // so task() will run the function that is assign eq. doSomething(otherTask) or doSomething(someTask)
  // doSomething(otherTask); will run both doSomething and otherTask
  // doSomething(someTask); will run both doSomething and someTask
  //this is called callback function
};
