function solution(input) {
    let num = Number(input);
    return function add5(input) {
        let num2 = Number(input)
        return num + num2;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
