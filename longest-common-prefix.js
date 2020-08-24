/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';

    function check(substring) {
        for(let i = 1; i < strs.length; i++) {
            if (!strs[i].startsWith(substring)) {
                return false;
            }
        }
        return true;
    }

    for(let i = 0; i < strs[0].length; i++) {
        const substring = strs[0].substring(0, i + 1);
        if (!check(substring)) {
            return strs[0].substring(0, i);
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["a", "b"]));
