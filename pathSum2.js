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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const paths = []

    var helper = function(root, targetSum, currentPath) {
        if (!root) return

        if (root.val === targetSum && !root.left && !root.right) {
            paths.push([...currentPath, root.val])
            return
        }

        helper(root.left, targetSum - root.val, [...currentPath, root.val])
        helper(root.right, targetSum - root.val, [...currentPath, root.val])
    }

    helper(root, targetSum, [])
    
    return paths
};
