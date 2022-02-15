"use strict";

console.log(me);
// console.log(job);
// console.log(year);

console.log(addDec(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArr(2, 3));

var me = "Ajith"; // var is hoisted but it set to undefined
let job = "Web dev"; //
const year = 2001;

function addDec(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

// Hoistes and set to undefined. In fn call you are doing this undefined(2, 3) which is not a function.
// var addExpr = function (a, b) {
//     return a + b;
// };

const addArr = (a, b) => {
    return a + b;
};

// Example

if (!newProducts) deleteShoppingCart();

var newProducts = 10;

function deleteShoppingCart() {
    console.log("All product deleted");
}
