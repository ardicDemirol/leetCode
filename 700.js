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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    const queue = [root];
    let current = null;
   
    while(queue.length > 0){
        current = queue.shift();
        if(current.val == val){
            return new TreeNode(current.val,current.left,current.right);
        }

        if(val <= current.val && current.left) queue.push(current.left);
        if(val >= current.val && current.right) queue.push(current.right);
    }
    return null;
};