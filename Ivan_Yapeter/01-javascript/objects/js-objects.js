// The Recipe Card
var recipe = {
  title: 'Mole',
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
};

function printoutRecipe() {
  console.log(recipe.title);
  console.log('Serves: ' + recipe.servings);
  console.log('Ingredients:');
  // console.log('Ingredients: ' + recipe.ingredients.join);
  for( var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
  }
}
printoutRecipe();

//for in loop

for( key in recipe ) {
  console.log(key, recipe[key]);
}


// The Reading List
var book = {
  bookTitle: ['The Hobbit', 'The Lord of the Rings'],
  bookAuthor: ['J.R.R. Tolkien', 'J.R.R. Tolkien'],
  alreadyRead: [true, false]
}

function iterateBook() {
  for( var i = 0; i < book.bookTitle.length; i++) {
    if ( book.alreadyRead[i] === true ) {
      console.log('You already read "' + book.bookTitle[i] + '" by ' + book.bookAuthor[i]);
    } else {
      console.log('You still need to read "' + book.bookTitle[i] + '" by ' + book.bookAuthor[i]);
    }
  }
}

function chooseABook(bookTitles) {
  bookTitleIndex = book.bookTitle.indexOf(bookTitles);
  if ( book.alreadyRead[bookTitleIndex] === true ) {
    console.log('You already read "' + book.bookTitle[bookTitleIndex] + '" by ' + book.bookAuthor[bookTitleIndex]);
  } else {
    console.log('You still need to read "' + book.bookTitle[bookTitleIndex] + '" by ' + book.bookAuthor[bookTitleIndex]);
  }
}
iterateBook();
chooseABook('The Hobbit');

// The Reading List DT's

var books = [{ title: 'coolbeans',
                author: 'beanie',
                alreadyRead: true
               }, {
               title: 'hot to make a sandwich',
               author: 'andre',
               alreadyRead: false
             }];

for ( var i = 0; i < books.length; i++ ) {
  var book = books[i];
  var desc = book.title + ' by ' + book.author;

  if (book.alreadyRead) {
    console.log('you alread read', desc);
  } else {
    console.log('you may want to read' ,desc);
  }
}


// The Movie Database
var Puff = {
  title : 'Puff the Magic Dragon',
  duration : 30,
  stars : 'Puff, Jackie, Living Sneezes'
}

function movieDetails(movie) {
  console.log(movie.title + ' lasts for ' + movie.duration + ' minutes. Stars: ' + movie.stars +'.');
}
movieDetails(Puff);

// The Movie Database DT's
// Function Declaration
var sharknado = {
  title : 'sharknado',
  duration : 100,
  stars : ['sharks', 'the guy from 90210']
}

function movieDetails(movie) {
  var info = '';
  info += movie.title;
  info += ' lasts for ' + movie.duration + ' minutes.';
  info += ' stars: ' + movie.stars.join(', ');
  console.log(info);
}
movieDetails(sharknado);

// Function Expression
var filmInfo = function(movie) {
  var info = '';
  info += movie.title;
  info += ' lasts for ' + movie.duration + ' minutes.';
  info += ' stars: ' + movie.stars.join(', ');
  console.log(info);
}