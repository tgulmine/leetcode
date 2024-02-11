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
var averageOfSubtree = function(root) {
    let result = 0

    const traverse = (node) => {
        if (!node) return [0, 0]

        const [leftCount, leftSum] = traverse(node.left)
        const [rightCount, rightSum] = traverse(node.right)

        const nodeCount = 1 + leftCount + rightCount
        const nodeSum = node.val + leftSum + rightSum

        if (Math.floor(nodeSum / nodeCount) == node.val) result++

        return [nodeCount, nodeSum]
    }

    traverse(root)

    return result
};
