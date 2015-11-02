// var clock = {
//   var $secondhand = $('#second-hand');
//   var $minutehand = $('#minute-hand');
//   var $hourhand = $('#hour-hand');
//   var rotate = 0;
//   secondStart: function() {
//     var rotate6Deg = function() {
//       $($secondhand).css( 'rotate', rotate + 'deg' );
//       rotate += 6;
//     }
//     var $secondRotation = setInterval(rotate6Deg(), 1000);
//   },

//   minuteStart: function() {

//   },

//   hourStart: function() {

//   }
// }
// clock.secondStart();

var clock = function() {
  var $secondhand = $('#second-hand');
  var $minutehand = $('#minute-hand');
  var $hourhand = $('#hour-hand');
  var currentdate = new Date();
  var second = currentdate.getSeconds();
  var minute = currentdate.getMinutes();
  var hour = currentdate.getHours();

  
  setInterval(function() { 
    second += 6;
    $secondhand.css( 'transform', 'rotate(' + second + 'deg)' ); 
    minute += (6/60000); // minute = 59 ( 6 / 60 )
    $minutehand.css( 'transform', 'rotate(' + minute + 'deg)' );
    hour += (30/3600); // hour = 12 ( 30 / 3600 )
    $hourhand.css( 'transform', 'rotate(' + hour + 'deg)' );

  }, 1000);

};

clock();