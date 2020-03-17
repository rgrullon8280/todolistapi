$(document).ready(function() {
  $.getJSON("/api/todo").then(addTodos);

  $("#todoInput").keypress(function(event) {
    if (event.which == 13) {
      createTodo();
    }
  });
  $(".list").on("click", "li", function (){
    updateTodo($(this))
  })
  $(".list").on("click", "span", function(e) {
    e.stopPropagation();
    removeTodo($(this).parent());
  });
});

function addTodos(todos) {
  todos.forEach(function(todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  var item = $("<li class='task'>" + todo.name + "<span>X</span></li>");
  item.data("id", todo._id);
  item.data("completed", todo.completed)
  if (todo.completed) {
    item.addClass("done");
  }
  $(".list").append(item);
}

function createTodo() {
  var usrInput = $("#todoInput").val();
  $.post("/api/todo", { name: usrInput })
    .then(newTodo => {
      addTodo(newTodo);
      $("#todoInput").val("");
    })
    .catch(err => console.log(err));
}

function removeTodo(item) {
  var itemId = item.data("id");
  var deleteUrl = "/api/todo/" + itemId;
  $.ajax({
    method: "DELETE",
    url: deleteUrl
  }).then(function() {
    item.remove();
  });
}

function updateTodo(item){
    var itemId = item.data("id")
    var isDone = !item.data("completed")
    var updateUrl = '/api/todo/' + itemId
    var updateData = {completed: isDone}
    $.ajax({
        method: "PUT",
        url: updateUrl,
        data: updateData
    })
    .then(function(updatedTodo){
        item.toggleClass("done")
        item.data("completed", isDone)
    })
}
