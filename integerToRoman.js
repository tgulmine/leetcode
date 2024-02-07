/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const dictNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const dictRomanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let result = ""

    for (let i = 0; i < dictNumbers.length; i++) {
        while (num >= dictNumbers[i]) {
            result += dictRomanNumerals[i]
            num -= dictNumbers[i]
        }

        if (num == 0) break;
    }
    
    return result
};