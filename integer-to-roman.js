/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = '';
    let map = [
        {
            symbol: 'I',
            value: 1
        },
        {
            symbol: 'IV',
            value: 4
        },
        {
            symbol: 'V',
            value: 5
        },
        {
            symbol: 'IX',
            value: 9
        },
        {
            symbol: 'X',
            value: 10
        },
        {
            symbol: 'XL',
            value: 40
        },
        {
            symbol: 'L',
            value: 50
        },
        {
            symbol: 'XC',
            value: 90
        },
        {
            symbol: 'C',
            value: 100
        },
        {
            symbol: 'CD',
            value: 400
        },
        {
            symbol: 'D',
            value: 500
        },
        {
            symbol: 'CM',
            value: 900
        },
        {
            symbol: 'M',
            value: 1000
        },
    ]; 
    for (let i = map.length - 1; i >= 0; i--) {
        if (num >= map[i].value) {
            const numberOfSybol = Math.floor(num / map[i].value);
            num = num - numberOfSybol * map[i].value;
            result = result + map[i].symbol.repeat(numberOfSybol);
        }
    }
    return result;
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));


