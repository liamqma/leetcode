/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var i = s.length + 1;
    var j = p.length + 1;

    var table = [];

    for (var index1 = 0; index1 < i; index1++) {
        for (var index2 = 0; index2 < j; index2++) {
            if (!Array.isArray(table[index1])) {
                table.push([]);
            }
            if (!Array.isArray(table[index1][index2])) {
                table[index1].push([]);
            }
            table[index1][index2] = false;
        }
    }

    table[0][0] = true;

    for(var index = 1; index < j; index ++) {
        if (p[index - 1] === '*') {
            table[0][index] = table[0][index - 2];
        }
    }

    for (var index1 = 1; index1 < i; index1++) {
        for (var index2 = 1; index2 < j; index2++) {
            if (s[index1 - 1] === p[index2 - 1] || p[index2 - 1] === '.') {
                table[index1][index2] = table[index1 - 1][index2 - 1];
            } else if (p[index2 - 1] === '*') {
                table[index1][index2] = table[index1][index2 - 2]
                if (s[index1 - 1] === p[index2 - 2] || p[index2 - 2] === '.') {
                    table[index1][index2] = table[index1][index2] || table[index1-1][index2];
                }
            } else {
                table[index1][index2] = false;
            }
        }
    }

    return table[i-1][j-1];
};

// console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', 'a*'));
console.log(isMatch('ab', '.*'));
console.log(isMatch('aab', 'c*a*b'));
console.log(isMatch('mississippi', 'mis*is*p*.'));