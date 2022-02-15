"use strict";

const oneword = function (str) {
    return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
    console.log(`Transformed string ${fn(str)}`);
};

transformer("javascript is the best!", upperFirstWord);

transformer("javascript is the best!", oneword);

//////////////////
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet("Hey");
greeterHey("Ajith");

////////////////////////////////

function createQuote(quote, callback) {
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
}

function logQuote(quote) {
    console.log(quote);
}

createQuote("eat your vegetables!", logQuote); // 1

// Same as that above
createQuote("eat your vegetables!", function (quote) {
    console.log(quote);
});
