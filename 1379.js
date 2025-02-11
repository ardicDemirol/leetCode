/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    const queue1 = [original];
    const queue2 = [cloned];

    while (queue1.length > 0) {
        const current1 = queue1.shift();
        const current2 = queue2.shift();
        if (current1 === target) return current2;
        
        if (current1.left) {
            queue1.push(current1.left);
            queue2.push(current2.left);
        }
        if (current1.right) {
            queue1.push(current1.right);
            queue2.push(current2.right);
        }
    }
};