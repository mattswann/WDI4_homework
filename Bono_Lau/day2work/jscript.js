/*top choices*/
console.log('testing');
var choices = ['red','yellow','blue','grey','white','black'];
for (var i=1;i<choices.length;i++){
console.log('My #'+i+'choice is ' + choices[i-1]);  
}
/* greater number*/
function greaterNum(firstNum,secondNum){
if (firstNum > secondNum){
  console.log(firstNum +' is bigger than '+ secondNum);
  return firstNum;
} else if (firstNum < secondNum){
  console.log(firstNum + ' is smaller than '+ secondNum);
   return secondNum;
} else {
  console.log(firstNum + ' is equal to '+ secondNum);
  return firstNum, secondNum;
}
}
/*the world translator*/
function helloWorld(lanCode){
  var h;
if (lanCode === 'fr'){
  h = 'Bonjour!';
} else if (lanCode === 'esp'){
  h = 'blah...blah...blah';
} else if (lanCode === 'chn'){
  h = 'nihao!';
}else {
  h = 'Hello,World!';
}
console.log(h);
return h;
}

/*the grade assigner*/
function assignGrade(score){
    var grade;
    if (score>=90){
      grade = 'A';
    }else if (score>=80){
       grade = 'B';
    }else if (score>=70){
       grade = 'C';
    }else if (score>=60){
       grade = 'D';
    }else{
      console.log('You are failed!');
    }
     console.log('You get Grade'+grade+'!');
    return grade;
}

/*pluralize*/
function pluralize(noun,num){
if (num >1){
  if (noun === 'sheep'){
    console.log('There are '+num +' '+ noun);
  }
  var res = noun.concat('s');
    console.log('There are '+ num + ' '+ res);
} else{
  console.log('There is '+num+' '+noun);
}
}

/*multiplication tables*/
var result = [];
for (var i=0; i<=10; i++){
  result[i] = i*9;
  console.log(result[i]);
}


