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

var lands = ["The Shire", "Rivendell", "Mordor"];



// #1
function makeMiddleEarth(lands) {
  // create a section tag with an id of middle-earth
  var $sectionTagWithId = $("<section>", {id: "middle-earth"});
  $('body').append($sectionTagWithId);

  // add each land as an article tag
  for (var i = 0; i < lands.length; i++) {
    var $articleTag = $("<article>", {id: lands[i]});
    $('section').append($articleTag);

    // inside each article tag include an h1 with the name of the land
    var $h1Tag = $('<h1>').html(lands[i]);
    $($articleTag).append($h1Tag);
  }
}

makeMiddleEarth(lands);


// #2
function makeHobbits(hobbits) {

  // display an unordered list of hobbits in the shire
  var $ulTag = $('<ul>');
  $('body').append($ulTag);
  for (var i = 0; i < hobbits.length; i++) {
    var $liTag = $('<li>');
    $($ulTag).append($liTag);
    $($liTag).append(hobbits[i]);

    // give each hobbit a class of hobbit
    $($liTag).addClass('hobbit');
  }
}
makeHobbits(hobbits);


// ## 3
function keepItSecretKeepItSafe() {

  // create a div with an id of 'the-ring'
  var $div = $('<div>');
  $('body').append($div);
  $($div).attr('id', 'the-ring');

  // add the ring as a child of Frodo

}

keepItSecretKeepItSafe();



// ## 4
function makeBaddies(baddies) {
  // display an unordered list of baddies in Mordor
  var $ulTag = $('<ul>');
  $('body').append($ulTag);
  for (var i = 0; i < baddies.length; i++) {
    var $liTag = $('<li>');
    $($ulTag).append($liTag);
    $($liTag).append(baddies[i]);
  }
}
makeBaddies(baddies);


// ## 5
function makeBuddies(buddies) {
  // create an aside tag
  var $asideTag = $('<aside>');
  $('body').append($asideTag);

  // display an unordered list of buddies in the aside
  var $ulTag = $('<ul>');
  $($asideTag).append($ulTag);
  for (var i = 0; i < buddies.length; i++) {
    var $liTag = $('<li>');
    $($ulTag).append($liTag);
    $($liTag).append(buddies[i]);
  }

  // Make the Gandalf text node have a grey background
  $('aside  ul li').first().css('background-color', 'grey');
}

makeBuddies(buddies);


// ## 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var $assembleHobbits = makeHobbits(hobbits);
  var $moveItTo = lands = $assembleHobbits;
  $('body').append($moveItTo);
}
leaveTheShire();



// ## 7
function beautifulStranger() {
  // change the buddy 'Strider' textnode to "Aragorn"
  var $textNode = $(makeBuddies(buddies));
  var $ChangeText = $('aside ul li').eq(-2).text('Aragorn');
  $($textNode).html($ChangeText);
}
beautifulStranger()

// ## 8
function forgeTheFellowShip() {
  // move the hobbits and the buddies to Rivendell
  var $moveHobBud = $(leaveTheShire() + makeBuddies(buddies));
  console.log($moveHobBud);

  // create a new div called 'the-fellowship'
  $createNewDiv = $('<div>').attr('id', 'the-fellowship');
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}
forgeTheFellowShip()


// $('.todos').on('click', 'li', function () {
//   var $newListItem = $('<li>').html(this.innerHTML);
//   $('.completed').append($newListItem);
//   $newListItem.addClass('done');
//   $(event.target).remove();
// });
//
// $('.completed').on('click', 'li', function () {
//   var $newListItem = $('<li>').html(this.innerHTML);
//   $('.todos').append($newListItem);
//   $(event.target).remove();
// });
