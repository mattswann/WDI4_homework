function greaterNum(num1, num2) {
  if (num1 > num2) {
    return console.log('The greater number of ' + num1 + ' and ' + num2 + ' is ' + num1);
  } else {
    return console.log('The greater number of ' + num2 + ' and ' + num1 + ' is ' + num2);
  }
}

greaterNum(2342, 2232);
greaterNum(4342, 22232);

function helloWorld(languageCode) {
  if (languageCode === 'es') {
    return console.log('Hola, Mundo');
  } else if (languageCode === 'de') {
    return console.log('Hallo, Welt');
  } else if (languageCode === 'ps') {
    return console.log('Allo Narhai');
  } else {
    return console.log('Hello, World');
  }
}

helloWorld('es');
helloWorld('de');
helloWorld('ps');
helloWorld();

function assignGrade(numberScore) {
  if (numberScore >= 90) {
    return console.log('For ' + numberScore + ', you got an A');
  } else if (numberScore >= 80) {
    return console.log('For ' + numberScore + ', you got a B');
  } else if (numberScore >= 70) {
    return console.log('For ' + numberScore + ', you got a C');
  } else if (numberScore >= 60) {
    return console.log('For ' + numberScore + ', you got a D');
  } else {
    return console.log('For ' + numberScore + ', you got a F');
  }
}

assignGrade(99);
assignGrade(89);
assignGrade(76);
assignGrade(65);
assignGrade(54);

function pluralize(animal, numberOf) {
  return console.log(numberOf + ' ' + animal);
}

pluralize(30, 'horses');
pluralize(10, 'sheep');
pluralize(50, 'geese');


for (var i = 0; i <= 10; i += 1) {
    var timesItBy = 9;
    var result = i * timesItBy
    console.log(i + ' * ' + timesItBy + " = " + result);
}
