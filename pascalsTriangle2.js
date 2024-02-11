/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var row = new Array(rowIndex + 1)

    row[0] = row[rowIndex] = 1

    for(let i = 1, up = rowIndex; i < rowIndex; i++, up--)
        row[i] = row[i - 1] * up / i

    return row
};
