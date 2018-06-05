"use strict";
function CartService($http) {
  // Create a CartService in Angular. Give it a getAllItems() method that uses $http to
  //make a GET request to your /cart-items API.
  const getAllItems = () => {
    return $http({
      method: "GET",
      url: "/portal/cart-items"
    });
  };

  return {
    getAllItems
  };
}

angular
  .module("FSApp")
  .factory("CartService", CartService);