/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const copy = [...matrix]

    const rows = matrix.length
    const cols = matrix[0].length

    let max = 0

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (copy[i][j] === "1") {
                if (i > 0 && j > 0) {
                    copy[i][j] = Math.min(copy[i][j-1], copy[i-1][j], copy[i-1][j-1]) + 1
                }
                max = Math.max(copy[i][j], max)
            }
        }
    }

    return max ** 2
};