/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let counter = 0;

    for (let current = 1; current < nums.length; current++) {
        if (nums[counter] !== nums[current]) {
            counter++;
            nums[counter] = nums[current];
        }
    }

    return counter + 1;
};
