// Larger Number
function largerNumber(firstNumber, secondNumber) {
    var greater;
    if ( firstNumber > secondNumber ) {
        greater = firstNumber;
    } else {
        greater = secondNumber;
    }
    console.log('The greater number of '+ firstNumber + ' and ' + secondNumber + ' is ' + greater + '.');
}
largerNumber(12, 3);
largerNumber(12, 23);

// The World Translator
function helloWorld(language) {
    var hello;
    if ( language === 'es' ) {
        hello = 'Hola, Mundo';
    } else if ( language === 'de') {
        hello = 'Hallo, Wereld';
    } else {
        hello = 'Hello, World';
    }
    console.log(hello);
}
helloWorld('es');
helloWorld('de');
helloWorld('en');
helloWorld('id');

// The Grade Assigner
function assignGrade(score) {
    var result;
    if ( score < 40 ) {
        result = 'For '+ score +', you got an F';
    } else if ( score <= 59 ) {
        result = 'For '+ score +', you got a D';
    } else if ( score <= 69 ) {
        result = 'For '+ score +', you got a C';
    } else if ( score <= 89 ) {
        result = 'For '+ score +', you got a B';
    } else {
        result = 'For '+ score +', you got an A';
    }
    console.log(result);
}
assignGrade(39);
assignGrade(40);
assignGrade(59);
assignGrade(60);
assignGrade(69);
assignGrade(70);
assignGrade(89);
assignGrade(90);

// The Pluralizer
function pluralize(noun, number) {
    if ( number <= 1 ) {
        console.log(number + " " + noun);
    } else {
        console.log(number + " " + noun + "s");
    }
}
pluralize('cat', 0);
pluralize('cat', 1);

// Multiplication Table
for ( var i = 1; i <= 10; i++) {
    for ( var j = 1; j <= 10; j++) {
     var number = i * j;
     console.log(i + " * " + j + " = " + number);
    }
}