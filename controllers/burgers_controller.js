var express = require("express");
var router = express.Router();

var burger = require("./../models/burger");

router.get("/", function(req, res) {
    console.log("Test!");
    var test = {
        t1: "test1",
        t2: "test2"
    };
    burger.selectAll(function(data) {
        console.log("Made it to callback.");
        var allBurgers = {
            burgers: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    })
    // res.render("index", test);
});

router.post("/api/burgers", function(req, res) {
    console.log("Test!");
    burger.insertOne(req.body.burger_name, function(result) {
        res.json({ id: result.id });
        // res.send("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var idMatched = req.params.id;

    console.log("Switch at id ", idMatched);
    var isDevoured = "";

    console.log("Devoured = ", req.body.devoured);
    if(req.body.devoured === false) {
        isDevoured = true;
    }
    else {
        isDevoured = false;
    }

    burger.updateOne(isDevoured, idMatched, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});




module.exports = router;