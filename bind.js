"use strict";

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],

    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({
            flight: `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
            name,
        });
    },
};

const eurowings = {
    name: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const book = lufthansa.book;

// bind method return a new fn with this keyword set to argument we pass.
const bookEW = book.bind(eurowings);
bookEW(254, "lol");

// Here the part of arg is already set
const bookEW23 = book.bind(eurowings, 23);
bookEW23("hehehe");

// With event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

document.body.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // Presetting the argument
// addVAT = value => value + value * 0.23
// Order matters here

console.log(addVAT(100));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.25);
console.log(addVAT2(500));
