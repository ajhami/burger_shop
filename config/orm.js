//////////////////
///// ORM.JS /////
//////////////////

var connection = require("./connection");

// function objToSql(obj) {
//     var arr = [];

//     for(var key in obj) {
//         var val = obj[key];

//         if(Object.hasOwnProperty.call(obj, key)) {

//             if(typeof val === "string" && val.indexOf(" ") >= 0) {
//                 val = "'" + val + "'";
//             }

//             arr.push(key + "=" + val);
//         }
//     }

//     return arr.toString();
// }



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

        console.log("post queryCommand =", queryCommand);
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

        // var queryCommand = UPDATE burgers SET devoured = true WHERE id = 6;
        var queryCommand = "UPDATE " + tableName + " SET " + colName + " = " + colVal + " WHERE id = " + idMatch;
        console.log(queryCommand);

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

        console.log(queryCommand);

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