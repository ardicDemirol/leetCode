/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true; 
    if (!p || !q) return false; 

    const queue1 = [p];
    const queue2 = [q];
    
    while(queue1.length > 0 && queue2.length > 0) {
        const current1 = queue1.shift();
        const current2 = queue2.shift();

        if (current1.val !== current2.val) return false;

        if (current1.left) queue1.push(current1.left);
        if (current1.right) queue1.push(current1.right);
        if (current2.left) queue2.push(current2.left);
        if (current2.right) queue2.push(current2.right);
        if(current1.left && !current2.left || !current1.left && current2.left) return false;
        if(current1.right && !current2.right || !current1.right && current2.right) return false;
    }

   
    return queue1.length === queue2.length;
};


// function isSameTree(p, q) {
//   if (!p && !q) return true;
//   if (!p || !q || p.val !== q.val) return false;
  
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// }