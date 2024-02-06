/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n == 1) return true
    if (n % 4 == 0 && n != 0) return isPowerOfFour(n / 4)
    return false
};
