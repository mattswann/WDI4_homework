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
if (lanCode === 'fr'){
  console.log('Bonjour!');
} else if (lanCode === 'esp'){
  console.log('blah...blah...blah');
} else if (lanCode === 'chn'){
  console.log('nihao!');
}else {
  console.log('Hello,World!');
}
}

/*the grade assigner*/
function assignGrade(score){
    if (score>=90 & score<=100){
      console.log('You get Grade A!');
    }else if (score>=80 && score <90){
      console.log('You get Grade B!');
    }else if (score>=70 && score<80){
      console.log('You get Grade C!');
    }else if (score>=60 && score<70){
      console.log('You get Grade D!');
    }else{
      console.log('You are failed!');
    }
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
for (var i=0; i<10; i++){
  result[i] = i*9;
  console.log(result[i]);
}


