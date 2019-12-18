// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all burgers
  app.get("/", function(req, res) {


    db.burger.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.render("index", { burger: results });
    });

  });

  // Add a burger
  app.post("/api/new", function(req, res) {

    console.log("Burger Data:");
    console.log(req.body);

    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function(results) {
      return res.json(results);
    });

  });

  app.put("/api/burger", function(req, res) {
    let updateBurger = {
      id: req.body.id,
      devoured: true
    }


    //SEQUELIZE GOES HERE / RETURN RESULTS
    db.burger.update(updateBurger, {where:{id: req.body.id}}).then(function (result) {
      return res.json(result);
    })

  });

};