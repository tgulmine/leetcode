/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false

    let str = x.toString()

    for (i = 0; i < str.length / 2; i++) {
      if (str.charAt(i) !== str.charAt(str.length - (1 + i))) return false
    }

    return true
};
