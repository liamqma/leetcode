/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => { return a - b });
    let result;
    for(let i = 0; i < nums.length; i++) {
        let s = i + 1;
        let e = nums.length - 1;
        while (s < e) {
            const num = nums[i] + nums[s] + nums[e] - target;
            if (num === 0) {
                return nums[i] + nums[s] + nums[e];
            } 
            
            if (result === undefined || Math.pow(result - target, 2) > Math.pow(num, 2)) {
                result = nums[i] + nums[s] + nums[e];
            }
            
            if (num > 0) {
                e--;
            } else {
                s++;
            }
            
        }
    }
    return result;
};

console.log(threeSumClosest([-1,2,1,-4], 1));
console.log(threeSumClosest([1,1,-1,-1,3], 3));
console.log(threeSumClosest([1,2,5,10,11], 12));

