/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b)

    let closestNumber = Infinity

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] != nums[i - 1]) {
            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
                let currentSum = nums[i] + nums[left] + nums[right]

                if (Math.abs(target - currentSum) < Math.abs(target - closestNumber)) {
                    closestNumber = currentSum

                    if (currentSum === target) return currentSum
                }

                if (currentSum < target) {
                    while (nums[left] === nums[left + 1]) left++
                    left++
                } else if (currentSum > target) {
                    while (nums[right] === nums[right - 1]) right--
                    right--
                }
            }
        }
    }

    return closestNumber
};
