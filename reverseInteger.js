/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MIN = Math.pow(2, 31) * -1
    const MAX = MIN * -1 - 1

    let digits = parseInt(x.toString().split('').reverse().join(''))

    if (digits < MIN || digits > MAX) return 0
    
    if (x < 0) return digits * -1
    return digits
};