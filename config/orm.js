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
        var queryString = "UPDATE ?? SET ? = ? WHERE ? = ?";

        connection.query(queryString, [tableName, property1, value1, property2, value2], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },


    insertOne: function(tableName, col1, col2, col3, val1, val2, val3, cb) {

        var queryString = "INSERT INTO ?? (?,?,?) VALUES (?,?,?)";
        connection.query(queryString, [tableName, col1, col2, col3, val1, val2, val3], function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },
};

module.exports = orm;
