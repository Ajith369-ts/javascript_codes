console.log("Exporting module");

// These are only scoped to this module
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};

// Named exports

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

// default export
export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}

// Before ES6 modules
const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

console.log(ShoppingCart2);
