/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let deepestLevel = 0, sum = 0

    const traverse = (node, currLevel) => {
        if (!node) return

        if (currLevel == deepestLevel) sum += node.val
        else if (currLevel > deepestLevel) {
            deepestLevel = currLevel
            sum = node.val
        }

        traverse(node.left, currLevel + 1)
        traverse(node.right, currLevel + 1)
    }

    traverse(root, 1)

    return sum
};
