/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let copy = [...matrix]
    const rows = matrix.length
    const cols = matrix[0].length
    let spiral = []

    let direction = "right"
    let currRow = 0, currCol = 0
    let limitMinRow = 0, limitMaxRow = rows - 1
    let limitMinCol = 0, limitMaxCol = cols - 1

    for (let n = 0; n < rows * cols; n++) {
        spiral.push(copy[currRow][currCol])
  
        if (direction == "right") {
            if (currCol < limitMaxCol) {
                currCol++
            } else {
                direction = "bottom"
                limitMinRow++
                currRow++
            }
        } else if (direction == "bottom") {
            if (currRow < limitMaxRow) {
                currRow++
            } else {
                direction = "left"
                limitMaxCol--
                currCol--
            }
        } else if (direction == "left") {
            if (currCol > limitMinCol) {
                currCol--
            } else {
                direction = "top"
                limitMaxRow--
                currRow--
            }
        } else if (direction == "top") {
            if (currRow > limitMinRow) {
                currRow--
            } else {
                direction = "right"
                limitMinCol++
                currCol++
            }
        }
    }

    return spiral
};

// Better solution:

function spiralOrder(matrix) {
    const elementsOrder = []
    while (matrix.length > 0 && matrix[0][0] !== undefined) {
        // Steal the first row.
        elementsOrder.push(...matrix.shift());
        // Steal the right items.
        matrix.forEach(row => elementsOrder.push(row.pop()));
        // Turn the matrix over.
        matrix.reverse().map(row => row.reverse());
    }
    return elementsOrder;
};
