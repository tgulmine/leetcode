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
var maxDepth = function(root) {
    if (!root) return 0

    let max = 1

    function traverse(root, currentMax) {
        currentMax++

        if (!root.left && !root.right && currentMax > max) max = currentMax

        if (root.left) traverse(root.left, currentMax)
        if (root.right) traverse(root.right, currentMax)
    }

    traverse(root, 0)

    return max
};

// Faster solution
var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return 1 + Math.max(left, right)
};