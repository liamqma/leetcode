/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => { return a - b });
    const result = []
    for (let i = 0; i < nums.length; i++) {
        s = i + 1;
        e = nums.length - 1;
        if (i > 0 && (nums[i] === nums[i-1])) {
            continue;
        }
        while (s < e) {
            if (s > (i + 1) && nums[s] === nums[s-1]) {
                s++;
                continue;
            }
            if((nums[i] + nums[s] + nums[e]) > 0) {
                e--;
            } else if((nums[i] + nums[s] + nums[e]) < 0) {
                s++;
            } else {
                result.push([nums[i], nums[s], nums[e]]);
                s++;
                e--;
            }
        }
    }
    return result;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-1,0,1,2,-1,-4]));

