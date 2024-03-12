/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const hashset = new Set()

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == ".") continue

            const subBox = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            const subBoxString = `${subBox}-${board[i][j]}`
            const rowString = `row-${i}-${board[i][j]}`
            const colString = `col-${j}-${board[i][j]}`

            if (hashset.has(subBoxString) || hashset.has(rowString) || hashset.has(colString)) {
                return false
            }

            hashset.add(subBoxString)
            hashset.add(rowString)
            hashset.add(colString)
        }
    }

    return true
};
