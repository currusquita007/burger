// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var table = "burgers";

var burger = {

  selectAll: function(cb) {
    orm.selectAll(table, function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  insertOne: function(col1, val1, cb) {

    orm.insertOne(table, col1, val1, cb, function(res) {
      cb(res);
    });
  },

  update: function(property1, value1, property2, value2, cb) {
    orm.updateOne(table, property1, value1, property2, value2, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;