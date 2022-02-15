console.log("Test start");

setTimeout(() => console.log("0 sec timer", 0));

Promise.resolve("Resolved promise 1").then((res) => {
    console.log(res);
});

Promise.resolve("Resolved promise 2").then((res) => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log(res);
});

console.log("Test end");

// Test start
// Test end
// Resolved promise 1
// 0 sec timer

// Guess the order of console log
// Both timer and promise finish at the same time
// But promise will be in the microtask queue
// Has priority over call stack
// so promise will log it before promise

// callstack have to wait for promise to finish
