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
var averageOfLevels = function (root) {
    const output = [];
    const queue = [root];
    while (queue.length > 0) {
        const l = queue.length;
        let total = 0;
        for (let i = 0; i < l; i++) {
            const current = queue.shift();
            total += current.val;
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        output.push(total/l);
    }
    return output;
};