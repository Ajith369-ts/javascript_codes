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

lufthansa.book(252, "ajith");

const eurowings = {
    name: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(252, "ajith");

// In call method the 1st arg is that what to point by this keyword
book.call(eurowings, 264, "hello");

// Apply method
// same as call() only diff is that it get 1 arg after this can be an array
book.apply(eurowings, [234, "hii"]);

book.call(eurowings, ...[232, "hey"]);
