/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return []

    const combinationList = []
    const mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

    function solve(digitIndex, currentCombination) {
        if (digitIndex >= digits.length) {
            combinationList.push(currentCombination);
            return;
        }

        let digit = parseInt(digits[digitIndex])
        let digitLetters = mapping[digit]

        for (let letterIndex = 0; letterIndex < digitLetters.length; letterIndex++) {
            solve(digitIndex + 1, currentCombination + digitLetters[letterIndex]);
        }
    }

    solve(0, "")

    return combinationList
};
