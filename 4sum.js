/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < (nums.length - 3); i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < (nums.length - 2); j++) {
            if (j !== (i + 1) && nums[j] === nums[j - 1]) {
                continue;
            }

            let s = j + 1;
            let e = nums.length - 1;
            while (s < e) {
                const num1 = nums[i];
                const num2 = nums[j];
                const num3 = nums[s];
                const num4 = nums[e];
                const difference = num1 + num2 + num3 + num4 - target;
                if (difference === 0) {
                    result.push([num1, num2, num3, num4]);
                    s++;
                    e--;

                    while (s < e && nums[s] === nums[s-1]) {
                        s++;
                    }

                    while (s < e && nums[e] === nums[e+1]) {
                        e--;
                    }
                } else if (difference > 0) {
                    e--;
                } else {
                    s++; 
                }
            }
        }
    }
    return result;
};

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// console.log(fourSum([0, 0, 0, 0, 0, 0], 0));
// console.log(fourSum([-1,0,1,2,-1,-4], -1));
// console.log(fourSum([-3,-2,-1,0,0,1,2,3], 0));
// console.log(fourSum([-1,-5,-5,-3,2,5,0,4], -7));
console.log(fourSum([-1,0,-5,-2,-2,-4,0,1,-2], -9));

