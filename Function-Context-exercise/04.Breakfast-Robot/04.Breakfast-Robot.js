function breakFast(input) {
    
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            order: ['carbohydrate', 'flavour']
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            order: ['carbohydrate', 'flavour']
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            order: ['carbohydrate', 'fat', 'flavour']
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            order: ['protein', 'fat', 'flavour']
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            order: ['protein', 'carbohydrate', 'fat', 'flavour']
        }
    }
    
    const microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const operations = {
        restock,
        prepare,
        report

    }
    
    function restock(microElems, quantity) {
        microelements[microElems] += quantity;
        
        return 'Success'
    }

    function prepare(recipe, quantity) {
        const necessaryProducts = Object.assign({}, recipes[recipe]);
        necessaryProducts.order.forEach(element => necessaryProducts[element] *= quantity);

        for (const product of necessaryProducts.order) {
            if (necessaryProducts[product] > microelements[product]) {
                return `Error: not enough ${product} in stock`
            }
        }

        necessaryProducts.order.forEach(element => microelements[element] -= necessaryProducts[element]);

        return 'Success'
    }

    function report() {
        return `protein=${microelements['protein']} carbohydrate=${microelements['carbohydrate']} fat=${microelements['fat']} flavour=${microelements['flavour']}`
    }

    function manager(command) {
        const [commands, rec, qty] = command.split(' ');
        return operations[commands](rec, Number(qty));
    }

    return manager;
}

let manager = breakFast();
console.log(manager('restock protein 100'));  // Success
console.log(manager('restock carbohydrate 100'));  // Error: not enough carbohydrate in stock
console.log(manager('restock fat 100'));  // Error: not enough carbohydrate in stock
console.log(manager('restock flavour 100'));  // Error: not enough carbohydrate in stock
console.log(manager('report'));  // Error: not enough carbohydrate in stock
console.log(manager('prepare eggs 2'));  // Error: not enough carbohydrate in stock
console.log(manager('report'));  // Error: not enough carbohydrate in stock
console.log(manager('prepare eggs 1'));  // Error: not enough carbohydrate in stock
console.log(manager('report'));  // Error: not enough carbohydrate in stock

    // ['restock protein 100', 'Success'],
    // ['restock carbohydrate 100', 'Success'],
    // ['restock fat 100', 'Success'],
    // ['restock flavour 100', 'Success'],
    // ['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'],
    // ['prepare eggs 2', 'Success'],
    // ['report', 'protein=90 carbohydrate=100 fat=98 flavour=98'],
    // ['prepare eggs 1', 'Success'],
    // ['report', 'protein=85 carbohydrate=100 fat=97 flavour=97']


// Unexpected error: Order report should have resulted in protein=100 carbohydrate=97 fat=100 flavour=94: 
// expected 'protein=100 carbohydrate=96 fat=100 flavour=92' 
// to equal 'protein=100 carbohydrate=97 fat=100 flavour=94'