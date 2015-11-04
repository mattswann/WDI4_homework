$('.todos').on('click', 'li', function() {
  var $newListItem = $('<li>').html(this.innerHTML).addClass('done');
  $('#completed-list').append($newListItem);
  $(event.target).remove();
});

$('#completed-list').on('click', 'li', function() {
  var $newListItem = $('<li>').html(this.innerHTML).removeClass('done');
  $('.todos').append($newListItem);
  $(event.target).remove();
});

var addTodo = function() {
  // search for input box and get the value
  var value = $(newToDoInput).val();

  // create new dom element li with the value
  var $newListItem = $('<li>').html(value); // putting <li> the content </li> together
  $('.todos').append($newListItem); // attach back to page inside newListItem li
};

// Search for button
var $addTodoBtn = $('#add-todo-btn');
// search for input box
var $newToDoInput = $('#new-todo-input');

// tell button to listen to click
// when clicked call function addTodo
$addTodoBtn.on('click', addTodo);