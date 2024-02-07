/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var helper = function(x, pow) {
        if (pow == 0) return 1

        if (pow % 2 == 0) return helper(x * x, pow / 2)
        return x * helper(x * x, (pow - 1) / 2)
    }

    const result = helper(x, Math.abs(n))

    if (n < 0) return 1 / result
    return result
};
