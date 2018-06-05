"use strict";

angular
  .module("FSApp")
  .config(($routeProvider) => {
    $routeProvider
      .when("/cart-items", {
        template: `<shopping-list></shopping-list>`
      })
      
  });