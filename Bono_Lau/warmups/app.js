var aTeamWords = [];
var bTeamWords = [];
var fallinCounter = 0;

var aTeamInput = document.getElementsByTagName('Alpha Team');
var bTeamInput = document.getElementsByTagName('Beta Team');
var fireBtn = document.getElementById('submit');

var fallinNumber = function() {
aTeamWords = _.toArray(aTeamInput.value);
bTeamWords = _.toArray(bTeamInput.value);
for (ai=0; ai<aTeamWords.length;ai++){
  for (bi=0;bi<bTeamWords.length;bi++){
    if(aTeamWords[ai] === bTeamWords[bi]){
       fallinCounter = fallinCounter + 1;        
    break;
    }
  }
}
return fallinCounter;  
}

var fireCannons = function() {
  var aBullet = aTeamWords.length - fallinNumber(); 
  var bBullet = bTeamWords.length - fallinNumber();
  if (aBullet>bBullet){
    console.log('Team A wins');
  }else if (aBullet=bBullet){
    console.log("It's a draw");
  }else{
    console.log('Team B wins');
  }
}


fireBtn.addEventListener('click',fireCannons);


