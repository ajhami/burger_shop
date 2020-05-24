// Setting up express server

var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();




// server listener
app.listen(PORT, function() {
	console.log("burger_shop listening at localhost: " + PORT);
});
