"use strict";

const whereAmI = async function (country) {
    try {
        const res = await fetch(`https://restcountries.com/v2/name/${country}`);
        // console.log(res);
        const data = await res.json();
        console.log(data[0]);
    } catch (err) {
        console.log(err);
    }
};

whereAmI("india");

// try {
//     let y = 1;
//     const x = 2;
//     x = y;
// } catch (e) {
//     console.log(e.message);
// }

// Running promises in parallel.
// It accepts an array of promises and return a single promise.
// If any one fails, the promise is rejected.
// const data = await Promise.all([]);

const getJSON = async function (url) {
    const res = await fetch(url);
    const data = await res.json();

    return data;
};

// Promise.race
// It accepts array of promises
// gives the result of 1st resolved promise

(async () => {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/india`),
        getJSON(`https://restcountries.com/v2/name/usa`),
        getJSON(`https://restcountries.com/v2/name/italy`),
    ]);
    console.log(res[0]);
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error("Request took too long"));
        }, sec * 1000);
    });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/india`), timeout(1)])
    .then((res) => {
        console.log(res[0]);
    })
    .catch((err) => {
        console.log(err);
    });

// promise.allSettled
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Error"),
    Promise.resolve("Another Success"),
]).then((res) => console.log(res));

// Promise.all([
//     Promise.resolve("Success"),
//     Promise.reject("Error"),
//     Promise.resolve("Another Success"),
// ])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// promise.any
Promise.any([
    Promise.resolve("Success"),
    Promise.resolve("Error"),
    Promise.resolve("Another Success"),
])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
