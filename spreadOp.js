"use strict";

const arr = [2, 5, 8];
const badArr = [1, 5, arr[0], arr[1], arr[2]];
console.log(badArr);

const goodArr = [1, 2, ...arr];
console.log(goodArr);

// When ever you need a individual item in the array
console.log(...goodArr);

// copy array
const cpyArr = [...arr];

// join array
const joinArr = [...arr, ...goodArr];

////////////////
// Rest operator
const [a, b, ...c] = [1, 2, 3, 4, 5]; // it packs the rest of the items and put into the new array.
console.log(a, b, c);

// IN FUNCTION
const add = function (...numbers) {
    let sum = 0;

    for (let i = 0, n = numbers.length; i < n; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};

const x = [2, 4, 6, 8];
add(...x);
