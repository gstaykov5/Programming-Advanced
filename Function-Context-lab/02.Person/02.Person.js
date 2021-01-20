class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(newFullName) {
        const newNames = newFullName.split(' ');
        if (newNames.length != 2) { return; };
        this.firstName = newNames[0];
        this.lastName = newNames[1];
    }
}

let p = new Person("Albert", "Simpson");
console.log(p.fullName);//Albert Simpson
p.firstName = "Simon";
console.log(p.fullName);//Simon Simpson
p.fullName = "Peter";
console.log(p.firstName) // Simon
console.log(p.lastName) // Simpson

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla

