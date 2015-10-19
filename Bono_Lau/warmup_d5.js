var bobScores = {
  name: bob,
  score: [3,2,6,11,9,2,6,9,10]
};
var jimboScores = {
  name: jimbo,
  score: [5,12,9,22,13,7,16,10,11]};
var fishScores = {
  name: fish,
  score: [2,2,4,5,4,3,6,4,1]};
var par = {
  name: par,
  score: [3,4,5,5,3,3,4,3,5]};
function totalScores(){
var bobTotal=0;
var jimboTotal=0;
var fishTotal=0;
var parTotal=0;
var betBob=0;
var betJimbo=0;

for (score in bobScores){
  bobTotal = bobTotal+bobScores.score;
}
/*for (b=0;b<bobScores.length;b++){
bobTotal = bobTotal+bobScores[b];
}
for (j=0;j<jimboScores.length;j++){
jimboTotal = jimboTotal+jimboScores[j];
}
for (f=0;f<fishScores.length;f++){
fishTotal = fishTotal+fishScores[f];
}
for (p=0;p<par.length;p++){
parTotal = parTotal+par[p];
}
console.log('The par is '+parTotal);

for (i=0;i<9;i++){
if((par[i]-bobScores[i]<0) && (par[i]-jimboScores[i]<0) {
betBob=betBob+1;
betJimbo=betJimbo+1;
}else if ((par[i]-bobScores[i]<0) && (par[i]-jimboScores[i]>0){
  betBob=betBob+1;
}else if ((par[i]-bobScores[i]>0) && (par[i]-jimboScores[i]<0){
  betJimbo=betJimbo+1;
 }
}


if (bobTotal>parTotal && jimboTotal>parTotal && fishTotal>parTotal){
console.log('So Bob scores '+ bobTotal +' and jimbo scores '+ jimboTotal+' and fish socres '+fishTotal+'. All three got over par score.');
}else if (bobTotal>parTotal && jimboTotal>parTotal && fishTotal<parTotal){
  console.log('So Bob scores '+ bobTotal +' and jimbo scores '+ jimboTotal+' and fish socres '+fishTotal+'. Bob and jimbo got over par score. fish got under par score.');
}else if (bobTotal>parTotal && jimboTotal<parTotal && fishTotal<parTotal){
  console.log('So Bob scores '+ bobTotal +' and jimbo scores '+ jimboTotal+' and fish socres '+fishTotal+'. Bob got over par score. Jimbo and fish got under par score.');
}else if (bobTotal<parTotal && jimboTotal<parTotal && fishTotal<parTotal){
  console.log('So Bob scores '+ bobTotal +' and jimbo scores '+ jimboTotal+' and fish socres '+fishTotal+'. All three got under par score.');
}
console.log('Fish won '+ betBob+' on Bob and '+betJimbo+' on Jimbo');*/
}