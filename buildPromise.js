const lotteryPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve("you win");
        } else {
            reject(new Error("you lose"));
        }
    }, 2000);
});

lotteryPromise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// Its liks fetch fuction
// As it is just function returning a promise
const wait = function (seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(2)
    .then(() => {
        console.log("I waited for 2 seconds");

        return wait(1);
    })
    .then(() => {
        console.log("I waited for 1 seconds");
    });

// This one will resolve immediately
Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("hello")).then((x) => console.log(x));
