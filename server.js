"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Tell our application to use this modules from the routes folder
const shoppingList = require("./routes/shoppingList"); //"cart-items" refers to routing object from shoppinglist.js, not the array

app.use(bodyParser.json()); //TODO: KNOW WHAT THIS IS DOING FOR ASSESMENT(see documentation)
app.use("/portal", shoppingList);// TODO: KNOW FOR ASSESMENT Tell our application to use our routes. First paramater is a prefix to the URI. Second parameter is actual variable that contains our routing information **KNOW THIS FOR ASSESMENT
app.use(express.static(__dirname + "/public"));//TODO: Creating public folder?


let port = 3000;
app.listen(port, () => { 
    console.log(`Server listening on ${port}`);
});