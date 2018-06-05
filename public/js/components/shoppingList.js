"use strict";
const shoppingList = {
  // Create a template to display all the students from this class
  template: `
  <section class="list" ng-repeat="item in $ctrl.shoppingList">
  <h2 class="delete">X</h2>
  <section class="cart">
  <h1 class="itemname">Item: {{item.name}}</h1>
  <p>Cost: $ {{item.price}}</p>
  <p>Quantity: {{item.quantity}}</p>
  </section>
  
  </section>
  

 
  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    // Call the CartService to retrieve the list of items in the cart
    CartService.getAllItems().then((response) => {
      
      //console.log(response); //we weren't getting anything back so we logged this and determined we needed to add the .data property below
      vm.shoppingList = response.data; //response is an object, data is a property of that object
    });
    
  }]
};

angular
  .module("FSApp")
  .component("shoppingList", shoppingList);