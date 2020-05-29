//////////////////
///// ORM.JS /////
//////////////////

var connection = require("./connection");

var orm = {
    selectAll: function(tableName, cb) {
        var queryCommand = "SELECT * FROM " + tableName + ";";
        connection.query(queryCommand, function(err, res){
            if(err) {
                throw err;
            }
            else {
                cb(res);
            }
        });
    }


    

};


// var insertOne = function() {
//     return;
// };

// var updateOne = function() {
//     return;
// };


// module.exports = {
//     selectAll = selectAll,
//     insertOne = insertOne,
//     updateOne = updateOne
// };

module.exports = orm;