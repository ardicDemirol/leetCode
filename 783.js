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
var minDiffInBST = function (root) {
    let previousNode = null;
    let minDiff = Infinity;
    inOrderTraverse(root);

    return minDiff;

    function inOrderTraverse(node) {
        if (!node) return;
        inOrderTraverse(node.left);
        if (previousNode) minDiff = Math.min(minDiff, node.val - previousNode.val);
        previousNode = node;
        inOrderTraverse(node.right);
    };
};