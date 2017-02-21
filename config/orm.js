var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {


    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },


    updateOne: function(tableName, property1, value1, property2, value2, cb) {
        // var queryString = "UPDATE ?? SET ? = ? WHERE ? = ?";

        var queryString = "UPDATE " +  tableName + " SET " + property1 +" = " + value1 + " WHERE " + property2 + " = " + value2;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },


    insertOne: function(tableName, col1, val1, cb) {

        var queryString = "INSERT INTO " + tableName + " (" + col1 + ") VALUES ('" + val1 + "')";
        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },
};

module.exports = orm;
