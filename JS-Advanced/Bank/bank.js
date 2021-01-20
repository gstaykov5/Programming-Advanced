class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer (customer) {
        this.allCustomers.forEach(line => {
            if (line.personalId == customer.personalId) {
                throw new Error(`${line.firstName} ${line.lastName} is already our customer!`);
            }
        })
        const message = Object.assign({},customer);
        customer.totalMoney = 0;
        customer.transactions = [];
        this.allCustomers.push(customer);
        return message;
    }

    depositMoney (personalId, amount) {
        let check = false;
        this.allCustomers.forEach(line => {
            if (line.personalId == personalId) { check = true }
        })

        if (check == true) {
            this.allCustomers.forEach(line => {
                if (line.personalId == personalId) {
                    const transaction = `${line.transactions.length + 1} ${line.firstName} ${line.lastName} made depostit of ${amount}`
                    line.totalMoney += amount;
                    line.transactions.unshift(transaction);
                    return `${line.totalMoney}$`
                }
            })
        } else {
            throw new Error(`We have no customer with this ID!`);   
        }
    }

    withdrawMoney (personalId, amount) {
        let notFound = true;

        this.allCustomers.forEach(line => {
            if (line.personalId == personalId) {
                notFound = false;
                if (amount <= line.totalMoney) {
                    const transaction = `${line.transactions.length + 1} ${line.firstName} ${line.lastName} withdraw ${amount}`
                    line.totalMoney -= amount;
                    line.transactions.unshift(transaction);
                    return `${line.totalMoney}$`;
                } else {
                    throw new Error(`${line.firstName} ${line.lastName} does not have enough money to withdraw that amount!`)
                }
            }
        })

        if (notFound == true) {
            throw new Error(`We have no customer with this ID!`);
        }
    }

    customerInfo (personalId) {
        let message = `Bank name: ${this.bankName}\n`;

        this.allCustomers.forEach(line => {
            if (line.personalId == personalId) {
                message += `Customer name: ${line.firstName} ${line.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${line.totalMoney}\n${line.transactions}`
                console.log(message);
                return message
            }
        })
    }
}

// not finishrd


let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));


