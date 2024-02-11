/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const rows = []

    rows.push([1])

    for (let i = 1; i < numRows; i++) {
        let currRow = []

        for (let j = 0; j < Math.ceil((i + 1) / 2); j++) {
            if (j == 0) currRow.push(1)
            else currRow.push(rows[i-1][j - 1] + rows[i-1][j])
        }

        if (i % 2 != 0) currRow = [...currRow, ...currRow.reverse()]
        else currRow = [...currRow, ...currRow.slice(0, -1).reverse()]
        
        rows.push(currRow)
    }

    return rows
};
