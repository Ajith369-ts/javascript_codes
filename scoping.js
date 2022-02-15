"use strict";

function calcAge(birthYear) {
    const age = 2022 - birthYear;

    function printAge() {
        // Here once the js reads the age it will not find this variable inside this fuction, then it moves upward in scope chain and search for var in the parent function.
        console.log(`You are ${age}, born in ${birthYear}`);

        if (age > 20) {
            // Block scope works with only const and let
            // const str1 = "Hi";
            var str2 = "Hello";
            console.log("block scope");

            function add(a, b) {
                return a + b;
            }
        }

        // console.log(str1);
        console.log(str2);

        // console.log(add(5, 5));
    }
    printAge();

    return age;
}

const firstName = "Ajith";
calcAge(2001);

// console.log(age); // function scope only accessible inside the function

// printAge(); // In global scope we have no access to the fn inside the other scope.
