// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../model/burger.js");

var table = "burgers";


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {

    console.log(data);
    res.render("index", {burgers: data});
  });
});



router.post("/", function(req, res) {
  burger.insertOne(
    "burger_name", "devoured", "date", req.body.burger_name, req.body.devoured, req.body.date, function() {
    res.redirect("/");
  });
});


router.put("/:id", function(req, res) {
// once user click on "eat burger" button, we updated the status
// of devoured from false to true
  burger.update("devoured", true, "id", req.params.id, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;


