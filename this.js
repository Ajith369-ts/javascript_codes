"use strict";

console.log(this);

const calcAge = function (birthyear) {
    console.log(2022 - birthyear);
    console.log(this); // undefined in strict mode. In normal it would be global window obj
};

calcAge(2001);

const calcYear = (birthyear) => {
    console.log(2022 - birthyear);
    console.log(this); // Window. By lexical this it will get the parent this in this case it is window.
};

calcYear(2001);

const ajith = {
    year: 2001,
    calcAge: function () {
        console.log(this);
        console.log(2022 - this.year);
    },
};

ajith.calcAge();

const hello = {
    year: 2004,
};

hello.calcAge = ajith.calcAge;

hello.calcAge();

const f = ajith.calcAge;
// f();

//////////////////////

var fname = "ajith"; // var creates a property of var name in window object

const hi = {
    fname: "hi",
    year: 2001,

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.fname}`); // arrow function does not get its own this keyword.
    },
};

hi.greet();
