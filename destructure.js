"use strict";

const restaurant = {
    name: "classico italian",
    location: "via Angelo Tavanti 23",
    categories: ["Italian", "Pizzeria", "vegitarian", "Organic"],
    startMenu: ["Focaccia", "Bruchetta", "Garlic", "Bread"],
    mainMenu: ["pizza", "pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex, time, mainIndex }) {
        console.log(
            `Order received! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time}`
        );
    },
};

restaurant.orderDelivery({
    time: "23:30",
    address: "via del sole, 21",
    mainIndex: 2,
    starterIndex: 2,
});

// Optional chaining
console.log(restaurant.openingHours?.mon?.open);

// Destructuring
const arr = [3, 4, 2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Swapping
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, main1] = restaurant.order(2, 0);

console.log(starter, main1);

// Destructuring Nested array
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Object Destructuring

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], startMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // starting with {} made js think like code block
console.log(a, b);

// nested object
const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
