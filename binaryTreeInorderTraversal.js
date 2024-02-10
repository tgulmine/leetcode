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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const nodes = []
    
    function traverse(root) {
        if (!root) return

        traverse(root.left)
        nodes.push(root.val)
        traverse(root.right)
    }

    traverse(root)

    return nodes
};
