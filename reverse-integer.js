/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let positive = true;
    if (x < 0) {
        positive = false;
        x = x * -1;
    }

    // pop
    function pop () {
        const lastDigit = x % 10;
        x = Math.floor(x / 10);
        return lastDigit;
    }

    // push 
    function push(number) {
        result = result * 10 + number;
    }

    while (x !== 0) {
        const lastDigit = pop();
        // overflow
        if (result > (Math.pow(2, 31) / 10)) return 0;
        push(lastDigit);
    }

    if (!positive) result = -1 * result;

    return result;
};

console.log(123, reverse(123));
console.log(-123, reverse(-123));

