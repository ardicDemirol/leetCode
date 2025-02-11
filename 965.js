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
var isUnivalTree = function (root) {
    const queue = [root];
    const val = root.val;
    while (queue.length > 0) {
        const current = queue.shift();
        if(val !== current.val) return false;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return true;
};