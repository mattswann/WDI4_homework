var topChoices = ["Nixon", "Adems", "Buchanan", "Madison", "Nonroe"]

function getGetOrdinal(n) {
   var s=["th","st","nd","rd"],
       v=n%100;
   return n+(s[(v-20)%10]||s[v]||s[0]);
}

function bestChoice() {
  var orderIndex = 0
  for (index = 0; index < topChoices.length; index++) {
      orderIndex += 1;
    console.log("My "+ getGetOrdinal(orderIndex) + " choice is " + topChoices[index]);
  }
}

function greaterNum(num1, num2) {
  var result;
  if (num1 > num2) {
    result = num1;
  } else if (num2 > num1) {
    result = num2;
  } else if (num2 === num1){
    console.log("numbers " + num1 + " and " + num2 + " are the same");
  }
  return result;
}


function helloWorld(lang) {
/// "de" stands for german, ru for russian, no for norwegian
  var result;
  if (lang === "de"){
    result = "Hallo Welt";
  } else if (lang === "ru") {
    result = "Привет мир";
  } else if (lang === "no") {
    result = "Hei verden";
  } else {
   result = "language not recognized";
  }
  console.log(result);
}




function assignGrade(score){
  var result;
  if ((score >= 101) || (score < 0)) {
    result = "invalid grade score";
  } else if (score < 60) {
    result = "F";
  } else if ((score >= 6) && (score < 70)) {
    result = "D";
  } else if ((score >= 70) && (score < 80)) {
    result = "C";
  } else if ((score >= 8) && (score < 90)) {
    result = "B";
  } else if ((score >= 90) && (score < 101)) {
    result = "A";
  }
    return result;
}

function pluralize(noun, number){
  var result;

  if (number === 1) {
    result = 1 + " " + noun;
  else {
    result = number + " " + noun + "s";
  }
  return result;
}

var max = 10;
for (index=0; index < max +1; index++){
  console.log(index + " 9 = " + (index * 9))
} 

for (index = 60; index < 101; index++){
  console.log(assignGrade(index));
} 

