"use strict";

const runOnce = function () {
    console.log("This will run only once");
};

runOnce();

// It need to be wrapped into paranthesis. This tells js that it is an expression.
// To call immidiately add () at the end.
// Immidiately Invoked Function Expression
(function () {
    console.log("This will run only once");
})();

(() => console.log("This will run only once"))();

// Why was this invented?
// To create a scope

{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
