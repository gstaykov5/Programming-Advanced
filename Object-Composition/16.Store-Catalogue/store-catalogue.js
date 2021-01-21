function catalog(input) {
    input.sort();
    let storeCatalog = '';
    let letter = 'A';

    input.forEach(items => {
        const product = items.split(' : ').join(': ');

        if (letter == items.charAt(0)) {
            if (storeCatalog.length == 0) { storeCatalog += `${letter}\n` };
            storeCatalog += `  ${product}\n`;
        } else {
            letter = items.charAt(0);
            storeCatalog += `${letter}\n`;
            storeCatalog += `  ${product}\n`;
        }
    });

    return storeCatalog.trim();
}

console.log(catalog(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]))