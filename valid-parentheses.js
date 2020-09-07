/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const left = ['(', '{', '['];
    const right = [')', '}', ']'];
    const buff = [];

    for(let i = 0; i < s.length; i++) {
        const index = left.indexOf(s[i]);
        if (index > -1) {
            // if the letter is left parenthes, push the counterpart to an array
            buff.push(right[index]);
        } else {
            // if the letter is right parenthes
            // check buff.pop() === the letter: if yes, move on. if no, return false immediately
            if (buff.pop() !== s[i]) {
                return false;
            }
        }
    }
    
    // check if anything remaining in the buff: if yes, return false, otherwise return true
    return !buff.length;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
