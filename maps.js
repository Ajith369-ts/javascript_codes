"use strict";

// The main difference betweem object ans map is that in maps the key can be of any type.

const rest = new Map();
rest.set("name", "classico Italiano");
rest.set(1, "firenze, italy");
console.log(rest.set(2, "lisbon, portugal"));

rest.set("categories", ["Italian", "pizzeria"])
    .set("open", 11)
    .set("close", 23);

// Reading values
console.log(rest.get("name"));
console.log(rest.get(1));

// rest.set([1, 2], "test");
// console.log(rest.get([1, 2]));

const arr = [1, 2];

rest.set(arr, "test");
console.log(rest.get(arr));

const question = new Map([
    ["question", "what is the best programming language in the world?"],
    [1, "c"],
    [2, "java"],
    ["correct", 2],
    [true, "correct"],
    [false, "Try again!"],
]);

console.log(question);

console.log(question.get("question"));
for (const [key, value] of question) {
    if (typeof key == "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));
