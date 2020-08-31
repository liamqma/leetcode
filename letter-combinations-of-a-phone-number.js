/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
};

const convert = function(string, remainingLetters, result) {
    if (remainingLetters === '') {
        if (string) result.push(string);
        return;
    }
    const nextLetter = remainingLetters.substring(0, 1);
    map[nextLetter].split('').forEach(element => {
        convert(string + element, remainingLetters.substring(1), result);
    });
}

var letterCombinations = function(digits) {
    const result = [];
    digits = digits.replace('1', '');
    convert('', digits, result);
    return result;
};

console.log(letterCombinations("23"));
// console.log(letterCombinations(""));


