const products = getAvailableProducts();
const productPrices = products.map(item => item.price);
const callbackFunction = function (text) {
    console.log(text);
}

sendPricesToServer(productPrices, callbackFunction);