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
var minDepth = function(root) {
    if (!root) return 0

    let left = minDepth(root.left)
    let right = minDepth(root.right)

    if (!root.left) return 1 + right
    if (!root.right) return 1 + left

    return 1 + Math.min(left, right)
};
