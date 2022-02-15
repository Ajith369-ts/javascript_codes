"use strict";

const orderSet = new Set(["pasta", "pizza", "pizza", "pasta", "risotto"]);

console.log(orderSet.size);
console.log(orderSet.has("pizza"));
orderSet.add("bread");
orderSet.delete("risotto");
console.log(orderSet);

for (const order of orderSet) console.log(order);

console.log(new Set("ajith"));

// example
const staff = ["waiter", "chef", "chef", "manager", "chef", "waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
