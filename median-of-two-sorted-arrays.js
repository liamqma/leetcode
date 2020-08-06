/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const foo = [...nums1, ...nums2].sort((a,b) => { return a - b });
    if (foo.length % 2 === 0) {
        return (foo[foo.length / 2] + foo[foo.length / 2 - 1]) / 2;
    } else {
        return foo[Math.floor(foo.length / 2)];
    }
};