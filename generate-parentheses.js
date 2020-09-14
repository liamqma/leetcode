/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];

    backTrack(result, '', 0, 0, max);

    return result;
};

var backTrack = function(result, currentString, numOfLeftBracketsUsed, numOfRightBracketsUsed, max) {
    if (currentString.length === (max * 2)) {
        result.push(currentString);
        return;
    }

    // two conditions
    // numOfLeftBracketsUsed <= max
    // numOfRightBracketsUsed <= numOfLeftBracketsUsed
    if (numOfLeftBracketsUsed < max) {
        backTrack(result, currentString + '(', numOfLeftBracketsUsed + 1, numOfRightBracketsUsed, max);
    }

    if (numOfRightBracketsUsed < numOfLeftBracketsUsed) {
        backTrack(result, currentString + ')', numOfLeftBracketsUsed, numOfRightBracketsUsed + 1, max);
    }
}