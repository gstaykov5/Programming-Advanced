function cityTaxes(name, population, treasury) {
    
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            const percent = Math.floor((this.population * percentage) / 100);
            this.population += percent;
        },
        applyRecession(percentage) {
            const percent = Math.floor((this.treasury * percentage) / 100);
            this.treasury -= percent;
        }
    }

    return city;
}

const result = cityTaxes('Tortuga', 7000, 15000);
result.collectTaxes();
console.log(result.treasury);
result.applyGrowth(5);
console.log(result.population);

