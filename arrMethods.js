"use strict";

// Why arrays have methods.
// Methods - simply fn we can call it in objects.
// Arrary's also objects so it has builtin methods

let arr = ["a", "b", "c", "d", "e"];

// Not mutate original array
console.log(arr.slice(2));

// Mutate original array
console.log(arr.splice(2));

console.log(arr);

console.log(arr.reverse());

////////////////////
// at method
const arr1 = [23, 11, 64];

console.log(arr1[0]);
console.log(arr1.at(0));

console.log(arr1.at(-1));

/////////////////
// foreach method

const arr2 = [4, 5, 2, 34, 332, 65, 34];

// for (const i of arr2) {
for (const [index, j] of arr2.entries()) {
    console.log(index, j);
}

// Break and continue not work in foreach loop
arr2.forEach(function (ele, index, array) {
    // The foreach method will call the call back function.
    // It will loops through the array and at each iteration it will call the callback.
    console.log(ele, index, array);
});

// Data Transformation
// map, filter, reducr
// Creates a new array

const arrMap = arr2.map(function (el) {
    return el * 2;
});

console.log(arrMap);

// arr2.map(function (el, index, arr) {
//     console.log(el, index, arr);
// });

const userName = function (user) {
    return user
        .toLowerCase()
        .split(" ")
        .map((el) => el[0])
        .join("");
};

console.log(userName("Ajith Kumar"));

// Filter

const arrFilter = arr2.filter(function (el) {
    return el < 10;
});

console.log(arrFilter);

// Reduce
const arrReduce = arr2.reduce(function (acc, cur, i, arr) {
    console.log(acc);
    return acc + cur;
}, 0);

console.log(arrReduce);

// Find
const arrFind = arr2.find(function (el) {
    return el > 70;
});
// returns the 1st it find not an array

console.log(arrFind);

const x = new Array(7);
// x.fill(1);
x.fill(1, 3);

// Array.from
const y = Array.from({ length: 7 }, function () {
    return 1;
});

console.log(y);

const z = Array.from({ length: 7 }, function (_, i) {
    return i + 1;
});

console.log(z);
