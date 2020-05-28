///////////////////
//// SERVER.JS ////
///////////////////


// Setting up express server

var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
// app.use(express.static("views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

// server listener
app.listen(PORT, function() {
	console.log("burger_shop listening at localhost: " + PORT);
});
