function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);

    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
};

function result(input) {
    // let test1 = input;
    return function (input1) {
        let separator = ",";
        let symbol = "$";
        let symbolFirst = true;
        return input(separator, symbol, symbolFirst, input1)
    }
};



let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71


// let separator = ",";
// let symbol = "$";
// let symbolFirst = true;

// separator: ","
// symbol: "$"
// symbolFirst: true