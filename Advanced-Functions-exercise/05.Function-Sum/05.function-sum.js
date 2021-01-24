function add(a) {
    
    function sum(b) {
        a += b;
        return sum;
    }

    sum.toString = () => a;
    
    return sum;
}

add(2)(4)(1);