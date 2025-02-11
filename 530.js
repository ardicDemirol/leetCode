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
var getMinimumDifference = function (root) {
    let minDiff = Infinity;
    const result = [];
    inOrderTraverse(root);

    for (let i = 1; i < result.length; i++) {
        const tempDiff = result[i] - result[i - 1];
        if (tempDiff < minDiff) minDiff = tempDiff;
    }
    return minDiff;

    function inOrderTraverse(node) {
        if (!node) return;
        inOrderTraverse(node.left);
        result.push(node.val);
        inOrderTraverse(node.right);
    };
};