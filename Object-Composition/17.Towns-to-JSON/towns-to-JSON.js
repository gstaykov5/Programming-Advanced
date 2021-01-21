function jsonTown(input) {
    input.shift();
    let townInfo = [];
    let current = {};

    input.forEach(line => {
        let arr = line.split('| ').join('').split(' |').join('').split(' ');
        let Town = '';
        let Latitude = 0;
        let Longitude = 0;

        if (arr.length > 3) {
            Town = `${arr[0]} ${arr[1]}`;
            Latitude = Number(arr[2]).toFixed(2)
            Longitude = Number(arr[3]).toFixed(2)
        } else {
            Town = arr[0];
            Latitude = Number(arr[1]).toFixed(2)
            Longitude = Number(arr[2]).toFixed(2)
        }
        
        current = {Town, Latitude, Longitude};
        townInfo.push(current);
    });
    return JSON.stringify(townInfo);
}

console.log(jsonTown(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']))