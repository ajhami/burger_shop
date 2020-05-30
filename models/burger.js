///////////////////
//// BURGER.JS ////
///////////////////


var orm = require("./../config/orm");


var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(newVal, cb) {
        orm.insertOne("burgers", "burger_name", newVal, function(res){
            cb(res);
        });
    }

};












module.exports = burger;