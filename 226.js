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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;

    queue = [root];
    
    while (queue.length > 0) {
        const length = queue.length;

        for (let i = 0; i < length; i++) {
            const current = queue.shift();
            const temp = current.right;
            current.right = current.left;
            current.left = temp;

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }

    return root;

};