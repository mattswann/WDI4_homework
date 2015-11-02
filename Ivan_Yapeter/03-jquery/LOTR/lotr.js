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
  //++++++++++++//
  // $.each( array, function( arrayIndex, arrayElement))
  //++++++++++++//
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
    $('article').first().append($hobbitsList); // Put list of hobbit to the first artile tag
  });
}
makeHobbits(hobbits);

///===========================================///
///
/// 3
///===========================================///
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // add the ring as a child of Frodo
  $ringDiv = $('<div>').attr('id', 'the-ring');
  $('ul').eq(0).append($ringDiv); // Put div with the-ring id to first ul tag
}
keepItSecretKeepItSafe();

///===========================================///
///
/// 4
///===========================================///
function makeBaddies(baddies) {
  // display an unordered list of baddies in Mordor
  $.each(baddies, function(index, bad) {
    $baddiesList = $('<ul>').html(bad);
    $('article').eq(1).append($baddiesList); //Put list of baddies to the second artile tag
  });
}
makeBaddies(baddies);

///===========================================///
///
/// 5
///===========================================///
function makeBuddies(buddies) {
  // create an aside tag
  // display an unordered list of buddies in the aside
  // Make the Gandalf text node have a grey background
  $aside = $('<aside>');

  $.each(buddies, function(index, bud) {
    $buddiesList = $('<ul>').html(bud);
    $aside.append($buddiesList);
  });
  $('body').append($aside);
  // $('aside ul').eq(0).css( 'background-color', 'grey' );
  $('aside ul:contains("Gandalf the Grey")').css( 'background-color', 'grey' );
}
makeBuddies(buddies);

///===========================================///
///
/// 6
///===========================================///
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  $assembleHobbits = $('.hobbit');
  $('article').eq(1).append($assembleHobbits); // Append hobbit class to second article tag (Rivendell)
}
leaveTheShire();

///===========================================///
///
/// 7
///===========================================///
function beautifulStranger() {
  // change the buddy 'Strider' textnode to "Aragorn"
  $('aside ul:contains("Strider")').text('Aragorn');
}
beautifulStranger();

///===========================================///
///
/// 8
///===========================================///
function forgeTheFellowShip() {
  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  $fellowshipDiv = $('<div>').attr('id', 'the-fellowship');
  $assembleHobbits = $('.hobbit');
  $fellowshipDiv.append($assembleHobbits);
  $assembleBuddies = $('aside ul');
  $fellowshipDiv.append($assembleBuddies);
  $('body').append($fellowshipDiv);
  // alert('The Fellowship has been established');
}
forgeTheFellowShip();

///===========================================///
///
/// 9
///===========================================///
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  $('#the-fellowship ul:contains("Gandalf the Grey")').text('Gandalf the White');
  $('#the-fellowship ul:contains("Gandalf the White")').css({ 'background-color': 'white', 'border': '1px solid grey' });
}
theBalrog();

///===========================================///
///
/// 10
///===========================================///
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
  // Remove Boromir from the Fellowship
  // Put Boromir in the Footer

  // alert('THE HORN OF GONDOR HAS BEEN BLOWN!');
  $('#the-fellowship ul:contains("Boromir")').css( 'text-decoration', 'line-through');
  $('#middle-earth ul:contains("The Uruk-hai")').remove();
  $footer = $('<footer>').appendTo($('body'));;
  $('#the-fellowship ul:contains("Boromir")').appendTo($footer);
}
hornOfGondor();

///===========================================///
///
/// 11
///===========================================///
function itsDangerousToGoAlone() {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  $frodo = $('.hobbit:contains("Frodo Baggins")');
  $sam = $('.hobbit:contains("Samwise \'Sam\' Gamgee")');
  $('article').eq(2).append($frodo, $sam);
  $('article').eq(2).append($('<div>').attr('id', 'mount-doom'));
}
itsDangerousToGoAlone();

///===========================================///
///
/// 12
///===========================================///
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  $('article').eq(2).append($('<div>').attr('id', 'gollum'));
  $('#the-ring').appendTo($('#gollum'));
  $('#gollum').appendTo($('#mount-doom'));
}
weWantsIt();

///===========================================///
///
/// 13
///===========================================///
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  $('#the-ring').remove();
  $('#gollum').remove();
  $('article ul').remove()
  $('.hobbit').appendTo($('article').first());
}
thereAndBackAgain();