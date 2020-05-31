///////////////////////////
// BURGERS_CONTROLLER.JS //
///////////////////////////


var express = require("express");
var router = express.Router();
var burger = require("./../models/burger");


// Root route, uploading the main html
router.get("/", function(req, res) {
    // Use ORM to grab all stored data from mySQL DB
    burger.selectAll(function(data) {
        var allBurgers = {
            burgers: data
        };
        // Using object from mySQL data to render onto handlebars
        res.render("index", allBurgers);
    })
});


// Post route when users submits a new burger
router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json({ id: result.id });
    });
});


// Put route for making changes to burger's eaten state
router.put("/api/burgers/:id", function(req, res) {

    var idMatched = req.params.id;
    var isDevoured = "";

    console.log("Devoured = ", req.body.devoured);
    if(req.body.devoured == false) {
        isDevoured = true;
    }
    else {
        isDevoured = false;
    }

    burger.updateOne(isDevoured, idMatched, function(result) {
        // If no row was found, resulting in no actual change to db
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// Delete route for destroying select burgers
router.delete("/api/burgers/:id", function(req, res) {
    var idMatched = req.params.id;

    burger.deleteOne(idMatched, function(result) {
        if(result.affectedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});



module.exports = router;