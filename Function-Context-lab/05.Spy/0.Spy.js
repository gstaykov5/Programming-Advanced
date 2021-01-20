function Spy(obj, methodName) {
    const spy = { count: 0 };
    const method = obj[methodName];
    if (!method) { throw new Error('No such method!'); }
    obj[methodName] = function (...args) {
        this.count++;
        return method.apply(obj, args);
    }.bind(spy)
    return spy;
}

const obj = {test: function(a, b, c) {return this.data}, data: 1 };
const s = Spy(obj, 'test');
obj.test(1, 2, 3)
obj.test(4)
obj.test(5)
console.log(s);