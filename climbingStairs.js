/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = new Array(n + 1).fill(-1)

    var helper = function(n, memo) {
        if (n < 0) return 0
        if (n == 0) return 1

        if (memo[n] == -1) memo[n] = helper(n - 1, memo) + helper(n - 2, memo)

        return memo[n]
    }

    return helper(n, memo)
};
