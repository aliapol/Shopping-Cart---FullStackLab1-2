"use strict";
const shoppingList = {
  // Template to display all the items in the cart
  template: `
  <form ng-submit="$ctrl.addItem($ctrl.newItem);">
  <input type="text" placeholder="Product" ng-model="$ctrl.newItem.product">
  <input type="text" placeholder="Price" ng-model="$ctrl.newItem.price">
  <input type="text" placeholder="Quantity" ng-model="$ctrl.newItem.quantity">
  <button>Add Item</button>
  </form>
  
  <section class="list" ng-repeat="item in $ctrl.shoppingCart">
  <section class="items">
  <a href="" class="delete" ng-click="$ctrl.removeItem(item.id)">X</a>
  <section class="cart">
  <h1 class="itemname" >Item: {{item.product}}</h1>
  <p>Price: $ {{item.price}}</p>
  <p>Quantity: <input ng-blur="$ctrl.updateItem(item);" ng-model="item.quantity"></p>
  </section>
  </section>
  </section>
  
  
  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
// Call the CartService to retrieve the list of items in the cart
//GET
    CartService.getAllItems().then((response) => {
      //console.log(response); //we weren't getting anything back so we logged this and determined we needed to add the .data property below
      vm.shoppingCart = response.data; //response is an object, data is a property of that object
    });


//ADD
    vm.addItem = (newItem) => { //pass our parameter over to our service 
      CartService.addItem(newItem).then((response) => {
        vm.shoppingCart = response.data;
      });
        vm.newItem = {}; //then clear the inputs
    };


//DELETE/REMOVE
    vm.removeItem = (id) => {
      //console.log(id);
      //console.log(typeof id);
      CartService.removeItem(id).then((response) => {
        vm.shoppingCart = response.data;
      });
    };

//UPDATE/PUT
    vm.updateItem = (item) => {
      CartService.updateItem(item).then((response) => {
        vm.shoppingCart = response.data;
      });
    };
  }]
};

angular
  .module("FSApp")
  .component("shoppingList", shoppingList);