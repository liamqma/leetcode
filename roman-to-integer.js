/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    const map = [
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
    for (let i = 0; i < map.length; i++) {
        if (i % 2 === 1) {
            if (s.includes(map[i].symbol)) {
                result = result + map[i].value;
                s = s.replace(map[i].symbol, '');
            }
        }
    }
    for (let i = 0; i < map.length; i++) {
        if (i % 2 === 0) {
            const length = s.split(map[i].symbol).length;
            if (length > 1) {
                result = result + map[i].value * (length - 1)
            }
        }
    }
    return result;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
