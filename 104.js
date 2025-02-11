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
var maxDepth = function (root) {
    if (!root) return 0;
    const queue = [root];
    let count = 0;
    while (queue.length > 0) {
        let l = queue.length;
        for (let i = 0; i < l; i++) {
            const current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        count++;
    }
    return count;
};