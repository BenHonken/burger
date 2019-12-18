$(document).ready(function() {
    // Getting a reference to the input field where user adds a new burger
    var $newItemInput = $("#newBurger");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.devour", updateBurger);
    $(document).on("click", "#submit", insertBurger);
    // This function updates a burger in our database
    function updateBurger() {
        var id = $(this).attr("id");
      $.ajax({
        method: "PUT",
        url: "/api/burger",
        data: {id: id}
      }).then(setTimeout(function(){window.location.reload();},300));
    }
  
    // This function inserts a new burger into our database and then updates the view
    function insertBurger(event) {
      event.preventDefault();
      var burger = {
        burger_name: $newItemInput.val().trim(),
        devoured: false
      };
  
      $.post("/api/new", burger).then(setTimeout(function(){window.location.reload();},300));
      $newItemInput.val("");
    }
  });  