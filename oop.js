"use strict";

const Person = function (fname, byear) {
    this.fname = fname;
    this.byear = byear;

    // Not Good practice. Don't do this
    // this.calcAge = function () {
    //     console.log(2022 - this.byear);
    // };
};

const ajith = new Person("Ajith", 2001);
console.log(ajith);

console.log(ajith instanceof Person);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. Functio automatically return {}

// Prototypes
// Each and every functions have he property called prototype
// It includes constructor function

// All objects created by the constructor gets the access to all prototype property.
Person.prototype.calcAge = function () {
    console.log(2022 - this.byear);
};

// Static method
// Not in prototype
Person.hey = function () {
    console.log("Hey there");
};

Person.hey();

// Now the object created by Person constructor function get access to the calcAge function

ajith.calcAge();

console.log(ajith.__proto__);
// new keyword 3'rd point creates this __proto__ and set to the prototype
console.log(ajith.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(ajith));

// .protoTypeOfLinkedObjects
console.log(ajith.__proto__.__proto__);

console.log(ajith.__proto__.__proto__.__proto__);

console.log(Person.prototype.__proto__.__proto__);

console.dir(Person.prototype.constructor);

/////////////////////////////////
// Array
const arr = [3, 6, 7, 3, 56, 322, 25]; // new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

// Not a good idea
Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector;

//////////////////////
// ES6 classes
// Modern syntax

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
    constructor(fname, byear) {
        this.fname = fname;
        this.byear = byear;
    }

    // Automatically added to the .prototype property
    calcAge() {
        console.log(2022 - this.byear);
    }

    greet() {
        console.log(`Hey, ${this.fname}`);
    }

    get age() {
        return 2022 - this.byear;
    }

    static hey() {
        console.log("Hey there");
    }
}

const stark = new PersonCl("stark", 2001);

console.log(stark);
stark.calcAge();
stark.greet();

console.log(stark.age);

// This also works fine
// PersonCl.prototype.greet = function {}

// 1. classes are NOT hoisted
// 2. class are first-class citizens
// 3. classes are executed in strict mode

// getters and setters

const account = {
    owner: "ajith",
    movements: [233, 5554, 323, 234, 34],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};
// Need to access like property but with calculations

console.log(account.latest);

account.latest = 50;

console.log(account.movements);

PersonCl.hey();

///////////////////////////////
// Object.create()

const PersonProto = {
    calcAge() {
        console.log(2022 - this.byear);
    },

    init(fname, byear) {
        this.fname = fname;
        this.byear = byear;
    },
};

const tony = Object.create(PersonProto);

tony.init("tony", 2001);

console.log(tony);
tony.calcAge();
