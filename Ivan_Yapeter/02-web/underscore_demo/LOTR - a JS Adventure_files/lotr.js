var hobbits = [
"Frodo Baggins",
"Samwise 'Sam' Gamgee",
"Meriadoc \"Merry\" Brandybuck",
"Peregrin 'Pippin' Took"
];

var buddies = [
"Gandalf the Grey",
"Legolas",
"Gimli",
"Strider",
"Boromir"
];

var baddies = [
"Sauron",
"Saruman", 
"The Uruk-hai", 
"Orcs"
];

///===========================================///
///
/// 1
///===========================================///
var lands = ["The Shire", "Rivendell", "Mordor"];
function makeMiddleEarth(lands) {
  
  // create a section tag with an id of middle-earth
  var $middleEarth = $('<section>').attr('id', 'middle-earth');

  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  $.each(lands, function(index, land) {
    var $landName = $('<article>').append('<h1>' + land);
    $middleEarth.append($landName)
  });

  $('body').append($middleEarth);
}

makeMiddleEarth(lands);

///===========================================///
///
/// 2
///===========================================///
function makeHobbits(hobbits) {
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of hobbit
  $.each(hobbits, function(index, hobbit) {
    $hobbitsList = $('<ul>').attr('class', 'hobbit').html(hobbit);
    $('#middle-earth').eq(0).append($hobbitsList);
  });
}
makeHobbits(hobbits);