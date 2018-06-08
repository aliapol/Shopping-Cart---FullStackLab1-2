"use strict";
const express = require("express");// Require Express
const cartRouter = express.Router();// Declare a Router object to handle the routes for our shoppingList
const pg = require("pg"); //This connects us to pg-connection-pool.js
const pool = require("../pg-connection-pool"); //I think this does too

// Four routes, one for each method

//GET
cartRouter.get("/cart-items", (req, res) => { //cart-items is just an endpoint name. has nothing to do with the name of file or array/variable
  pool.query("SELECT * FROM shoppingCart ORDER BY product ASC").then((result) => { //shoppingCart is the name of the table in my database!
      res.send(result.rows);
  })
});


//POST
cartRouter.post("/cart-items", (req, res) => { //cart-items is just an endpoint name. 
  pool.query("INSERT INTO shoppingCart(product,price,quantity) VALUES($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
    pool.query("SELECT * FROM shoppingCart ORDER BY product ASC").then((result) =>  {
      res.send(result.rows);
    });
  });
 });


//DELETE
 cartRouter.delete("/cart-items/:id", (req, res) => { //cart-items is just an endpoint name. has nothing to do with the name of file or array/variable
  pool.query("DELETE FROM shoppingCart WHERE id=$1::int", [req.params.id]).then(() => { //deleting that id
    pool.query("SELECT * FROM shoppingCart ORDER BY product ASC").then((result) => { //then getting the list again
      res.send(result.rows);
  });
});
});


//PUT (UPDATE)
 cartRouter.put("/cart-items/:id", (req, res) => { //cart is just an endpoint name. has nothing to do with the name of file or array/variable
  pool.query("UPDATE shoppingCart SET product=$1::text, price=$2::int, quantity=$3::int WHERE id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => { //updating that id
    pool.query("SELECT * FROM shoppingCart ORDER BY product ASC").then((result) => { //then getting the list again
      res.send(result.rows);
  });
});
});




module.exports = cartRouter; // Export the Router object