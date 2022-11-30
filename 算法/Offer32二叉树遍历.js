/**
BFS
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function levelOrder(root){
    let currentNodes = [root];
    let result = [];
    while(currentNodes.length !== 0) {
        let nextLevelNodes = [];
        currentNodes.forEach((item) => {
            result.push(item.val);
            if(item.left !== null) {
                nextLevelNodes.push(item.left)
            }
            if(item.right !== null) {
                nextLevelNodes.push(item.right)
            }
        })
        currentNodes = nextLevelNodes;
    }
    return result;
}

let node1 = new TreeNode(3, new TreeNode(9));

console.log(node1);

console.log(levelOrder(node1));