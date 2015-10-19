console.log("This is working");


function greaterNum(numOne, numTwo){
  if (numOne > numTwo){ 
    return numOne}
  else if (numTwo > numOne){
    return numTwo}
    else return "they are both the same"
}

function helloWorld(languageCode){
if(languageCode === "fr"){
  return "Bonjour le monde";
}
else if(languageCode === "dt"){
return"Hallo Wereld";
}
else if(languageCode === "gr"){
return "Hallo Welt";
}
else return "Hello World";
}

function assignGrade(score){
  if(score <= 20){
    return "F";
  }
  else if(score <= 40 && score > 20){
    return "D";
  }
  else if(score <= 60&& score > 40){
    return "C";
  }
  else if(score <= 80&& score > 60){
    return "B";
  }
  else if(score <= 100){
    return "A";
  }
  else return "How did you get about 100%????";
}

function pluralize(animal, amount){

if(amount === 1)
{
  return amount + " " + animal
}
else if (amount > 1 && animal === "dog")
{
  return amount + " " + "dogs"
}
else if (amount > 1 && animal === "cat")
{
  return amount + " " + "cats"
}
else return amount + " " + animal+"s"
}

for (i = 0; i <= 10; i++){
  var multiple = i*9;
  console.log(multiple)
}

for(i = 60; i<=100; i++){
  var grade = assignGrade(i)
  console.log("you got a "+ grade)
}