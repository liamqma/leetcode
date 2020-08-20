/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    function getMaxArea () {
        return Math.min(height[i], height[j]) * (j - i);
    }
    let maxArea = 0;
    while (i < j) {
        maxArea = Math.max(maxArea, getMaxArea());
        if (height[i] >= height[j]) {
            j--;
        } else {
            i++;
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));