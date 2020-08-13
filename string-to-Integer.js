/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INTMAX = Math.pow(2, 31) - 1;
    const INTMIN = Math.pow(2, 31);

    let positive = true;
    let result = 0;
    str = str.trim();
    if (str.charAt(0) === '-') {
        positive = false;
        str = str.substring(1);
    } else if(str.charAt(0) === '+') {
        str = str.substring(1);
    }

    for (const letter of str) {
        if (/[0-9]/.test(letter)) {
            if (positive) {
                if (result >= ((INTMAX - parseInt(letter)) / 10)) {
                    result = -1;
                    break;
                }
            } else {
                if (result >= ((INTMIN - parseInt(letter)) / 10)) {
                    result = -1;
                    break;
                }
            }
            
            result = result * 10 + parseInt(letter);
        } else {
            break;
        }
    }
    if (result === -1) {
        if (positive) return INTMAX;
        else return -1 * Math.pow(2, 31);
    }

    if (!positive) {
        result = result * -1;
    }

    return result;
};

// console.log("42", myAtoi("42"));
// console.log("4193 with words", myAtoi("4193 with words"));
// console.log("words and 987", myAtoi("words and 987"));
// console.log("-91283472332", myAtoi("-91283472332"));
console.log("2147483648", myAtoi("2147483648"));
console.log("2147483646", myAtoi("2147483646"));
console.log("-2147483647", myAtoi("-2147483647"));



