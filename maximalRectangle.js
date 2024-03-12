/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let copy = [...matrix]
    const rows = matrix.length
    const cols = matrix[0].length
    let maxArea = 0

    var getNodeHeight = function(row, col) {
        if (row === 0) return copy[row][col] == "1" ? 1 : 0
        return copy[row][col] == "1" ? copy[row-1][col] + 1 : 0
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            copy[row][col] = getNodeHeight(row, col)
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let height = copy[row][col]
            let width = 0
            for (let n = col; n >= 0; n--) {
                if (height === 0) break
                if (copy[row][n] < height) height = copy[row][n]
                width++
                maxArea = Math.max(maxArea, height * width)
            }
        }
    }

    return maxArea
};
