function lowestPrices(input) {
    let lowestPrice = [];

    input.forEach(prd => {
        let [town, product, price] = prd.split(' | ');
        price = Number(price);
        let checkItem = false;
        let counter = -1;

        lowestPrice.forEach(ele => {
            counter++;

            if (product == ele.product) {
                if (price < ele.price) {
                    lowestPrice.splice(counter, 1, {town, product, price});
                }
                checkItem = true;
            }
        })

        if (checkItem == false) {
            lowestPrice.push({town, product, price});
        }
    });

    lowestPrice.forEach(line => {
        console.log(`${line.product} -> ${line.price} (${line.town})`);
    })
}

lowestPrices(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000',
])