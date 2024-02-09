/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    let left = 0, right = str.length - 1
    
    while (left < right) {
        if (str.charAt(left) !== str.charAt(right)) return false

        left++
        right--
    }

    return true
};
