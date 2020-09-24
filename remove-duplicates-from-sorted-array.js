/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let removedCount = 0;
    const length = nums.length;
    for (let i = 1; i < length; i++) {
        const index = i - removedCount;
        const previous = nums[index - 1];
        const current = nums[index];
        if (previous === current) {
            nums.splice(index, 1);
            removedCount++;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([1,1,2]));
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
