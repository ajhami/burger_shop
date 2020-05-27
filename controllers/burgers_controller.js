var express = require("express");
var router = express.Router();

var burger = require("./../models/burger");

router.get("/", function(req, res) {
    console.log("Test!");
    res.render("Hello, World!");
});




module.exports = router;