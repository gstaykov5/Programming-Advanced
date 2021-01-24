function argInfo() {
    const info = {};
    for (const line of arguments) {
        const current = typeof line;
        console.log(`${current}: ${line}`);
        if (!info.hasOwnProperty(current)) {
            info[current] = 0;
        }
        info[current]++
    }

    let sortable = [];
    sortable = Object.keys(info).sort(function (a, b) {
        return info[b] - info[a];
    })

    sortable.forEach(elements => {
        console.log(`${elements} = ${info[elements]}`);
    });
}



argInfo(argInfo('cat', 42, 'dog', 42, 42, function () { console.log('Hello world!'); }))

// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1