"use strict";

const ajith = {
    fname: "ajith",
    lname: "kumar",
    age: 20,
    family: ["hello", "hi", "hey"],
};

const hello = Object.assign({}, ajith); // Inner object cannot be cloned (Not deep cloned)

hello.fname = "hello";
hello.family.push("hlo"); // Both objects get this

console.log(ajith);
console.log(hello);
