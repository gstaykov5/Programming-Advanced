function arrayMap(arr, fn) {
    return arr.reduce(function (acc, curr) {
        return acc.concat(fn(curr))
    }, [])
}
console.log(arrayMap([1, 2, 3], (x) => x + 1));