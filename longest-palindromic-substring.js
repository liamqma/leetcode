/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = '';

    // find xyx
    for(let i = 0; i < s.length; i++) {
        let range = 1;
        let left = s[i - range];
        let right = s[i + range];
        let palindrome = s.charAt(i);
        while(left !== undefined && right !== undefined) {
            if (left === right) {
                palindrome = s.substring(i - range, i + range + 1);
                range = range + 1;
                left = s[i - range];
                right = s[i + range];
            } else {
                left = undefined; // break while loop
            }
        }
        if (result.length < palindrome.length) {
            result = palindrome;
        }
    }

    // find xyyx
    for(let i = 0; i < s.length; i++) {
        if (s[i] !== s[i+1]) {
            continue;
        }
        let range = 1;
        let left = s[i - range];
        let right = s[i + range + 1];
        let palindrome = s.substring(i, i + 2);
        while(left !== undefined && right !== undefined) {
            if (left === right) {
                palindrome = s.substring(i - range, i + range + 2);
                range = range + 1;
                left = s[i - range];
                right = s[i + range + 1];
            } else {
                left = undefined; // break while loop
            }
        }
        if (result.length < palindrome.length) {
            result = palindrome;
        }
    }

    return result;
};

console.log(longestPalindrome('ccc'), 'ccc');
console.log(longestPalindrome('bb'), 'bb');
console.log(longestPalindrome('ac'), 'a');
console.log(longestPalindrome('a'), 'a');
console.log(longestPalindrome('babad'), 'bab');
