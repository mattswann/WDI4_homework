// var listItems = document.getElementsByClassName('todos')[0].getElementsByTagName('li');

// _.each(listItems, function(item) {
//   item.addEventListener('click', function() {
//     // console.log('todo clicked');
//     // console.log(item);
//     event.target.className = "done";
//   });
// });

$('.todos').on('click', 'li', function() {
  $(this).toggleClass('done');
  var $newListItem = $('<li>').html(this.innerHTML);
  $('#completed-list').append($newListItem);
  $(event.target).remove();
});




var addTodo = function() {
  debugger
  // search for input box and get the value
  var value = newToDoInput.value;

  // create new com element li with the value
  var newListItem = document.createElement('li'); // <li> </li>
  var contentNode = document.createTextNode(value); // the content are created
  newListItem.appendChild(contentNode); // <li> the content </li>

  // 

  // attach back to page inside li
  todosUL.appendChild(newListItem);
};

// define the todo UL
var todosUL = document.getElementsByClassName('todos')[0];
var completedUL = document.getElementsByClassName('todos')[1];
// tell the parent to listen instead

/////////////////////////////////////
// Technique 1 - Pure JavaScript
// todosUL.addEventListener('click', function () {
//   if ( event.target.tagName === 'LI' ) {
//     event.target.className = "done";
//     completedUL.appendChild(event.target);
//   }
// });
// completedUL.addEventListener('click', function () {
//   if ( event.target.tagName === 'LI' ) {
//     event.target.className = "undone";
//     todosUL.appendChild(event.target);
//   }
// });
/////////////////////////////////////

// tell the parent to listen instead
// this works beacuse event delegation
// todosUL.addEventListener('click', function() {
//   if ( event.target.tagName === 'LI' ) {
//     // create new dom element li with the value
//     var newListItem = document.createElement('li'); // <li> </li>
//     var contentNode = document.createTextNode(value); // the content are created
    
//     newListItem.className = 'done';
//     newListItem.appendChild(contentNode); // <li> the content </li>

//     document.getElementById('completed-list')

//   }
// });


// Search for button
var addTodoBtn = document.getElementById('add-todo-btn');
// search for input box
var newToDoInput = document.getElementById('new-todo-input');

// tell button to listen to click
// when clicked call function addTodo
addTodoBtn.addEventListener('click', addTodo);