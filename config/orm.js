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
    },

    insertOne: function(tableName, colVal, newVal, cb) {
        var queryCommand = "INSERT INTO " + tableName + " (" + colVal + ") VALUES (\"" + newVal + "\");";

        connection.query(queryCommand, function(err, res) {
            if(err) {
                throw err;
            }
            else {
                cb(res);
            }
        });
    },

    updateOne: function(tableName, colName, colVal, idMatch, cb) {
        var queryCommand = "UPDATE " + tableName + " SET " + colName + " = " + colVal + " WHERE id = " + idMatch;

        connection.query(queryCommand, function(err, res) {
            if(err) {
                throw err;
            }
            else {
                cb(res);
            }
        });
    },

    deleteOne: function(tableName, idMatch, cb) {
        var queryCommand = "DELETE FROM " + tableName + " WHERE id = " + idMatch;

        connection.query(queryCommand, function(err, res) {
            if(err) {
                throw err;
            }
            else {
                cb(res);
            }
        });
    }
    
};


module.exports = orm;