var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    return kSum(nums, target, 0, 4);
}

var kSum = function(nums, target, start, k) {
    const result = [];

    if (start === nums.length || nums[start] * k > target || nums[nums.length - 1] * k < target) {
        return result;   
    }

    if (k === 2) {
        return twoSum(nums, target, start); 
    }

    for (let i = start; i < nums.length; i++) {
        if (i === start || nums[i] !== nums[i - 1]) {
            const complement = target - nums[i];
            const r = kSum(nums, complement, i + 1, k - 1); 
            r.forEach((item) => {
                result.push([nums[i], ...item])
            })
        }
    }

    return result;
}

var twoSum = function(nums, target, start) {
    const result = [];
    let map = {};
    for(let i = start; i < nums.length; i++) {
        map[nums[i]] = i;
    }

    for(let i = start; i < nums.length; i++) {
        if (result.length === 0 || result[result.length - 1].includes(nums[i]) === false) {
            const complement = target - nums[i];
            if (map[complement] && map[complement] !== i) {
                result.push([nums[i], complement]);
                delete map[complement];
                delete map[nums[i]];
            }
        }
    }
    return result;
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([-3,-2,-1,0,0,1,2,3], 0));
// console.log(twoSum([-3,-2,-1,0,0,1,2,3], 3, 4));
