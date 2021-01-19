function car(input) {
    

    cars = input.forEach(ele => {
        let [command, ...options] = ele.split(' ');
        commands[command](...options);
        console.log(cars);

    });

}

car(['create pesho',
    'set pesho rank number1',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho address Sofia',
    'set gosho nick goshko',
    'print stamat'
])