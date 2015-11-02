$(function(){
  clock();
});

function clock(){
  var currentTime = new Date();

  // Every hour the hour hand moves 30 degrees,
  // and 0.5 additional degrees for each past minute
  var currentHour = currentTime.getHours() * 30 + currentTime.getMinutes() * (0.5);
  var currentMin = currentTime.getMinutes() * 6;
  var currentSec = currentTime.getSeconds() * 6;

  var hour = $("#hour-hand") //.hide().css("transform","rotate("+currentHour+"deg)").fadeIn(1500);
  var minute = $("#minute-hand") //.hide().css("transform","rotate("+currentMin+"deg)").fadeIn(1500);
  var second = $("#second-hand") //.hide().css("transform","rotate("+currentSec+"deg)").fadeIn(1500);

  start();

  function start(){
    setInterval(function(){
      currentSec += 50;
      second.css("transform","rotate("+ currentSec +"deg)");
    },10);
    setInterval(function(){
      currentMin += 40;
      minute.css("transform","rotate("+ currentMin +"deg)");
    },100);
    setInterval(function(){
      currentHour += 30;
      hour.css("transform","rotate("+ currentHour +"deg)");
    },1000);
  }
}
