//function map(planner) {

var train = [
        Alamein = {
          name: 'alamein',
          stations : ['flagstaff','richmond','East Richmond','Burnley','Hawthorn','Glenferie']},
        Glenwaverley = {
          name : 'Glenwaverley',
          stations: ['flagstaff','Melbourne central','parliament','richmond','kooyong','tooronga']},
          Sandringham ={
          name: 'Sandringham',
          stations: ['southern cross','richmond','south yarra','prahran','windsor']}
];
var line = train() 
var x = train.stations[0].indexOf('Glenferie');
// console.log(x);
// var ind = x.indexOf('flagstaff');
// console.log(ind);
var y = train.stations.indexOf('East Richmond');
//while(train.stations.index = ,train.stations.indextrain.stations.length, )
if (x<y){
var map1 = train.stations.slice(x,y+1);
console.log(map1);}
else {
  var map2 = train.stations.reverse();
  var xx = train.stations.indexOf('Glenferie');;
  var yy = train.stations.indexOf('East Richmond');
  var maap = train.stations.slice(xx,yy+1);
  console.log(maap);
}

//return map1;
//}

//console.log(map1);
// for(i=0;i<train.length;i += 1){
//  var ori = train[i];
// }

// //while (dep= train.){
//     for(i=0,i<train.length){
//     var des;
//     }
