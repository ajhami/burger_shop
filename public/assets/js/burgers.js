//////////////////
/// BURGERS.JS ///
//////////////////


console.log("burgers.js connected!");

// Wrap everything in this instant function
$(function(){

    $(".order_form").on("submit", function(event) {
        event.preventDefault();
        console.log("form submitted!");

        var newBurgerName = {
            burger_name: $("#newBurger").val().trim()
        };

        console.log("New burger = ", newBurgerName);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurgerName
        }).then(function() {
            console.log("Created new burger");
            location.reload();
        })

    });

    changeDevouredStatus = function(event) {
        var id = $(this).data("id");
        
        var isDevoured = {
            devoured: $(this).data("devoured")
        };
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(function() {
            location.reload();
        })        

    };

    $(".remake_burger").on("click", changeDevouredStatus);
    $(".devour_burger").on("click", changeDevouredStatus);


    $(".delete_burger").on("click", function(event) {
        var id = $(this).data("id");

        console.log("ID to delete = ", id);

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            location.reload();
        })
    });

});