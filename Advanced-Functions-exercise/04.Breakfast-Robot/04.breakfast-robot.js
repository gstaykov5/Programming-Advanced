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