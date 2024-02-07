/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x

    let low = 1, mid, high = Math.floor(x / 2)

    while (low <= high) {
        mid = Math.ceil((low + high) / 2)

        if (mid * mid <= x && x < (mid + 1) * (mid + 1)) return mid
        else if (mid * mid > x) high = mid - 1
        else low = mid + 1
    }

    return 1
};
