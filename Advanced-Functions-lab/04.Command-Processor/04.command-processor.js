function solution() {
    let manipulatedInput = '';

    function append(string) {
        manipulatedInput += string;
        return manipulatedInput;
    }

    function removeStart(n) {
        return manipulatedInput = manipulatedInput.slice(n);
    }

    function removeEnd(n) {
        const index = manipulatedInput.length - n
        manipulatedInput = manipulatedInput.substring(0, index);
        return manipulatedInput;
    }

    function print() {
        console.log(manipulatedInput);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();