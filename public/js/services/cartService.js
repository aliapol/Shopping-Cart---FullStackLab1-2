"use strict";
function CartService($http) {
  // Create a CartService in Angular. Give it a getAllItems() method that uses $http to
  //make a GET request to your /cart-items API.
  
  
//GET
  const getAllItems = () => {
    return $http({
      method: "GET",
      url: "/portal/cart-items"
    });
  };

//ADD/POST
  const addItem = (newItem) => {
    return $http({
      method: "POST",
      url: "/portal/cart-items",
      data: newItem
    });
  };

//DELETE
  const removeItem = (id) => {
    return $http({
      method: "DELETE",
      url: "portal/cart-items/" + id
    });
  };

//UPDATE
  const updateItem = (item) => {
    return $http({
      method: "PUT",
      url: "/portal/cart-items/" + item.id,
      data: item
    });
  };

  return {
    getAllItems,
    addItem,
    removeItem,
    updateItem
  };
}

angular
  .module("FSApp")
  .factory("CartService", CartService);