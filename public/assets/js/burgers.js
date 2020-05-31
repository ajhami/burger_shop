//////////////////
/// BURGERS.JS ///
//////////////////


// Initializing all front-end functions upon startup
$(function(){

    // Event listener for new burger submissions
    $(".order_form").on("submit", function(event) {
        event.preventDefault();

        // New burger object
        var newBurgerName = {
            burger_name: $("#newBurger").val().trim()
        };

        // Ajax call to add new burger submitted from front end
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurgerName
        }).then(function() {
            location.reload();
        })
    });


    // Function used on selection to devour or remake a burger
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

    // Event Listeners to change burger's devoured status
    $(".remake_burger").on("click", changeDevouredStatus);
    $(".devour_burger").on("click", changeDevouredStatus);


    // Event listener to delete a specific burger
    $(".delete_burger").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            location.reload();
        })
    });

});