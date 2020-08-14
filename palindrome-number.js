/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const originX = x;
    let y = 0;

    function pop () {
        const lastDigit = x % 10;
        x = Math.floor(x / 10);
        return lastDigit;
    }
    
    function push (lastDigit) {
        y = y * 10 + lastDigit;
        return y;
    }

    while(x !== 0) {
        y = push(pop());
    }

    return y === originX;
};

console.log(121, isPalindrome(121));
console.log(-121, isPalindrome(-121));
console.log(10, isPalindrome(10));