/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strings) {
    const firstString = strings[0]
    
    for (let currentLength = firstString.length; currentLength > 0; currentLength--) {
        for (let currentString = 1; currentString < strings.length; currentString++) {
            if (firstString.substring(0, currentLength) !== strings[currentString].substring(0, currentLength)) break;
            if (currentString === strings.length - 1) return firstString.substring(0, currentLength)
        }
    }

    return ''
};
