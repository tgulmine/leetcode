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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = []

    var helper = function(root, currentPath) {
        if (!root) return

        if (!root.left && !root.right) {
            paths.push((currentPath + "->" + root.val).substring(2))
            return
        }

        helper(root.left, currentPath + "->" + root.val)
        helper(root.right, currentPath + "->" + root.val)
    }

    helper(root, "")

    return paths
};
