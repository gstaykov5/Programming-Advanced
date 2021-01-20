function area() {
    return this.x * this.y;
}

function vol() {
    return this.x * this.y * this.z;
}

function solve(area, vol, inputJSON) {
    const objectArray = JSON.parse(inputJSON);
    return objectArray.map(obj => {
        const a = Math.abs(area.call(obj));
        const b = Math.abs(vol.call(obj));
        return { area: a, volume: b};
    });
}

const jsonString = "[ {\"x\":10,\"y\":-22,\"z\":10}, {\"x\":47,\"y\":7,\"z\":-5} ]"
solve(area, vol, jsonString);
