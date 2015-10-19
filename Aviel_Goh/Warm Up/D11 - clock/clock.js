var second = $('#second-hand');
var minute = $('#minute-hand');
var hour = $('#hour-hand');

var currentDate = new Date();
var currentSecond = currentDate.getSeconds() * 6;
var currentMinute = currentDate.getMinutes() * 6;
var currentHour = currentDate.getHours() * 30;

function setClock() {
  second.css('transform', 'rotate(' + currentSecond + 'deg)');
  minute.css('transform', 'rotate(' + currentMinute + 'deg)');
  hour.css('transform', 'rotate(' + currentHour + 'deg)');
}

function startClock() {
  setInterval(function() {
    currentSecond += 366;
    second.css('transform', 'rotate(' + currentSecond + 'deg)')}, 1000);

  setInterval(function() {
    currentMinute += 6;
    minute.css('transform', 'rotate(' + currentMinute + 'deg)')}, 60000);

  setInterval(function() {
    currentHour += 6;
    hour.css('transform', 'rotate(' + currentHour + 'deg)')}, 720000);
}

// document.getElementsByClassName('digital-clock').innerHTML = currentDate.value;

$(function(){
  setClock();
  startClock();
});
