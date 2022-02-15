"use strict";

const x = ["Hi", "ajith", "how", "you", "doin?"];

// Able to use break and continue
for (const i of x) {
    console.log(i);
}

for (const j of x.entries()) {
    console.log(j[0], j[1]);
}

for (const [i, j] of x.entries()) {
    console.log(i, j);
}

// console.log([...x.entries()]);
