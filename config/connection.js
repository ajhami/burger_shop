///////////////////////
//// CONNECTION.JS ////
///////////////////////

// Importing mysql node package
var mysql = require("mysql");
var connection;

// Used to create connection to database
if(process.env.JAWSDB_MAROON_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_MAROON_URL);
}
else {
	var connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "root",
		database: "burgers_db"
	});
};


// Initialize node connection
connection.connect(function(err) {
	if(err) {
		console.error("Connection failure. " + err.stack);
		return;
	}
	console.log("mySQL connection, ID: " + connection.threadId);
});

// Exporting connection for application use
module.exports = connection;
