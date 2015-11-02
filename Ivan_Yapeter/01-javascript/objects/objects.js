console.log('objects here we go');

var myObjects = {}; // empty object

var Person = {
  name: 'Jamie',
  surname: 'Dawson',
  age: 15
};

var classData = {
  name: 'appleandroids',
  campus: 'melbourne'
  sayHello: function() {
    console.log('hello class');
  }
};

// var accelerate = function() {

// }

// function accelerate() {

// }

var car = {
  speed: 0,
  accelerate: function() {
    car.speed = car.speed + 10; // car.speed += 10, this.speed += 10;
  }
};