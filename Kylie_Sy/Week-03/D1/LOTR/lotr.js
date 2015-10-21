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

// TASK 1
function makeMiddleEarth(lands) {
	// create a section tag with an id of middle-earth
    var $newLandSect = $("<section>").attr("id", "middle-earth");
    // add each land as an article tag
    _.each(lands,  function(elem) {
    	var $newLandArticle = $("<article>");
    	
    	 // inside each article tag include an h1 with the name of the land
		$newLandArticle.append($("<h1>").html(elem));
    	// .html(elem)
    	$newLandSect.append($newLandArticle);
    	$("body").append($newLandSect);
    });
   
}

// TASK 2
function makeHobbits(hobbits) {
	// display an unordered list of hobbits in the shire
	var $theShire = $("article").eq(0); 
	var $newHobbitsList = $("<ul>");

	// give each hobbit a class of hobbit
	_.each(hobbits, function(elem){
		var $addHobbit = $("<li>").attr("class", "hobbit");
		$addHobbit.html(elem);
		$newHobbitsList.append($addHobbit);
	});


	$theShire.append($newHobbitsList);
}

// TASK 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var $ring = $("<div>").attr("id", "the-ring");

  // add the ring as a child of Frodo
  var $frodo = $(".hobbit").eq(0);
  $frodo.append($ring);
}


// TASK 4
function makeBaddies(baddies) {
  // display an unordered list of baddies in Mordor
	var mordor = $("article").eq(2);
	var $newBaddiesList = $("<ul>").attr("id", "baddies");

	_.each(baddies, function(elem) {
		var $addBaddies = $("<li>").attr("class", "baddy");
		$addBaddies.html(elem);
		$newBaddiesList.append($addBaddies);
	})

	mordor.append($newBaddiesList);
}

// TASK 5
function makeBuddies(buddies) {
	// create an aside tag
	$("body").append($("<aside>"));

	// display an unordered list of buddies in the aside
	var $newBuddiesList = $("<ul>").attr("id", "buddies");

	_.each(buddies, function(elem) {
		var $addBuddy = $("<li>").attr("class", "buddy");
		$addBuddy.html(elem);
		$newBuddiesList.append($addBuddy);
	});

	$("aside").append($newBuddiesList);

	// Make the Gandalf text node have a grey background
	$(".buddy").eq(0).addClass("gandalf-grey");
}

// TASK 6
function leaveTheShire() {
	// assemble the hobbits and move them to Rivendell
	var $assembleHobbits = $("ul").eq(0);
	var $rivendell = $("article").eq(1);
	$rivendell.append($assembleHobbits);
} 

// TASK 7

function beautifulStranger() {
	// change the buddy 'Strider' textnode to "Aragorn"
	var $strider = $(".buddy").eq(3);
	// .contents() gets children including text and comment nodes
	$strider.contents().replaceWith("Aragorn");
}

// TASK 8

function forgeTheFellowShip() {
	// move the hobbits and the buddies to Rivendell
	leaveTheShire();
	$assembleBuddies = $("ul").eq(2);
	var $rivendell = $("article").eq(1);
	$rivendell.append($assembleBuddies);

	// create a new div called 'the-fellowship'
	var $fellowship = $("<div>").attr("id", "the-fellowship");
	$fellowship.append($("<h3>").html("The Fellowship"));
	$("body").append($fellowship);
	
	// add each hobbit and buddy one at a time to 'the-fellowship'
	// after each character is added make an alert that they have joined your party
	var $fellowshipList = $("<ul>");
	$("#the-fellowship").append($fellowshipList);
	// adding hobbits to 'the-fellowship'
	_.each($(".hobbit"), function(elem, index) {
		var $hobbitsJoin = $fellowshipList.append(elem);
		// $fellowshipList.append($hobbitsJoin);

		alert(hobbits[index] + " has joined the party.");
	});
	// adding buddies to 'the-fellowship'
	_.each($(".buddy"), function(elem, index) {
		var $buddiesJoin = $fellowshipList.append(elem);
		// $fellowshipList.append($buddiesJoin);
		alert(buddies[index] + " has joined the party.");
	});

	// remove ul of .buddies
	$assembleBuddies.remove();

	// remove ul of .hobbit from Rivendell
	$("ul").eq(0).remove();
}

// TASK 9
function theBalrog() {
	// change the 'Gandalf' textNode to 'Gandalf the White'

	// apply style to the element
	// make the background 'white', add a grey border
	$(".buddy").eq(0).removeClass('gandalf-grey').addClass("gandalf-white").html("Gandalf the White");
}

// TASK 10
function hornOfGondor() {
	// pop up an alert that the horn of gondor has been blown
	alert("Horn of gondor has been blown!");

	// Boromir's been killed by the Uruk-hai!
	alert("Boromir's been killed by the Uruk-hai!");

	// put a linethrough on boromir's name
	var $boromir = $(".buddy").eq(4);
	$boromir.addClass("boromir-killed");

	// Remove the Uruk-Hai from the Baddies on the page
	$(".baddy").eq(2).remove();

	// Remove Boromir from the Fellowship
	// Put Boromir in the Footer
	var $addFooter = $("<footer>");
	$("body").append($addFooter);
	$addFooter.append($boromir);

}

// TASK 11
function itsDangerousToGoAlone(){
	// take Frodo and Sam out of the fellowship and move them to Mordor
	var $frodo = $(".hobbit").eq(0);
	var $sam = $(".hobbit").eq(1);
	var $mordor = $("article").eq(2);
	$mordor.append($frodo);
	$mordor.append($sam);

	// add a div with an id of 'mount-doom' to Mordor
	var $addMtDoom = $("<div>").attr("id", "mount-doom").html("Mount Doom");
	$mordor.append($addMtDoom);
}

// TASK 12
function weWantsIt() {
	// Create a div with an id of 'gollum' and add it to Mordor
	var $addGollum = $("<div>").attr("id", "gollum");

	// Remove the ring from Frodo and give it to Gollum
	var $removeRing = $addGollum.append($("#the-ring"));

	// Move Gollum into Mount Doom
	$("#mount-doom").append($removeRing);
}

// TASK 13
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  $("#gollum").remove();
  $("#the-ring").remove();

  // remove all the baddies from the document
  $("#baddies").remove();

  // Move all the hobbits back to the shire
  var $theShire = $("article").eq(0); 
  var $newHobbitsList = $("<ul>");
  $theShire.append($newHobbitsList);

	// give each hobbit a class of hobbit
	_.each($(".hobbit"), function(elem) {
		$newHobbitsList.append(elem);
	});

}


makeMiddleEarth(lands);
makeHobbits(hobbits);
keepItSecretKeepItSafe();
makeBaddies(baddies);
makeBuddies(buddies);
leaveTheShire();
beautifulStranger();
forgeTheFellowShip();
theBalrog();
hornOfGondor();
itsDangerousToGoAlone();
weWantsIt();
