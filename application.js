$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $(".add").on("click", function() {
      var item = $(".todo").val()
      var $todoItem = buildTodo(item)
      $(".todo_list").append($todoItem)
    })
    $(".todo_list").on("click", ".complete", function(e) {
      $(this).closest(".todo").addClass("complete")
      e.preventDefault()
    })
    $(".todo_list").on("click", ".delete", function() {
      $(this).closest(".todo").remove()
    })

  }

  //Create functions to add, remove and complete todos

  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }



  bindEvents();
});

// Add an element
// Add on Click to Complete Class
// On Click a strike through
// Add an
//