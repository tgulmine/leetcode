/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return []

    function getLetterFromNumber(number, index) {
        switch(number) {
            case '2':
                if (index === 0) return 'a'
                else if (index === 1) return 'b'
                else return 'c'
            case '3':
                if (index === 0) return 'd'
                else if (index === 1) return 'e'
                else return 'f'
            case '4':
                if (index === 0) return 'g'
                else if (index === 1) return 'h'
                else return 'i'
            case '5':
                if (index === 0) return 'j'
                else if (index === 1) return 'k'
                else return 'l'
            case '6':
                if (index === 0) return 'm'
                else if (index === 1) return 'n'
                else return 'o'
            case '7':
                if (index === 0) return 'p'
                else if (index === 1) return 'q'
                else if (index === 2) return 'r'
                else return 's'
            case '8':
                if (index === 0) return 't'
                else if (index === 1) return 'u'
                else return 'v'      
            case '9':
                if (index === 0) return 'w'
                else if (index === 1) return 'x'
                else if (index === 2) return 'y'
                else return 'z' 
        }
    }

    function digitsInNumber(digitIndex) {
        if (digits[digitIndex] === '7' || digits[digitIndex] === '9') return 4
        return 3
    }

    function calcCombinationLettersQuantity(index) {
        let quantity = 1

        for (let digitIndex = index; digitIndex < digits.length; digitIndex++) {
            quantity *= digitsInNumber(digitIndex)
        }

        return quantity
    }

    function calcCombinationDigitsQuantity(index) {
        let quantity = 1

        for (let digitIndex = index; digitIndex > 0; digitIndex--) {
            quantity *= digitsInNumber(digitIndex - 1)
        }

        return quantity
    }

    const letterCombinations = []
    const quantity = calcCombinationLettersQuantity(0)
    
    for (let combination = 0; combination < quantity; combination++) letterCombinations.push('')

    let letterCombinationsIndex = 0

    for (let digitIndex = 0; digitIndex < digits.length; digitIndex++) {
        let timesRepeatedLetters = calcCombinationLettersQuantity(digitIndex + 1)
        let timesRepeatedDigits = calcCombinationDigitsQuantity(digitIndex)
        let digitInNumberLimit = digitsInNumber(digitIndex)

        for (let repetitionsDigits = 0; repetitionsDigits < timesRepeatedDigits; repetitionsDigits++) {
            for (let digitInNumberIndex = 0; digitInNumberIndex < digitInNumberLimit; digitInNumberIndex++) {
                for (let repetitionLetters = 0; repetitionLetters < timesRepeatedLetters; repetitionLetters++) {
                    letterCombinations[letterCombinationsIndex] += getLetterFromNumber(digits[digitIndex], digitInNumberIndex)

                    letterCombinationsIndex++
                    if (letterCombinationsIndex >= quantity) letterCombinationsIndex = 0
                }
            }
        }
    }

    return letterCombinations
};
