// Importing module
// import { addToCart, totalPrice as price, qt } from "./exportModule.js";

import * as ShoppingCart from "./exportModule.js";

console.log("Importing module");

// addToCart("bread", 5);
// console.log(price, qt);

ShoppingCart.addToCart("bread", 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.qt);

import add from "./exportModule.js";

add("bread", 5);
