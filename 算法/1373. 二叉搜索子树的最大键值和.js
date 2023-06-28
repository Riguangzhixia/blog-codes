var maxSumBST = function (root) {
    let res = 0;

    /* 
    需要递归的值：树是否满足BST，树下最大值是多少，最小值是多少
    */
    let dfs = (root) => {
        if (root == null) {
            return {
                isBST: true,
                min: Infinity,
                max: -Infinity,
                sum: 0,
            };
        }

        // 递归计算左右子树
        let left = dfs(root.left);
        let right = dfs(root.right);
        // 满足BST，计算节点值之和
        if (left.isBST && right.isBST && root.val > left.max && root.val < right.min) {
            let sum = left.sum + right.sum + root.val;
            res = Math.max(sum, res);
            return {
                isBST: true,
                min: Math.min(left.min, root.val),
                max: Math.max(right.max, root.val),
                sum,
            };
        } else {
            return { isBST: false };
        }
    };

    dfs(root);

    return res;
};