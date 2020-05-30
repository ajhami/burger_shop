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


    })









});