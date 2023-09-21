/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m)

    for (j = 0; j < n; j++) {
      nums1.push(nums2[j])
    }

    nums1.sort(function(a, b) {
      return a - b;
    });
};
