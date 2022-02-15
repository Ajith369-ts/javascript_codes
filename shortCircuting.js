console.log(3 || "ajith");
console.log("" || "ajith");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "hi" || 23);

console.log("___AND___");

console.log(3 && "ajith");
console.log("" && "ajith");
console.log(true && 0);
console.log(undefined && null);

console.log("___Nullish__");
// Nullish - NULL, Undefined
console.log(0 ?? "hello"); // Nullish value not falsy value

let x = 5;
x ||= 10;

let y = 0;
y ??= 10;
console.log(x, y);
