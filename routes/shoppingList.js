"use strict";
const express = require("express");// Require Express
const cartRouter = express.Router();// Declare a Router object to handle the routes for our shopping list

const shoppingList = [
  {
    "name": "Cleaning Supplies",
    "price": 15,
    "quantity": 1,
    "id": 0
  },
  {
    "name": "Coffee",
    "price": 15,
    "quantity": 1,
    "id": 1
  },
  {
    "name": "Beets",
    "price": 15,
    "quantity": 2,
    "id": 2
  },
  {
    "name": "Cheese",
    "price": 3,
    "quantity": 4,
    "id": 3
  }
];

let idCount = 4; //declare a variable so we can incriment ids

// Four routes, one for each method
cartRouter.get("/cart-items", (req, res) => { //cart is just an endpoint name. has nothing to do with the name of file or array/variable
  res.send(shoppingList); //references the array"
});

cartRouter.post("/cart-items", (req, res) => { //cart-items is just an endpoint name. 
  
  shoppingList.push({
    name: req.body.name,
    price: req.body.price,
    quanity: req.body.quantity,
    id: idCount++
  });
  console.log(req.body);
  res.send(shoppingList); //this "shoppingList" references the array
});

cartRouter.delete("/cart-items/:id", (req, res) => { //cart-items is just an endpoint name. has nothing to do with the name of file or array/variable
    
    for (let item of shoppingList) {
    if (item.id == req.params.id) {
      shoppingList.splice(shoppingList.indexOf(item), 1);
      console.log(req.params.id);
    }
  }
  res.send(shoppingList); //references the array"
});

cartRouter.put("/cart-items/:id", (req, res) => { //cart is just an endpoint name. has nothing to do with the name of file or array/variable
    
    for (let item of shoppingList) {
    if (item.id == req.params.id) {
      shoppingList.splice(shoppingList.indexOf(item), 1, {
        name: req.body.name,
        price: req.body.price,
        quanity: req.body.quantity,
        id: item.id
      });
      console.log(req.body);
      console.log(req.params.id);
    }
  }
  res.send(shoppingList); //references the array"
});




module.exports = cartRouter; // Export the Router object