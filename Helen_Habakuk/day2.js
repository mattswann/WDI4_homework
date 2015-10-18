// best of three
  
var bestFurniture = ['bed', 'sofa', 'chair'];
  console.log('My #1 piece of furniture is ' + bestFurniture[0]);
  console.log('My #2 piece of furniture is ' + bestFurniture[1]);
  console.log('My #3 piece of furniture is ' + bestFurniture[2]);

  // greaterNum

function greaterNum (a, b) {
  if (a > b) {
    console.log('The greater number of ' + a +' and ' + b + ' is ' + a);
    } else if (a < b) {
      console.log('The greater number of ' + a +' and ' + b + ' is ' + b);
    } else {
      console.log('The numbers ' + a+ ' and ' + b + ' are even.');
    }
}

// assing grade

function assignGrade (s) {
  if (100 >= s && s >= 90) {
    console.log('A');
  } else if (90 > s && s >= 80) {
    console.log('B');
  } else if (80 > s && s >= 70) {
    console.log('C');
  } else if (70 > s && s >= 60) {
    console.log('D');
  } else if (60 > s && s >=50) {
    console.log('E');
  } else {
    console.log('F');
  }
}

// hello world 
  
  
  var ee = "Tere maailm!"
  var es = "Hola mundo!"
  var de = "Hallo Welt!"
  var en = "Hello world!"
function helloWorld (languageCode) {
  
  if (languageCode === 'ee') {
    console.log(ee)
  } else if (languageCode === 'es') {
    console.log(es)
  } else if (languageCode === 'de') {
    console.log(de)
  } else {
    console.log(en)
  }
}

// pluralizer

function pluralize (noun, number) {
    console.log (number + ' ' + noun + 's');
  }

// multiplication tables

for (var i=0; i <= 10; i++) 
  console.log(i*9);