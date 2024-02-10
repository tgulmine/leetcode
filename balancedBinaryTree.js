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
 * @return {boolean}
 */
const height = (node) => {
    if (!node) return 0

    return 1 + Math.max(height(node.left), height(node.right))
}

var isBalanced = function(root) {
    if (!root) return true

    let isDiffValid = Math.abs(height(root.left) - height(root.right)) < 2

    return isDiffValid && isBalanced(root.left) && isBalanced(root.right)
};
