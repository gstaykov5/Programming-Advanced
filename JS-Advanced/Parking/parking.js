class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicle = {};
    }

    addCar(carModel, number) {
        if (this.capacity > 0) {
            this.capacity--
            this.vehicle[number] = {
                carModel,
                paymend: false
            }
            return `The ${carModel}, with a registration number ${number}, parked.`;
        } else {
            throw new Error('Not enough parking space.');
        }

    }

    removeCar(carNumber) {
        let searchingCar = '';

        for (const [key, value] of Object.entries(this.vehicle)) {
            searchingCar = key;

            if (carNumber === searchingCar) {
                if (value.paymend === false) {
                    throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
                } else {
                    delete this.vehicle[searchingCar]
                    return `${carNumber} left the parking lot.`;
                }
            }
        }

        if (searchingCar == '') {
            throw new Error("The car, you're looking for, is not found.");
        }
    }

    pay(carNumber) {
        let searchingCar = '';

        for (const [key, value] of Object.entries(this.vehicle)) {
            searchingCar = key;

            if (carNumber === searchingCar) {
                if (value.paymend === false) {
                    value.paymend = true;
                    return `${carNumber}'s driver successfully payed for his stay.`;
                } else {
                    throw new Error(`${carNumber}'s driver has already payed his ticket.`);
                }
            }
        }

        if (searchingCar == '') {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
    }

    getStatistics(carNumber) {
        if (carNumber === undefined) {
            let sortByModel = [];
            let message = `The Parking Lot has ${this.capacity} empty spots left.\n`;

            for (const [key, value] of Object.entries(this.vehicle)) {
                const model = value.carModel;
                sortByModel.push(model);
            }

            sortByModel.sort();
            for (let i = 0; i < sortByModel.length; i++) {
                const car = sortByModel[i];

                for (const [key, value] of Object.entries(this.vehicle)) {
                    const model = value.carModel;
                    const pay = value.paymend;

                    if (car === model) {
                        message += `${model} == ${key} - ${pay === true ? 'Has payed' : 'Not payed'}\n`
                    }
                }
            }

            return message.trim();
            
        } else if (carNumber !== undefined) {
            const vehicle = this.vehicle[carNumber];
            const model = vehicle.carModel;
            const pay = vehicle.paymend;
            return `${model} == ${carNumber} - ${pay === true ? 'Has payed' : 'Not payed'}`
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Ferrari t600", "BE8712IO"));
console.log(parking.addCar("Fiat t600", "GH7712PO"));
console.log(parking.addCar("Aston Martin t600", "HJ0034LL"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

// The Volvo t600, with a registration number TX3691CA, parked.
// The Parking Lot has 11 empty spots left.
// Volvo t600 == TX3691CA - Not payed
// TX3691CA's driver successfully payed for his stay.
// TX3691CA left the parking lot.