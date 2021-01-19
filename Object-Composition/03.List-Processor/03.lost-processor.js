function list(input) {
    const finalList = [];
    
    const listCommands = {
        add: text => { finalList.push(text) },
        remove: text => { finalList.forEach(x => finalList.splice(finalList.indexOf(text), 1)) },
        print: () => { console.log(finalList.join(',')); },
    }

    input.forEach(ele => {
        let [command, text] = ele.split(' ');
        return listCommands[command](text);
    });
}

list(['add hello', 'add again', 'remove hello', 'add again', 'print'])

// return finalList.splice(finalList.indexOf(text), 1)