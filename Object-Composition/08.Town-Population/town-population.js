function townPopulation(input) {
    let newRegistry = {};

    input.forEach(line => {
        let [town, population] = line.split(' <-> ');
        population = Number(population)
        !newRegistry.hasOwnProperty(town) ? newRegistry[town] = population:  newRegistry[town] += population;
    });
    
    Object.keys(newRegistry).forEach(key => {
        console.log(`${key} : ${newRegistry[key]}`);
    })
}

townPopulation([
    'Sofia <-> 1200000',
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])