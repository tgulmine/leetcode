/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let intValue = 0;

    function returnIntValueFromRomanChar(romanChar) {
      switch (romanChar) {
        case 'I':
          return 1
        case 'V':
          return 5
        case 'X':
          return 10
        case 'L':
          return 50
        case 'C':
          return 100
        case 'D':
          return 500
        case 'M':
          return 1000
      }
    }

    function addToIntValue(romanChar, subtract = false) {
      if (subtract) intValue -= returnIntValueFromRomanChar(romanChar)
      else intValue += returnIntValueFromRomanChar(romanChar) 
    }

    for (i = 0; i < s.length; i++) {
      if (i === s.length - 1) addToIntValue(s.charAt(i))

      else if (
        (s.charAt(i) === "I" && (s.charAt(i+1) === "V" || s.charAt(i+1) === "X")) ||
        (s.charAt(i) === "X" && (s.charAt(i+1) === "L" || s.charAt(i+1) === "C")) ||
        (s.charAt(i) === "C" && (s.charAt(i+1) === "D" || s.charAt(i+1) === "M"))
      ) {
        addToIntValue(s.charAt(i+1))
        addToIntValue(s.charAt(i), true)
        i++
      }

      else addToIntValue(s.charAt(i))
    }

    return intValue
};
