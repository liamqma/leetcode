const assert = require('assert').strict;

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if (s.length <= 1) return s.length;

    var leftWindowIndex = 0;
    var rightWindowIndex = 0;
    var previousLongestLength = 0;

    while(rightWindowIndex <= s.length) {
        var rightEdgeLetter = s[rightWindowIndex];
        var window = s.substring(leftWindowIndex, rightWindowIndex);
        var currentLongestLength = window.length;
        if(rightEdgeLetter !== undefined && window.includes(rightEdgeLetter)) {
            leftWindowIndex = leftWindowIndex + 1;
            if (currentLongestLength > previousLongestLength) {
                previousLongestLength = currentLongestLength;
            }
        } else {
            rightWindowIndex = rightWindowIndex + 1;
        }
    }
    return (previousLongestLength > currentLongestLength)? previousLongestLength : currentLongestLength;
};

assert.equal(lengthOfLongestSubstring("pwwkew"), 3);
assert.equal(lengthOfLongestSubstring("au"), 2);
assert.equal(lengthOfLongestSubstring("dvdf"), 3);
