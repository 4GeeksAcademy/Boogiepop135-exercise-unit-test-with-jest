const oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07,  
    "GBP": 0.87   
};
 


const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs["USD"];
};

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs["USD"]; 
    return valueInEuro * oneEuroIs["JPY"];
};

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs["JPY"]; 
    return valueInEuro * oneEuroIs["GBP"];
};



const sum = (a, b) => {
    return a + b;
};


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };