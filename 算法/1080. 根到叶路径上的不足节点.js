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
 * @param {number} limit
 * @return {TreeNode}
 */

var sufficientSubset = function (root, limit) {
    let dfs = (parentNode, node, sum, isLeft) => {
        sum += node.val;
        if (!node.left && !node.right) {
            if (sum < limit) {
                if (isLeft) {
                    parentNode.left = null;
                } else {
                    parentNode.right = null;
                }
                return false;
            }
            return true;
        } else {
            let leftLim = node.left && dfs(node, node.left, sum, true);
            let rightLim = node.right && dfs(node, node.right, sum, false);
            let isBiggerThanLimit = leftLim || rightLim;
            if (!isBiggerThanLimit) {
                if (parentNode === null) {
                    root = null;
                } else {
                    if (isLeft) {
                        parentNode.left = null;
                    } else {
                        parentNode.right = null;
                    }
                }
            }
            return isBiggerThanLimit;
        }
    }
    dfs(null, root, 0, true);
    return root;
};